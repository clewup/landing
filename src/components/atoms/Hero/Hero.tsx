"use client";

import StaggeredText from "@/lib/framer-motion/components/StaggeredText";
import { useScroll, useTransform, motion as m } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <m.div
      ref={ref}
      style={{ opacity, scale }}
      className="text-4xl md:text-9xl semi h-screen-header flex flex-col justify-center px-10"
    >
      <div className="h-60">
        <StaggeredText className="font-bold stroke-text">
          I&apos;M CLEWUP,
        </StaggeredText>
        <StaggeredText delay={0.8}>SOFTWARE DEVELOPER.</StaggeredText>
      </div>
    </m.div>
  );
};

export default Hero;
