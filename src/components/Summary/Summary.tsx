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
      className="min-h-screen flex gap-20 items-center justify-end"
    >
      <div className="w-1/2 flex flex-col items-center gap-10">
        <h1 className="text-6xl font-bold">REACH OUT</h1>

        <button
          className="rounded-full bg-base-light px-6 py-3 text-2xl border-[1px] border-white flex gap-2 items-center"
          onMouseEnter={() => setCursor("link")}
          onMouseLeave={() => setCursor("default")}
        >
          hello@clewup.co.uk
          <SendIcon className="text-primary" />
        </button>
      </div>
      <div className="flex flex-col gap-20 w-1/2 ">
        <KeyArea
          area="SERVICES"
          skills={["UI/UX DEVELOPMENT", "API DEVELOPMENT", "CLOUD COMPUTING"]}
        />
        <KeyArea
          area="FRAMEWORKS/LIBRARIES"
          skills={[
            "REACT.JS",
            "NEXT.JS",
            ".NET",
            "NEST.JS",
            "NODE.JS",
            "TAILWIND",
            "FRAMER",
          ]}
        />
        <KeyArea area="LANGUAGES" skills={["TYPESCRIPT", "C#", "SASS"]} />
        <KeyArea area="DATABASES" skills={["MSSQL", "POSTGRES", "MONGODB"]} />
      </div>
    </section>
  );
};

export default Summary;
