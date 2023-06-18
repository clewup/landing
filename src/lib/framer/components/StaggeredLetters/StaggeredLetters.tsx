"use client";

import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion as m, Variants } from "framer-motion";
import cx from "classnames";

interface StaggeredLettersProps {
  children: string;
  className?: string;
  delay?: number;
}

const StaggeredLetters: FC<StaggeredLettersProps> = ({
  children,
  className,
  delay = 0,
}) => {
  const [isAnimating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(true), delay * 1000);
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      y: 200,
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.6, 0.1, -0.5, 0.95],
        duration: 1,
      },
    },
  };

  if (!isAnimating) return null;

  return (
    <m.div
      className={cx("flex flex-wrap overflow-hidden", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children.split(" ").map((word, index) => {
        return (
          <div key={index} className="flex">
            {word.split("").map((letter, index) => (
              <m.p key={index} variants={letterVariants}>
                {letter}
              </m.p>
            ))}
            &nbsp;
          </div>
        );
      })}
    </m.div>
  );
};

export default StaggeredLetters;
