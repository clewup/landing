"use client";

import Project from "@/components/Project/Project";
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
    <section
      id="works"
      className="min-h-screen flex flex-col justify-center px-5 gap-20 md:px-20"
    >
      <h1 className="text-6xl font-bold">WORKS</h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20">
        <Project project={projects[0]} />
        <Project project={projects[1]} />
        <Project project={projects[2]} />
      </div>
    </section>
  );
};

export default Projects;
