"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface CarouselItem {
  label: string;
  description: string;
  image: string;
  url: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
}

const InfiniteCarousel: FC<InfiniteCarouselProps> = ({ items }) => {
  const [rotateY, setRotateY] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);

  const selectItem = (index: number) => {
    if (
      Math.abs(index - selectedItem) === 1 ||
      index - selectedItem === items.length - 1 ||
      selectedItem - index === items.length - 1
    ) {
      if (index === selectedItem + 1) {
        setRotateY(rotateY + 40);
      } else if (index === selectedItem - 1) {
        setRotateY(rotateY - 40);
      } else if (index - selectedItem === items.length - 1) {
        setRotateY(rotateY - 40);
      } else {
        setRotateY(rotateY + 40);
      }
      setSelectedItem(index);
    }
  };

  const itemVariants = {};

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
      }}
      className="w-[55vw] h-[35vw] absolute"
      animate={{
        transform: `translateZ(-${
          window.innerWidth * 0.8
        }px) rotateZ(-3deg) rotateY(${rotateY}deg)`,
      }}
    >
      {items.map((item, index) => {
        const isSelected = index === selectedItem;
        return (
          <motion.div
            key={index}
            className="absolute w-[55vw] h-[35vw] cursor-pointer p-20"
            style={{
              transform: `rotateY(${index * -40}deg) translateZ(${
                window.innerWidth * 0.8
              }px)`,
            }}
            animate={{
              opacity: getOpacity(index, selectedItem),
            }}
            onClick={() => selectItem(index)}
          >
            <div className="relative w-full h-full z-50">
              <motion.div
                animate={{
                  y: isSelected ? -100 : -40,
                  opacity: isSelected ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  stiffness: 200,
                  damping: 10,
                  type: "spring",
                }}
                className="absolute bottom-10 text-7xl font-bold"
              >
                {item.label}
              </motion.div>
              <motion.div
                animate={{
                  y: isSelected ? -70 : -20,
                  opacity: isSelected ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  stiffness: 200,
                  damping: 10,
                  type: "spring",
                }}
                className="absolute bottom-5 text-3xl"
              >
                {item.description}
              </motion.div>
              <motion.div
                animate={{
                  y: isSelected ? -46 : 0,
                  opacity: isSelected ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  stiffness: 200,
                  damping: 10,
                  type: "spring",
                }}
                className="absolute bottom-0 text-3xl"
              >
                {item.url}
              </motion.div>
            </div>
            <Image
              src={item.image}
              alt={item.label}
              fill={true}
              className="w-full h-full absolute object-cover rounded-2xl top-0 bg-black grayscale"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

function getOpacity(index: number, selectedItem: number) {
  if (index === selectedItem) {
    return 1;
  }
  if (selectedItem === 8) {
    if (index === 7 || index === 0) {
      return 0.9;
    }
    return 0.4;
  }
  if (selectedItem === 0) {
    if (index === 8 || index === 1) {
      return 0.9;
    }
    return 0.4;
  }
  if (index === selectedItem + 1 || index === selectedItem - 1) {
    return 0.9;
  }
  return 0.4;
}

export default InfiniteCarousel;
