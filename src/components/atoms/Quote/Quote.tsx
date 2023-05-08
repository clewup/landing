"use client";

import { motion as m } from "framer-motion";

const Quote = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <m.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.5 } },
      }}
      initial="hidden"
      whileInView="visible"
      className="h-[50vh] p-5 flex gap-5 justify-center items-center"
    >
      <m.h1 variants={textVariants} className="text-7xl font-bold">
        THINK,
      </m.h1>
      <m.h1
        variants={textVariants}
        className="text-7xl font-bold text-branding-purple"
      >
        CREATE,
      </m.h1>
      <m.h1 variants={textVariants} className="text-7xl font-bold">
        DELIVER.
      </m.h1>
    </m.div>
  );
};

export default Quote;
