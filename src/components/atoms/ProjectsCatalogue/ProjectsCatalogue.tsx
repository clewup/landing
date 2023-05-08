"use client";

import projects from "@/data/projects";
import { Project } from "@/types/project";
import { motion as m, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const ProjectsCatalogue = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="h-screen flex">
      <div className="w-1/3 p-20 bg-branding-purple">
        <div
          className="flex flex-col gap-5"
          onMouseLeave={() => setSelectedProject(null)}
        >
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
              onMouseEnter={() => setSelectedProject(project)}
            >
              <h1>0{index + 1}</h1>
              <h1>{project.name}</h1>
            </m.span>
          ))}
        </div>
      </div>
      <div className="w-2/3">
        {selectedProject && (
          <m.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="object-cover h-full"
            />
          </m.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCatalogue;
