"use client";

import Introduction from "@/components/Me/components/Introduction/Introduction";
import Process from "@/components/Me/components/Process/Process";
import Values from "@/components/Me/components/Values/Values";

import { motion as m, Variants } from "framer-motion";

const Me = () => {
  const bannerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <m.section variants={bannerVariants} initial="hidden" animate="visible">
      <Introduction />
      <Process />
      <Values />
    </m.section>
  );
};

export default Me;
