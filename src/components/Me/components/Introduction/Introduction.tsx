"use client";

import StaggeredLetters from "@/lib/framer/components/StaggeredLetters/StaggeredLetters";
import React from "react";
import Marquee from "react-fast-marquee";

const Introduction = () => {
  return (
    <div className="flex items-center min-h-screen w-full">
      <div>
        <StaggeredLetters className="ml-20 text-9xl" delay={0.5}>
          I am a
        </StaggeredLetters>

        <Marquee speed={200} delay={0.5}>
          <StaggeredLetters
            className="text-10xl font-bold leading-[15rem]"
            delay={0.5}
          >
            creative developer
          </StaggeredLetters>
        </Marquee>

        <div className="flex justify-end w-screen -ml-20">
          <StaggeredLetters className="text-9xl" delay={0.5}>
            based in England
          </StaggeredLetters>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
