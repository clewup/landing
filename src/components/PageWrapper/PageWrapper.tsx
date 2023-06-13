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
    <m.main className={cx("min-h-screen p-5", className)}>{children}</m.main>
  );
};
export default PageWrapper;
