"use client";

import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacityOne = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const opacityTwo = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const opacityThree = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <m.div
        ref={targetRef}
        className="p-5 py-20 flex gap-5 justify-center items-center"
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
      <div className="flex justify-center items-center gap-10 py-20">
        <div className="w-1/3">
          <p className=" text-2xl">
            Working at the intersection of creativity and user experience, I aim
            to provide memorable experiences with functionality that supports
            business growth.
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-end gap-20">
          <span>
            <h2 className="text-4xl font-bold text-primary">SERVICES</h2>
            <span className="text-2xl">
              <p>UI/UX Development</p>
              <p>API Development</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
