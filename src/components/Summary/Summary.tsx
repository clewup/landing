"use client";

import KeyArea from "@/components/KeyArea/KeyArea";
import { useCursor } from "@/contexts/CursorContext/CursorContext";
import React from "react";
import { Send as SendIcon } from "react-feather";

const Summary = () => {
  const { setCursor } = useCursor();

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

          <span className="flex gap-2 text-2xl items-center">
            <p>Email:</p>
            <a
              href="mailto:hello@clewup.co.uk"
              className="underline"
              onMouseEnter={() => setCursor("link")}
              onMouseLeave={() => setCursor("default")}
            >
              hello@clewup.co.uk
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-10 md:w-2/3">
          <KeyArea
            area="SERVICES"
            skills={["UI/UX design", "API development", "Cloud computing"]}
          />
          <KeyArea
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
          <KeyArea area="LANGUAGES" skills={["TypeScript", "C#", "Sass"]} />
          <KeyArea area="DATABASES" skills={["MsSQL", "Postgres", "MongoDB"]} />
        </div>
      </div>
    </section>
  );
};

export default Summary;
