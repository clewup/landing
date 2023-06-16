import Cursor from "@/components/Cursor/Cursor";
import Hero from "@/components/Hero/Hero";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Project from "@/components/Project/Project";
import Introduction from "@/components/Introduction/Introduction";
import projects from "@/constants/projects";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col">
      <Cursor />

      <Hero />
      <Introduction />

      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>

      <div className="flex flex-col gap-20 py-20">
        <div className="flex gap-20">
          <h2 className="text-2xl font-bold ml-5 w-1/4">SERVICES</h2>
          <span className="text-2xl">
            <p>UI/UX DEVELOPMENT</p>
            <p>API DEVELOPMENT</p>
            <p>CLOUD COMPUTING</p>
          </span>
        </div>

        <div className="flex gap-20">
          <h2 className="text-2xl font-bold ml-5 w-1/4">
            FRAMEWORKS/LIBRARIES
          </h2>
          <span className="text-2xl">
            <p>REACT.JS</p>
            <p>NEXT.JS</p>
            <p>.NET</p>
            <p>NEST.JS</p>
            <p>NODE.JS</p>
          </span>
        </div>

        <div className="flex gap-20">
          <h2 className="text-2xl font-bold ml-5 w-1/4">LANGUAGES</h2>
          <span className="text-2xl">
            <p>TYPESCRIPT</p>
            <p>C#</p>
            <p>SASS</p>
          </span>
        </div>

        <div className="flex gap-20">
          <h2 className="text-2xl font-bold ml-5 w-1/4">DATABASES</h2>
          <span className="text-2xl">
            <p>MSSQL</p>
            <p>POSTGRES</p>
            <p>MONGODB</p>
          </span>
        </div>
      </div>
    </PageWrapper>
  );
}
