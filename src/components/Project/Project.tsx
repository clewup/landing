"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { ProjectType } from "@/types/projectTypes";
import Link from "next/link";
import React, { FC } from "react";
import { motion as m, Variants } from "framer-motion";
import cx from "classnames";

interface ProjectProps {
  project: ProjectType;
  className?: string;
}

const Project: FC<ProjectProps> = ({ project, className }) => {
  const { setCursor } = useCursor();

  const cursorContent = <p className="underline font-bold text-xl">VIEW</p>;

  const containerVariants: Variants = {
    initial: {},
    hover: {},
  };

  const titleVariants: Variants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <Link href={`/project/${project.name}`} className={className}>
      <m.div
        variants={containerVariants}
        initial="initial"
        whileHover="hover"
        className="relative flex flex-col gap-10 w-full h-full overflow-y-hidden"
        onMouseEnter={() => setCursor("expand", cursorContent)}
        onMouseLeave={() => setCursor("default")}
      >
        <m.img
          src={project.image}
          alt={project.name}
          className={cx(
            "w-full rounded-xl aspect-square object-cover",
            project.background
          )}
          layoutId="project_image"
        />
        <m.p
          variants={titleVariants}
          className="font-drukWide text-xl uppercase font-bold -mt-8"
        >
          {project.name} / {project.category}
        </m.p>
      </m.div>
    </Link>
  );
};

export default Project;
