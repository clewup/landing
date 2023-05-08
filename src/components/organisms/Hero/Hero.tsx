"use client";

import RubberText from "@/lib/framer-motion/components/RubberText";
import RevealText from "@/lib/framer-motion/components/RevealText";
import { motion as m } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <m.div className="flex flex-col gap-5 justify-end h-screen-header p-5">
      <span>
        <h1 className="text-5xl font-semibold">LEWIS J</h1>
        <h2 className="text-9xl font-semibold">DESIGNER &</h2>
        <RevealText className="text-9xl font-semibold">DEVELOPER</RevealText>
      </span>

      {/*<span*/}
      {/*  className="flex gap-3 items-center cursor-pointer text-branding-purple"*/}
      {/*  onClick={() => router.push("#projects")}*/}
      {/*>*/}
      {/*  <ArrowDownCircleIcon className="h-7" />*/}
      {/*  <p className="text-3xl">Projects</p>*/}
      {/*</span>*/}
    </m.div>
  );
};

export default Hero;
