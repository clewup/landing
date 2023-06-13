import About from "@/components/About/About";
import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Hero from "@/components/Hero/Hero";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Project from "@/components/Project/Project";
import projects from "@/data/projects";
import React from "react";

export default function Home() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1, projects.length);

  return (
    <PageWrapper className="flex flex-col">
      <Hero />
      <About />

      <div className="flex flex-col gap-5">
        <h1 className="text-9xl font-bold">PROJECTS</h1>

        <FeaturedProject project={featuredProject} />
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
