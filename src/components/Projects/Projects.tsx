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
      <div className="h-screen flex items-center">
        <FeaturedProjectCard project={featuredProject} />
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

interface FeaturedProjectCardProps {
  project: Project;
}

const FeaturedProjectCard: FC<FeaturedProjectCardProps> = ({ project }) => {
  return (
    <div className="w-screen flex gap-10 px-32">
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className="text-7xl font-bold uppercase">FEATURED</h1>
        <span>
          <h2 className="text-5xl font-bold uppercase">{project.name}</h2>
          <p className="text-2xl">{project.description}</p>
        </span>

        <Link href={project.website} target={"_blank"}>
          <p className="underline font-bold uppercase text-3xl">Take a Peek!</p>
        </Link>
      </div>
      <div className="w-1/2">
        <img src={project.image} alt={project.name} className="rounded-2xl" />
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
