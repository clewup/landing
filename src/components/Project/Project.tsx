"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { ProjectType } from "@/types/projectTypes";
import React, { FC } from "react";
import { Eye as EyeIcon } from "react-feather";

interface ProjectProps {
  project: ProjectType;
}

const Project: FC<ProjectProps> = ({ project }) => {
  const { setCursor } = useCursor();

  const cursorContent = (
    <div className="flex gap-2 items-center relative bg-primary rounded-[50%] h-[150px] w-[150px] justify-center opacity-90">
      <p className="underline font-bold">VIEW</p>
      <EyeIcon size={30} />
    </div>
  );

  return (
    <div
      className="flex flex-col justify-between gap-10 p-5 py-20 border-y-[1px]"
      onMouseEnter={() => setCursor("image", cursorContent, project.image)}
      onMouseLeave={() => setCursor("default")}
    >
      <h1 className="text-9xl uppercase font-bold">{project.name}</h1>
    </div>
  );
};

export default Project;
