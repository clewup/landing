import Project from "@/components/Projects/components/Project/Project";
import projects from "@/constants/projects";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
