"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import SummaryArea from "@/components/SummaryArea/SummaryArea";
import { useCursor } from "@/contexts/CursorContext/CursorContext";
import React from "react";
import { Send as SendIcon } from "react-feather";

const Summary = () => {
  return (
    <section
      id="summary"
      className="min-h-screen flex items-center py-20 md:py-0"
    >
      <div className="flex flex-col gap-20 px-5 md:px-20 w-full md:flex-row">
        <div className="flex flex-col gap-5 md:w-1/3 md:gap-10">
          <span className="text-7xl font-bold font-drukCond flex gap-2">
            <h1 className="text-primary">✷</h1>
            <h1>REACH OUT</h1>
          </span>

          <ContactForm />
        </div>
        <div className="flex flex-col gap-10 md:w-2/3">
          <SummaryArea
            area="SERVICES"
            skills={["UI/UX design", "API development", "Cloud computing"]}
          />
          <SummaryArea
            area="FRAMEWORKS/LIBRARIES"
            skills={[
              "React.js",
              "Next.js",
              ".NET",
              "Nest.js",
              "Node.js",
              "Tailwind",
              "Framer",
            ]}
          />
          <SummaryArea area="LANGUAGES" skills={["TypeScript", "C#", "Sass"]} />
          <SummaryArea
            area="DATABASES"
            skills={["MsSQL", "Postgres", "MongoDB"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Summary;
