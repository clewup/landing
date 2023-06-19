"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { ProjectType } from "@/types/projectTypes";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { motion as m, Variants } from "framer-motion";

interface ProjectProps {
  project: ProjectType;
  className?: string;
}

const Project: FC<ProjectProps> = ({ project, className }) => {
  const { setCursor } = useCursor();

  const cursorContent = (
    <div className="flex bg-primary h-[150px] w-[150px] justify-center items-center rounded-[50%]">
      <p className="underline font-bold text-xl">VIEW</p>
    </div>
  );

  const containerVariants: Variants = {
    initial: {},
    hover: {
      transition: {},
    },
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

  const imageVariants: Variants = {
    initial: {
      filter: "grayscale(1)",
    },
    hover: {
      filter: "grayscale(0)",
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
        className="flex flex-col gap-10 w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <m.img
          variants={imageVariants}
          src={project.image}
          alt={project.name}
          className="w-full aspect-square object-cover"
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
