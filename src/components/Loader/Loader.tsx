"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { motion as m, Variants } from "framer-motion";

interface LoaderProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Loader: FC<LoaderProps> = ({ setLoading }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage((prevPercentage) =>
          prevPercentage < 100 ? prevPercentage + 1 : prevPercentage
        );
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const percentageVariants: Variants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const logoVariants: Variants = {
    hidden: { x: 0 },
    visible: {
      x: 0,
      transition: {
        duration: 3,
      },
    },
  };

  const backgroundVariants: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-100%",
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <m.div
      className="fixed h-screen w-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <m.div
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        className="absolute bg-white h-screen w-screen"
      />
      <div className="absolute right-10 top-10 overflow-hidden  ">
        <m.p
          variants={percentageVariants}
          className="text-3xl mix-blend-difference"
        >
          {percentage}%
        </m.p>
      </div>
      <div className="font-bold flex flex-col h-full justify-end">
        <m.p
          variants={logoVariants}
          layoutId="logo"
          className="text-8xl mix-blend-difference md:text-11xl md:leading-[20rem]"
        >
          LEWIS J
        </m.p>
      </div>
    </m.div>
  );
};

export default Loader;
