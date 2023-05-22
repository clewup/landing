"use client";

import projects from "@/data/projects";
import { Project } from "@/types/project";
import Link from "next/link";
import React, { FC } from "react";

const Projects = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1, projects.length);

  return (
    <div>
      <div className="w-screen h-screen flex relative items-center px-32">
        <div className="w-1/2 flex flex-col gap-10">
          <h1 className="text-7xl font-bold uppercase">FEATURED</h1>
          <span>
            <h2 className="text-5xl font-bold uppercase">
              {featuredProject.name}
            </h2>
            <p className="text-2xl">{featuredProject.description}</p>
          </span>

          <Link href={featuredProject.website} target={"_blank"}>
            <p className="underline font-bold uppercase text-3xl">
              Take a Peek!
            </p>
          </Link>
        </div>
        <img
          src={featuredProject.image}
          alt={featuredProject.name}
          className="absolute w-2/5 right-32 rounded-2xl"
        />
      </div>

      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-7xl font-bold mb-32">OTHER PROJECTS</h1>
        <div className="grid grid-cols-3 gap-5 px-32">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl uppercase font-bold">{project.name}</h1>
      <div>
        <img src={project.image} alt={project.name} className="rounded-2xl" />
      </div>
      <p className="text-2xl">{project.description}</p>
    </div>
  );
};

export default Projects;
