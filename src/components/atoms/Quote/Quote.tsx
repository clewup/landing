"use client";

import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Quote = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacityOne = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const opacityTwo = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const opacityThree = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <m.div
      ref={targetRef}
      className="h-[50vh] p-5 flex gap-5 justify-center items-center"
    >
      <m.h1 style={{ opacity: opacityOne }} className="text-7xl font-bold">
        THINK,
      </m.h1>
      <m.h1
        style={{ opacity: opacityTwo }}
        className="text-7xl font-bold text-branding-purple"
      >
        CREATE,
      </m.h1>
      <m.h1 style={{ opacity: opacityThree }} className="text-7xl font-bold">
        DELIVER.
      </m.h1>
    </m.div>
  );
};

export default Quote;
