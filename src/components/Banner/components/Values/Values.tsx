"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { useScroll, useTransform, motion as m } from "framer-motion";
import React, { useRef } from "react";

const Values = () => {
  const { setCursor } = useCursor();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <div className="flex h-screen items-center px-40" ref={containerRef}>
      <m.p
        style={{ opacity }}
        className="text-7xl"
        onMouseEnter={() => setCursor("text")}
        onMouseLeave={() => setCursor("default")}
      >
        Operating at the crossroads of creativity and user experience, my
        ultimate goal is to deliver captivating experiences.
      </m.p>
    </div>
  );
};

export default Values;
