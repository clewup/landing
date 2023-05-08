"use client";

import { motion as m, useAnimation } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { clearInterval } from "timers";

interface RevealTextProps {
  children: string;
  className?: string;
}

const RevealText: FC<RevealTextProps> = ({ children: text, className }) => {
  return (
    <div className="relative overflow-hidden w-fit">
      <p className={className}>{text}</p>
      <m.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        className="absolute top-0 bottom-0 left-0 right-0 bg-branding-purple z-20"
      />
    </div>
  );
};

export default RevealText;
