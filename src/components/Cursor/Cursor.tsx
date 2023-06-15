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
      height: 32,
      width: 32,
      backgroundColor: "#FFFFFF",
    },

    expand: {
      x: mousePos.x - 75,
      y: mousePos.y - 75,
      width: 150,
      height: 150,
      backgroundColor: "#FCA311",
    },

    text: {
      x: mousePos.x - 75,
      y: mousePos.y - 75,
      width: 150,
      height: 150,
      backgroundColor: "#FCA311",
      mixBlendMode: "difference",
    },
  };

  const selectedVariant = cursorVariants[variant];

  return (
    <m.div
      // @ts-ignore
      variants={cursorVariants}
      transition={{ type: "just" }}
      animate={variant}
      className="landing-cursor fixed top-0 left-0 h-[32px] z-50 w-[32px] pointer-events-none rounded-[50%] flex justify-center items-center text-2xl text-base-100"
    >
      <div
        className={`fixed z-50 h-[${selectedVariant.height}px] w-[${selectedVariant.width}px] rounded-[50%] flex justify-center items-center`}
      >
        {content}
      </div>

      {image && (
        <m.div
          className="fixed w-[500px] z-40"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: [0, 1.1, 1] },
          }}
          transition={{ duration: 0.5 }}
          initial="hidden"
          animate="visible"
        >
          <img src={image} />
        </m.div>
      )}
    </m.div>
  );
};

export default Cursor;
