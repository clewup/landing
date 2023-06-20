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
    <section id="projects" className="min-h-screen px-5 flex items-center">
      <div className="grid grid-cols-3 gap-20 px-20">
        <Project project={projects[0]} />
        <Project project={projects[1]} />
        <Project project={projects[2]} />
      </div>
    </section>
  );
};

export default Projects;
