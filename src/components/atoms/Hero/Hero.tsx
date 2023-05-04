"use client";

import { motion as m } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <m.div className="flex items-center px-20 h-screen-header">
      <div className="w-1/2 flex flex-col gap-5">
        <h1 className=" text-2xl font-semibold">LEWIS J</h1>
        <h2 className="text-8xl">Designer & Developer.</h2>

        <span
          className="flex gap-5 items-center pt-10 cursor-pointer text-branding-purple"
          onClick={() => router.push("#projects")}
        >
          <ArrowDownCircleIcon className="h-12" />
          <p className="text-4xl">Projects</p>
        </span>
      </div>
    </m.div>
  );
};

export default Hero;
