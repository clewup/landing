import { useCursor } from "@/contexts/CursorContext/CursorContext";
import React from "react";

const Process = () => {
  const { setCursor } = useCursor();

  return (
    <div className="flex items-center h-screen px-40">
      <p
        className="text-7xl"
        onMouseEnter={() => setCursor("text")}
        onMouseLeave={() => setCursor("default")}
      >
        Tearing down complex problems and building long-lasting solutions that
        drive business growth.
      </p>
    </div>
  );
};

export default Process;
