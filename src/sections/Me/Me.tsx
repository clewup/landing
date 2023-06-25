"use client";

import ListItem from "@/components/ListItem/ListItem";
import processes from "@/constants/processes";
import StaggeredLetters from "@/lib/framer/components/StaggeredLetters/StaggeredLetters";
import useSectionStore from "@/lib/zustand/hooks/useSectionStore/useSectionStore";

import { motion as m, useInView, Variants } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Me = () => {
  const { setInViewSection } = useSectionStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (isInView) setInViewSection("me");
  }, [isInView]);

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
    <m.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={sectionRef}
    >
      <div className="flex items-center min-h-screen w-screen overflow-x-hidden">
        <div className="px-5">
          <StaggeredLetters
            className="text-7xl md:text-11xl md:leading-[16rem] font-drukCond"
            delay={0.5}
          >
            I&apos;M LEWIS, A
          </StaggeredLetters>

          <StaggeredLetters
            className="text-7xl font-bold md:text-11xl md:leading-[16rem] font-drukCond text-primary"
            delay={0.5}
          >
            CREATIVE DEVELOPER
          </StaggeredLetters>

          <StaggeredLetters
            className="text-7xl md:text-11xl md:leading-[16rem] font-drukCond"
            delay={0.5}
          >
            BASED IN ENGLAND.
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
            <h1 className="text-9xl font-bold font-drukCond">HOW I CAN HELP</h1>
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

export default Me;
