"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { ProjectType } from "@/types/projectTypes";
import Link from "next/link";
import React, { FC } from "react";
import { motion as m, Variants } from "framer-motion";

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

  function handleMouseEnter() {
    setCursor("expand", cursorContent);
  }

  function handleMouseLeave() {
    setCursor("default");
  }

  return (
    <Link href={project.website} target="_blank" className={className}>
      <m.div
        variants={containerVariants}
        initial="initial"
        whileHover="hover"
        className="relative flex flex-col gap-10 w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <m.img
          src={project.image}
          alt={project.name}
          className="w-full aspect-square object-cover object-left rounded-2xl"
        />
        <m.p
          variants={titleVariants}
          className="text-xl uppercase font-bold -mt-10"
        >
          {project.name} / {project.category}
        </m.p>
      </m.div>
    </Link>
  );
};

export default Project;
