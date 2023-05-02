"use client";

import Skill from "@/components/atoms/Skill/Skill";
import skills from "@/data/skills";
import { useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-0, -500]);

  return (
    <m.div ref={ref} className="grid grid-cols-3" style={{ y }}>
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </m.div>
  );
};

export default Skills;
