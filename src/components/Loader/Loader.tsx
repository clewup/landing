"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { motion as m, Variants } from "framer-motion";

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

  const logoVariants: Variants = {
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
  };

  return (
    <m.div
      className="fixed flex flex-col h-screen w-screen justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <span className="flex gap-5">
        <m.p variants={wordVariants} className="text-[450px] font-bold ">
          HEY!
        </m.p>
        <m.p variants={wordVariants} className="text-[450px] font-bold ">
          I&apos;M
        </m.p>
      </span>
      <m.img
        variants={logoVariants}
        className="-mt-36 w-full px-7"
        src="https://res.cloudinary.com/dliog6kq6/image/upload/v1687095992/LEWIS_J_idjcjb.png"
        alt=""
        layoutId="logo"
      />
    </m.div>
  );
};

export default Loader;
