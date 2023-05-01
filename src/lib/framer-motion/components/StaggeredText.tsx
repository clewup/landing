"use client";

import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import cx from "classnames";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const StaggeredText: FC<StaggeredTextProps> = ({
  text,
  className,
  delay = 0,
}) => {
  const [isAnimating, setAnimating] = useState(false);

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        setAnimating(true);
      }, delay * 1000);
    } else {
      setAnimating(true);
    }
  }, []);

  const wordsArray = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: {
      scale: 0.9,
      y: 20,
      opacity: 0,
      rotate: 3,
    },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      rotate: 0,
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={cx("flex flex-wrap", className)}
        >
          {wordsArray.map((word, index) => (
            <m.p key={index} variants={wordVariants}>
              {word}
              &nbsp;
            </m.p>
          ))}
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default StaggeredText;
