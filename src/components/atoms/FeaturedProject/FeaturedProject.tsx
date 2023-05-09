"use client";

import useParallax from "@/lib/framer-motion/hooks/useParallax";
import { Project } from "@/types/project";
import { motion as m, useScroll } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject: FC<FeaturedProjectProps> = ({
  project: { name, description, category, image, website },
}) => {
  const { scrollYProgress } = useScroll();
  const imageY = useParallax(scrollYProgress, 75);

  return (
    <div className="h-[50vh] w-screen p-5 flex justify-center items-center relative ">
      <div className="w-full h-full bg-branding-purple">
        <h1 className="text-black text-7xl p-10 font-bold uppercase">
          FEATURED
        </h1>
        <h2 className="text-black text-5xl font-bold uppercase px-10">
          {name}
        </h2>
        <Link href={website} target={"_blank"}>
          <p className="text-black underline font-bold uppercase text-5xl px-10">
            Take a Peek!
          </p>
        </Link>
      </div>
      <m.img
        style={{ y: imageY }}
        src={image}
        alt={name}
        className="absolute w-2/5 right-20"
      />
    </div>
  );
};

export default FeaturedProject;
