import constants from "@/constants/constants";
import { NextRequest, NextResponse as response } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(constants.SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { isValid, errors } = validate(body);

  if (!isValid) {
    return response.json(
      {
        message: `Error: ${errors.join(", ")}`,
      },
      { status: 400 }
    );
  }

  const message = {
    to: "hello@clewup.co.uk",
    from: "landing@clewup.co.uk",
    subject: `New message from ${body.name}`,
    text: `Name: ${body.name}, Email: ${body.email}, Telephone: ${body.telephone}, Message: ${body.message}`,
    html: `<div><p>Name: ${body.name}</p><p>Email: ${body.email}</p><p>Telephone: ${body.telephone}</p><p>Message: ${body.message}</p></div>`,
  };

  try {
    const emailResponse = await sgMail.send(message);

    return response.json({ message: "Email successfully sent" });
  } catch (err: any) {
    return response.error();
  }
}

function validate(body: any) {
  const errors: string[] = [];

  if (!body.name) errors.push("Missing name");
  if (!body.email) errors.push("Missing email");
  if (!body.message) errors.push("Missing message");

  return {
    isValid: errors.length === 0,
    errors,
  };
}
