import Project from "@/components/Projects/components/Project/Project";
import projects from "@/constants/projects";
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen relative">
      <Project
        project={projects[0]}
        className="absolute top-20 left-40 h-72 w-72"
      />
      <Project
        project={projects[1]}
        className="absolute top-10 right-40 h-72 w-72"
      />
      <Project
        project={projects[2]}
        className="absolute bottom-40 left-[45%] h-96 w-96"
      />
    </section>
  );
};

export default Projects;
