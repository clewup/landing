"use client";

import ListItem from "@/components/ListItem/ListItem";
import processes from "@/constants/processes";
import StaggeredLetters from "@/lib/framer/components/StaggeredLetters/StaggeredLetters";

import { motion as m, Variants } from "framer-motion";
import React from "react";

const Introduction = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <m.section variants={containerVariants} initial="hidden" animate="visible">
      <div className="flex items-center min-h-screen w-screen overflow-x-hidden">
        <div className="px-5">
          <StaggeredLetters className="text-5xl md:text-9xl" delay={0.5}>
            I&apos;m Lewis, a
          </StaggeredLetters>

          <StaggeredLetters
            className="text-7xl font-bold md:text-10xl md:leading-[9rem]"
            delay={0.5}
          >
            creative developer
          </StaggeredLetters>

          <StaggeredLetters className="text-5xl md:text-9xl" delay={0.5}>
            based in England.
          </StaggeredLetters>
        </div>
      </div>

      <div className="relative flex w-full gap-20 px-5 items-start flex-col md:flex-row md:px-20">
        <div className="w-full py-[50%]">
          <ul>
            {processes.map((process, index) => (
              <ListItem key={index} id={process.id}>
                {process.text}
              </ListItem>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 h-screen flex-col gap-20 items-center justify-center hidden md:flex">
          <div className="w-2/3">
            <h1 className="text-6xl font-bold">WHAT I DO</h1>
          </div>

          <div className="relative w-2/3 aspect-square rounded-2xl bg-base-light">
            {processes.map((process, index) => (
              <process.card key={index} id={process.id} />
            ))}
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default Introduction;
