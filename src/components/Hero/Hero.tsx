"use client";

import RevealText from "@/lib/framer-motion/components/RevealText";
import { AnimatePresence, motion as m } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const headlineVariants = {
    hidden: { y: 1500 },
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
        className="flex flex-col justify-center h-screen overflow-hidden pb-5 m-auto"
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
        <m.span
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl font-semibold">LEWIS J</h1>
        </m.span>
        <m.span variants={headlineVariants} className="flex">
          <h2 className="text-9xl font-semibold stroke-text">DESIGNER </h2>
          <h2 className="text-9xl font-semibold text-primary">&nbsp;&</h2>
        </m.span>
        <m.span variants={headlineVariants}>
          <RevealText className="text-9xl font-semibold">DEVELOPER</RevealText>
        </m.span>
        <m.span
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 1 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-right">BASED IN ENGLAND 🇬🇧</h1>
        </m.span>
      </m.div>
    </AnimatePresence>
  );
};

export default Hero;
