"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion as m, Variants } from "framer-motion";

interface LoaderProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Loader: FC<LoaderProps> = ({ setLoading }) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: 1000,
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.6, 0.1, -0.5, 0.95],
        duration: 3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <m.div
      className="fixed flex flex-col h-screen w-screen justify-center bg-base z-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <span className="flex gap-5">
        <m.p variants={wordVariants} className="text-[350px] font-bold ">
          HEY!
        </m.p>
        <m.p variants={wordVariants} className="text-[350px] font-bold ">
          I&apos;M
        </m.p>
      </span>
      <m.p variants={wordVariants} className="text-[350px] font-bold -mt-52 ">
        LEWIS J
      </m.p>
    </m.div>
  );
};

export default Loader;
