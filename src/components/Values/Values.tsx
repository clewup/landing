"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import React from "react";

const Values = () => {
  const { setCursor } = useCursor();

  return (
    <div className="flex items-center h-screen px-40">
      <p
        className="text-7xl"
        onMouseEnter={() => setCursor("text")}
        onMouseLeave={() => setCursor("default")}
      >
        Operating at the crossroads of creativity and user experience, my
        ultimate goal is to deliver captivating experiences.
      </p>
    </div>
  );
};

export default Values;
