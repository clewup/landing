"use client";

import { motion as m } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <m.div className="flex items-center px-20 h-screen-header">
      <m.div
        className="w-1/2 flex flex-col gap-5"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h1 className=" text-2xl font-semibold">LEWIS J</h1>
        <h2 className="text-8xl">Designer & Developer.</h2>

        <span
          className="flex gap-5 items-center pt-10 cursor-pointer text-branding-purple"
          onClick={() => router.push("#projects")}
        >
          <ArrowDownCircleIcon className="h-12" />
          <p className="text-4xl">Projects</p>
        </span>
      </m.div>
      <m.div
        className="w-1/2 h-2/3 relative"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Image src="/hero.png" alt="hero" fill={true} />
      </m.div>
    </m.div>
  );
};

export default Hero;
