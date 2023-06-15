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
    </PageWrapper>
  );
}
