"use client";

import ListCard, {
  CaptivatingExperiences,
  ComplexProblems,
} from "@/components/ListCard/ListCard";
import ListItem from "@/components/ListItem/ListItem";
import processes from "@/constants/processes";
import { useCursor } from "@/contexts/CursorContext/CursorContext";
import StaggeredLetters from "@/lib/framer/components/StaggeredLetters/StaggeredLetters";

import { motion as m, useInView, Variants } from "framer-motion";
import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const Introduction = () => {
  const { setCursor } = useCursor();

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

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
      <div
        className="flex items-center min-h-screen w-screen overflow-x-hidden"
        ref={ref}
      >
        <div>
          <div
            className="ml-20"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateX(-5%)",
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
          >
            <StaggeredLetters className=" text-9xl text-gray-300" delay={0.5}>
              I&apos;m Lewis, a
            </StaggeredLetters>
          </div>

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

          <div
            className="flex justify-end w-screen -ml-20"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateX(10%)",
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
          >
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
