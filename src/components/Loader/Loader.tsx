"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { motion as m, Variants } from "framer-motion";

interface LoaderProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Loader: FC<LoaderProps> = ({ setLoading }) => {
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
      opacity: 0,
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
    hidden: {
      y: 500,
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.6, 0.1, -0.5, 0.9],
        duration: 3,
      },
    },
  };

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
    }, 30);

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <m.div
      className="fixed h-screen w-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="absolute right-10 top-10 overflow-hidden  ">
        <m.p variants={percentageVariants} className="text-3xl">
          {percentage}%
        </m.p>
      </div>
      <div className="font-bold flex flex-col h-full justify-end">
        <m.p
          variants={logoVariants}
          layoutId="logo"
          className="text-11xl leading-[20rem]"
        >
          LEWIS J
        </m.p>
      </div>
    </m.div>
  );
};

export default Loader;
