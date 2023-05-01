"use client";

import { Project } from "@/types/project";
import { wrap } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import cx from "classnames";

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: FC<ProjectShowcaseProps> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(0);

  const wrapperRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!wrapperRef) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current?.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeProject]);

  return (
    <div>
      <h2 className="text-xl">PROJECTS</h2>
      <div className="w-screen max-w-full">
        <ul
          ref={wrapperRef}
          className="flex gap-3 md:gap-2 md:h-96 group flex-col md:flex-row"
        >
          {projects.map((project, index) => {
            return (
              <li
                aria-current={activeProject === index}
                key={index}
                className={cx(
                  "relative md:w-[8%] md:[&[aria-current='true']]:w-[30%] md:first:w-[1%] md:last:w-[1%]",
                  "md:[transition:width_var(--transition,200ms_ease-in)]",
                  "before:hidden md:before:block before:absolute before:bg-red-300 before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] before:bg-transparent",
                  "md:hover:w-[12%] md:[&:not(:hover), &:not(:first), &:not(:last)]:group-hover:w-[7%]",
                  "md:first:pointer-events-none md:last:pointer-events-none md:[&_img]:first:opacity-0 md:[&_img]:last:opacity-0"
                )}
                onClick={() => setActiveProject(index)}
              >
                <div className="relative overflow-hidden w-full h-full rounded bg-black">
                  <img
                    className="absolute right-0 w-24 h-auto md:w-[590px] md:h-[640px] md:left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 grayscale w-full h-full object-cover max-w-none"
                    src={project.image}
                    alt={project.repo}
                    width="590px"
                    height="640px"
                  />
                  <div
                    className={cx(
                      "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before-top-[-148px] before:z-10",
                      activeProject === index ? "md:opacity-25" : "md:opacity-0"
                    )}
                  />
                  <div
                    className={cx(
                      "md:absolute left-8 top-8 w-[590px] transition-[transform,opacity]",
                      activeProject === index
                        ? "md:translate-x-0 md:opacity-100"
                        : "md:translate-x-3 md:opacity-0"
                    )}
                  >
                    <p className="p-4 md:p-0 text-4xl uppercase font-bold">
                      {project.repo}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectShowcase;
