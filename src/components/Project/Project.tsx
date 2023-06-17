"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { ProjectType } from "@/types/projectTypes";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Eye as EyeIcon } from "react-feather";
import { motion as m } from "framer-motion";

interface ProjectProps {
  project: ProjectType;
}

const Project: FC<ProjectProps> = ({ project }) => {
  const { setCursor } = useCursor();

  const [isHovering, setHovering] = useState(false);

  const cursorContent = (
    <div className="flex bg-primary h-[150px] w-[150px] justify-center items-center rounded-[50%]">
      <p className="underline font-bold text-xl">VIEW</p>
    </div>
  );

  function handleMouseEnter() {
    setCursor("expand", cursorContent, project.image);
    setHovering(true);
  }

  function handleMouseLeave() {
    setCursor("default");
    setHovering(false);
  }

  return (
    <Link href={project.website} target="_blank">
      <m.div
        variants={{ initial: { x: 0 }, hover: { x: 0 } }}
        initial="initial"
        whileHover="hover"
        className="flex justify-between gap-10 py-20 border-y-[1px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <m.h1
          variants={{
            initial: { x: 0, opacity: 1 },
            hover: { x: 50, opacity: 0.5 },
          }}
          transition={{ duration: 0.7 }}
          className="text-9xl uppercase font-bold"
        >
          {project.name}
        </m.h1>

        {isHovering && (
          <m.div
            className="w-1/3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <p>{project.description}</p>
          </m.div>
        )}
      </m.div>
    </Link>
  );
};

export default Project;
