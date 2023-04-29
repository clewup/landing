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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cx("min-h-screen", className)}
    >
      {children}
    </m.main>
  );
};
export default PageWrapper;
