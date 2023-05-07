"use client";

import { FC, ReactNode } from "react";
import cx from "classnames";
import { motion as m } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <m.main
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
      className={cx("min-h-screen", className)}
    >
      {children}
    </m.main>
  );
};
export default PageWrapper;
