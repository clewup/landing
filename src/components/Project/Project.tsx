import { ProjectType } from "@/types/projectTypes";
import Link from "next/link";
import React, { FC } from "react";
import { Eye as EyeIcon } from "react-feather";

interface ProjectProps {
  project: ProjectType;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between gap-10 p-5 py-20 border-y-[1px]">
      <h1 className="text-9xl uppercase font-bold">{project.name}</h1>
    </div>
  );
};

export default Project;
