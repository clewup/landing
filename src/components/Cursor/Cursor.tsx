"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { motion as m } from "framer-motion";
import React from "react";

const Cursor = () => {
  const { variant, content, image, mousePos } = useCursor();

  const cursorVariants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
      borderRadius: "50%",
      backgroundImage: "",
    },

    expand: {
      x: mousePos.x - 75,
      y: mousePos.y - 75,
      width: 150,
      height: 150,
      mixBlendMode: "difference",
      borderRadius: "50%",
      backgroundImage: "",
    },

    image: {
      x: mousePos.x - 320,
      y: mousePos.y - 180,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      width: 640,
      height: 360,
    },
  };

  return (
    <m.div
      // @ts-ignore
      variants={cursorVariants}
      transition={{ type: "just" }}
      animate={variant}
      className="landing-cursor bg-white h-[32px] w-[32px] fixed top-0 left-0 pointer-events-none z-50 flex justify-center items-center text-2xl text-base-100"
    >
      {content}
    </m.div>
  );
};

export default Cursor;
