"use client";

import RubberText from "@/lib/framer-motion/components/RubberText";
import RevealText from "@/lib/framer-motion/components/RevealText";
import { AnimatePresence, motion as m } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const textVariants = {
    hidden: { y: 500 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <AnimatePresence>
      <m.div
        className="flex flex-col justify-end h-screen-header overflow-hidden p-5"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <m.span variants={textVariants}>
          <h1 className="text-5xl font-semibold">LEWIS J</h1>
        </m.span>
        <m.span variants={textVariants}>
          <h2 className="text-9xl font-semibold">DESIGNER &</h2>
        </m.span>
        <m.span variants={textVariants}>
          <RevealText className="text-9xl font-semibold">DEVELOPER</RevealText>
        </m.span>
      </m.div>
    </AnimatePresence>
  );
};

export default Hero;
