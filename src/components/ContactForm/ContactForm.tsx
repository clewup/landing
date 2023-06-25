"use client";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";
import { Send } from "react-feather";
import * as Yup from "yup";

interface ContactFormValues {
  name: string;
  email: string;
  telephone: string;
  message: string;
}

const ContactForm: FC = () => {
  const [isLoading, setLoading] = useState(false);

  const initialValues: ContactFormValues = {
    name: "",
    email: "",
    telephone: "",
    message: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be 100 characters or less")
      .typeError("Name must be a string")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .min(5, "Email must be at least 5 characters")
      .max(100, "Email must be 100 characters or less")
      .typeError("Email must be a string")
      .required("Email is required"),
    telephone: Yup.string()
      .min(10, "Invalid telephone number")
      .max(12, "Invalid telephone number")
      .matches(phoneRegExp, "Invalid telephone number")
      .typeError("Telephone must be a string")
      .notRequired(),
    message: Yup.string()
      .min(20, "Message must be at least 20 characters")
      .typeError("Message must be a string")
      .required("Message is required"),
  });

  async function onSubmit(
    formValues: ContactFormValues,
    formHelpers: FormikHelpers<ContactFormValues>
  ) {
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formValues),
    });

    if (response.ok) {
      formHelpers.resetForm();
    }

    setLoading(false);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        return (
          <Form className="flex flex-col gap-5">
            <Field
              name="name"
              placeholder="Name *"
              className="py-3 px-2 rounded-2xl text-2xl text-base"
              disabled={isLoading}
            />
            <ErrorMessage name="name">
              {(error: string) => <p className="text-red-500">{error}</p>}
            </ErrorMessage>

            <Field
              name="email"
              placeholder="Email *"
              className="py-3 px-2 rounded-2xl text-2xl text-base"
              disabled={isLoading}
            />
            <ErrorMessage name="email">
              {(error: string) => <p className="text-red-500">{error}</p>}
            </ErrorMessage>

            <Field
              name="telephone"
              placeholder="Phone"
              className="py-3 px-2 rounded-2xl text-2xl text-base"
              disabled={isLoading}
            />
            <ErrorMessage name="telephone">
              {(error: string) => <p className="text-red-500">{error}</p>}
            </ErrorMessage>

            <Field
              name="message"
              component="textarea"
              placeholder="Message *"
              className="py-3 px-2 rounded-2xl text-2xl text-base h-40"
              disabled={isLoading}
            />
            <ErrorMessage name="message">
              {(error: string) => <p className="text-red-500">{error}</p>}
            </ErrorMessage>

            <button
              className="rounded-full bg-primary py-3 mt-10 flex items-center gap-2 justify-center text-lg font-bold"
              disabled={isLoading}
            >
              <p>SEND</p>
              <Send size={18} />
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
