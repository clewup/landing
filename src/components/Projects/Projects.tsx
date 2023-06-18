import Project from "@/components/Projects/components/Project/Project";
import projects from "@/constants/projects";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center"
    >
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
