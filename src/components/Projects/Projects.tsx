"use client";

import Project from "@/components/Projects/components/Project/Project";
import projects from "@/constants/projects";
import useParallax from "@/lib/framer/hooks/useParallax/useParallax";
import React, { useRef } from "react";
import { motion as m, useScroll } from "framer-motion";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const y = useParallax(scrollYProgress, 500);

  return (
    <section id="projects" className="min-h-screen relative">
      <h1 className="absolute top-20 left-20 text-10xl font-bold underline">
        Works
      </h1>
      <Project
        project={projects[0]}
        className="absolute bottom-40 left-40 h-72 w-72"
      />
      <Project
        project={projects[1]}
        className="absolute top-40 right-40 h-72 w-72"
      />
      <m.div style={{ y }} className="absolute bottom-0 left-[40%] h-96 w-96">
        <Project project={projects[2]} className="h-96 w-96" />
      </m.div>
    </section>
  );
};

export default Projects;
