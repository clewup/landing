"use client";

import Introduction from "@/components/Banner/components/Introduction/Introduction";
import Loader from "@/components/Loader/Loader";
import Process from "@/components/Banner/components/Process/Process";
import Values from "@/components/Banner/components/Values/Values";

import { motion as m, Variants } from "framer-motion";

const Banner = () => {
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
    <m.section
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen overflow-y-scroll no-scrollbar"
    >
      <Introduction />
      <Process />
      <Values />
    </m.section>
  );
};

export default Banner;
