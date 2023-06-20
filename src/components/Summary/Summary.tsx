"use client";

import KeyArea from "@/components/KeyArea/KeyArea";
import React from "react";

const Summary = () => {
  return (
    <section
      id="summary"
      className="min-h-screen flex gap-20 items-center justify-end"
    >
      <div className="flex flex-col gap-20 w-1/2">
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
