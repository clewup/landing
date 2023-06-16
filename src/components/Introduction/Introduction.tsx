"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { motion as m, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Introduction = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const { setCursor } = useCursor();

  const opacityOne = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const opacityTwo = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const opacityThree = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <div className="flex flex-col justify-center gap-32 min-h-screen">
      <m.div
        ref={targetRef}
        className="p-5 flex gap-5 justify-center items-center"
      >
        <m.h1 style={{ opacity: opacityOne }} className="text-7xl font-bold">
          THINK,
        </m.h1>
        <m.h1
          style={{ opacity: opacityTwo }}
          className="text-7xl font-bold text-primary"
        >
          CREATE,
        </m.h1>
        <m.h1 style={{ opacity: opacityThree }} className="text-7xl font-bold">
          DELIVER.
        </m.h1>
      </m.div>

      <div className="flex flex-col justify-center px-40">
        <p
          className="text-7xl"
          onMouseEnter={() => setCursor("text")}
          onMouseLeave={() => setCursor("default")}
        >
          By operating at the crossroads of creativity and user experience, my
          goal is to deliver captivating experiences while ensuring functional
          solutions that drive business growth.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
