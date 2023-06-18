"use client";

import Skill from "@/components/Summary/components/Skill/Skill";
import React from "react";

const Summary = () => {
  return (
    <section id="summary" className="min-h-screen flex justify-end">
      <div className="flex flex-col gap-20 justify-center w-1/2">
        <h1 className="text-7xl italic underline">IN A NUTSHELL</h1>
        <Skill
          heading="SERVICES"
          areas={["UI/UX DEVELOPMENT", "API DEVELOPMENT", "CLOUD COMPUTING"]}
        />

        <Skill
          heading="FRAMEWORKS/LIBRARIES"
          areas={["REACT.JS", "NEXT.JS", ".NET", "NEST.JS", "NODE.JS"]}
        />

        <Skill heading="LANGUAGES" areas={["TYPESCRIPT", "C#", "SASS"]} />

        <Skill heading="DATABASES" areas={["MSSQL", "POSTGRES", "MONGODB"]} />
      </div>
    </section>
  );
};

export default Summary;
