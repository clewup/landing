"use client";

import projects from "@/data/projects";
import { motion as m } from "framer-motion";

const Projects = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/3 flex flex-col gap-5 p-20 bg-branding-purple">
        {projects.map((project, index) => (
          <m.span
            key={index}
            variants={{
              initial: { x: 0 },
              animate: { x: 20 },
            }}
            initial="initial"
            whileHover="animate"
            className="flex gap-5 text-7xl text-black font-bold uppercase"
          >
            <h1>0{index + 1}</h1>
            <h1>{project.name}</h1>
          </m.span>
        ))}
      </div>
      <div className="w-2/3 h-full">
        {/*TODO: Implement project image/video*/}
      </div>
    </div>
  );
};

export default Projects;
