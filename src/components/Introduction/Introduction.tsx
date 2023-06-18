"use client";

import StaggeredLetters from "@/lib/framer/components/StaggeredLetters/StaggeredLetters";
import React from "react";
import Marquee from "react-fast-marquee";

const Introduction = () => {
  return (
    <div className="flex items-center h-screen w-full">
      <div>
        <StaggeredLetters className="ml-20 text-9xl font-bold">
          I AM A
        </StaggeredLetters>

        <Marquee speed={200}>
          <StaggeredLetters className="text-9xl font-bold">
            CREATIVE DEVELOPER
          </StaggeredLetters>
        </Marquee>

        <div className="flex justify-end">
          <StaggeredLetters className="text-9xl font-bold mr-20">
            BASED IN ENGLAND
          </StaggeredLetters>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
