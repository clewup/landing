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
          Working at the intersection of creativity and user experience, I aim
          to provide memorable experiences with functionality that supports
          business growth.
        </p>
      </div>

      <div className="flex flex-col gap-20 pb-20">
        <div className="w-full px-40 flex justify-between">
          <h2 className="text-2xl font-bold">SERVICES</h2>
          <span className="text-2xl w-1/5">
            <p>UI/UX DEVELOPMENT</p>
            <p>API DEVELOPMENT</p>
            <p>CLOUD COMPUTING</p>
          </span>
        </div>

        <div className="px-40 flex justify-between">
          <h2 className="text-2xl font-bold">FRAMEWORKS/LIBRARIES</h2>
          <span className="text-2xl w-1/5">
            <p>REACT.JS</p>
            <p>NEXT.JS</p>
            <p>.NET</p>
            <p>NEST.JS</p>
            <p>NODE.JS</p>
          </span>
        </div>

        <div className="px-40 flex justify-between">
          <h2 className="text-2xl font-bold">LANGUAGES</h2>
          <span className="text-2xl w-1/5">
            <p>TYPESCRIPT</p>
            <p>C#</p>
            <p>SASS</p>
          </span>
        </div>

        <div className="px-40 flex justify-between">
          <h2 className="text-2xl font-bold">DATABASES</h2>
          <span className="text-2xl w-1/5">
            <p>MSSQL</p>
            <p>POSTGRES</p>
            <p>MONGODB</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
