import { useCursor } from "@/contexts/CursorContext/CursorContext";
import React, { useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

const Process = () => {
  const { setCursor } = useCursor();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <div className="flex items-center h-screen px-40" ref={containerRef}>
      <m.p
        style={{ opacity }}
        className="text-7xl"
        onMouseEnter={() => setCursor("text")}
        onMouseLeave={() => setCursor("default")}
      >
        Tearing down complex problems and building long-lasting, modern
        solutions that help companies grow.
      </m.p>
    </div>
  );
};

export default Process;
