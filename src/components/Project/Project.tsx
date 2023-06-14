"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { ProjectType } from "@/types/projectTypes";
import React, { FC } from "react";

interface ProjectProps {
  project: ProjectType;
}

const Project: FC<ProjectProps> = ({ project }) => {
  const { setVariant, setText } = useCursor();

  return (
    <div
      className="flex flex-col justify-between gap-10 p-5 py-20 border-y-[1px]"
      onMouseEnter={() => {
        setVariant("expand");
        setText("VIEW");
      }}
      onMouseLeave={() => {
        setVariant("default");
        setText("");
      }}
    >
      <h1 className="text-9xl uppercase font-bold">{project.name}</h1>
    </div>
  );
};

export default Project;
