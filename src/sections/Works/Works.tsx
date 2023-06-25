"use client";

import Project from "@/components/Project/Project";
import projects from "@/constants/projects";
import useParallax from "@/lib/framer/hooks/useParallax/useParallax";
import useSectionStore from "@/lib/zustand/hooks/useSectionStore/useSectionStore";
import React, { useEffect, useRef } from "react";
import { motion as m, useInView, useScroll } from "framer-motion";

const Works = () => {
  const { setInViewSection } = useSectionStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (isInView) setInViewSection("works");
  }, [isInView]);

  return (
    <section
      id="works"
      className="min-h-screen flex flex-col justify-center px-5 gap-20 md:px-20"
      ref={sectionRef}
    >
      <h1 className="text-9xl font-bold font-drukCond">WORKS</h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-5">
        <Project project={projects[0]} />
        <Project project={projects[1]} />
        <Project project={projects[2]} />
      </div>
    </section>
  );
};

export default Works;
