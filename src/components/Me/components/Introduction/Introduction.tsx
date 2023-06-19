"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import StaggeredLetters from "@/lib/framer/components/StaggeredLetters/StaggeredLetters";
import React from "react";
import Marquee from "react-fast-marquee";

const Introduction = () => {
  const { setCursor } = useCursor();

  function handleMouseEnter() {
    setCursor("blur");
  }

  function handleMouseLeave() {
    setCursor("default");
  }

  return (
    <div className="flex items-center min-h-screen w-full">
      <div>
        <StaggeredLetters className="ml-20 text-9xl" delay={0.5}>
          I&apos;m Lewis, a
        </StaggeredLetters>

        <Marquee speed={200} delay={0.5}>
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <StaggeredLetters
              className="text-10xl font-bold leading-[15rem]"
              delay={0.5}
            >
              creative developer
            </StaggeredLetters>
          </span>
        </Marquee>

        <div className="flex justify-end w-screen -ml-20">
          <StaggeredLetters className="text-9xl" delay={0.5}>
            based in England.
          </StaggeredLetters>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
