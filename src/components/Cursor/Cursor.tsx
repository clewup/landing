"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { motion as m } from "framer-motion";
import React from "react";

const Cursor = () => {
  const { variant, text, mousePos } = useCursor();

  const cursorVariants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
    },
    expand: {
      x: mousePos.x - 75,
      y: mousePos.y - 75,
      height: 150,
      width: 150,
      mixBlendMode: "difference",
    },
  };

  return (
    <m.div
      // @ts-ignore
      variants={cursorVariants}
      transition={{ type: "just" }}
      animate={variant}
      className="landing-cursor bg-white h-[32px] w-[32px] rounded-[50%] fixed top-0 left-0 pointer-events-none z-50 flex justify-center items-center text-2xl text-base-100"
    >
      {text}
    </m.div>
  );
};

export default Cursor;
