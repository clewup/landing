import cx from "classnames";
import { FC, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className }) => {
  return <div className={cx("min-h-screen mt-20", className)}>{children}</div>;
};

export default SectionWrapper;
