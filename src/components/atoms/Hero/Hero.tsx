"use client";

import RubberText from "@/lib/framer-motion/components/RubberText";
import RevealText from "@/lib/framer-motion/components/RevealText";
import { motion as m } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <m.div className="flex items-center h-screen-header gap-20">
      <m.div
        className="w-1/2 flex flex-col gap-5 justify-center px-20"
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <RubberText className="text-2xl font-semibold">LEWIS J</RubberText>
        <h2 className="text-8xl">Designer &</h2>
        <RevealText className="text-8xl">Developer</RevealText>

        <span
          className="flex gap-3 items-center cursor-pointer text-branding-purple"
          onClick={() => router.push("#projects")}
        >
          <ArrowDownCircleIcon className="h-7" />
          <p className="text-3xl">Projects</p>
        </span>
      </m.div>
    </m.div>
  );
};

export default Hero;
