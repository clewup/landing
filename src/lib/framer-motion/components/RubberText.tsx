import { FC, useState } from "react";
import cx from "classnames";
import { motion as m, useAnimationControls } from "framer-motion";

interface RubberTextProps {
  children: string;
  className?: string;
}

const RubberText: FC<RubberTextProps> = ({ children: text, className }) => {
  const words = text.split(" ");

  return (
    <span className={cx("flex gap-2", className)}>
      {words.map((word, index) => {
        const letters = word.split("");
        return (
          <span key={index} className="flex">
            {letters.map((letter, index) => {
              return <Letter key={index}>{letter}</Letter>;
            })}
          </span>
        );
      })}
    </span>
  );
};

interface LetterProps {
  children: string;
}

const Letter: FC<LetterProps> = ({ children: letter }) => {
  const controls = useAnimationControls();
  const [isAnimating, setAnimating] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        duration: 1,
      },
    });
  };

  return (
    <m.p
      animate={controls}
      onAnimationStart={() => setAnimating(true)}
      onAnimationComplete={() => setAnimating(false)}
      onMouseOver={() => {
        if (!isAnimating) {
          rubberBand();
        }
      }}
    >
      {letter}
    </m.p>
  );
};

export default RubberText;
