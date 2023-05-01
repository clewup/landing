"use client";

import projects from "@/data/projects";
import { useRouter } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { motion as m } from "framer-motion";

const ProjectShowcase: FC = () => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [activeProject, setActiveProject] = useState(5);

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
    <m.div
      initial={{ x: 75, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
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
                  "relative md:w-[8%] md:[&[aria-current='true']]:w-[25%] md:first:w-[1%] md:last:w-[1%]",
                  "md:[transition:width_var(--transition,200ms_ease-in)]",
                  "before:hidden md:before:block before:absolute before:bg-red-300 before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] before:bg-transparent",
                  "md:hover:w-[12%] md:[&:not(:hover), &:not(:first), &:not(:last)]:group-hover:w-[7%]"
                )}
                onClick={() => {
                  if (activeProject === index) {
                    router.push(project.url);
                  }
                  setActiveProject(index);
                }}
              >
                <div className="relative overflow-hidden w-full h-full rounded-2xl bg-black">
                  <img
                    className="absolute right-0 h-auto md:w-[590px] md:h-[640px] md:left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 grayscale object-cover max-w-none"
                    src={project.image}
                    alt={project.name}
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
                      "md:absolute left-8 top-8 w-[590px] transition-opacity duration-700",
                      activeProject === index
                        ? "md:translate-x-0 md:opacity-100"
                        : "md:translate-x-3 md:opacity-0"
                    )}
                  >
                    <p className="relative p-4 md:p-0 text-4xl uppercase font-bold text-white z-10">
                      {project.name}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </m.div>
  );
};

export default ProjectShowcase;
