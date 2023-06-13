import { ProjectType } from "@/types/projectTypes";
import Link from "next/link";
import React, { FC } from "react";
import { Eye as EyeIcon } from "react-feather";

interface ProjectProps {
  project: ProjectType;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between gap-10 p-5 border-[1px] rounded-2xl">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl uppercase font-bold">{project.name}</h1>
        <div>
          <img src={project.image} alt={project.name} className="rounded-2xl" />
        </div>
        <p className="text-2xl">{project.description}</p>
      </div>

      <Link
        href={project.website}
        target={"_blank"}
        className="flex gap-2 items-center btn btn-primary"
      >
        <p className="underline font-bold uppercase text-3xl">VIEW</p>
        <EyeIcon />
      </Link>
    </div>
  );
};

export default Project;
