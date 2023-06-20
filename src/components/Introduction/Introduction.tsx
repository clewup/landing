"use client";

import ListCard, {
  CaptivatingExperiences,
  ComplexProblems,
} from "@/components/ListCard/ListCard";
import ListItem from "@/components/ListItem/ListItem";
import processes from "@/constants/processes";
import { useCursor } from "@/contexts/CursorContext/CursorContext";
import StaggeredLetters from "@/lib/framer/components/StaggeredLetters/StaggeredLetters";

import { motion as m, Variants } from "framer-motion";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Introduction = () => {
  const { setCursor } = useCursor();

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
      <div className="flex items-center min-h-screen w-full">
        <div>
          <StaggeredLetters
            className="ml-20 text-9xl text-gray-300"
            delay={0.5}
          >
            I&apos;m Lewis, a
          </StaggeredLetters>

          <Marquee speed={200} delay={0.5}>
            <span
              onMouseEnter={() => setCursor("blur")}
              onMouseLeave={() => setCursor("default")}
            >
              <StaggeredLetters
                className="text-10xl font-bold leading-[15rem]"
                delay={0.5}
              >
                creative developer
              </StaggeredLetters>
            </span>
          </Marquee>

          <div className="flex justify-end w-screen -ml-20">
            <StaggeredLetters className="text-9xl text-gray-300" delay={0.5}>
              based in England.
            </StaggeredLetters>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-20 px-5 items-start">
        <div className="w-full py-[50%]">
          <ul>
            {processes.map((process, index) => (
              <ListItem key={index} id={process.id}>
                {process.text}
              </ListItem>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 h-screen flex items-center justify-center">
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
