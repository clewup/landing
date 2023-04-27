import React, { FC } from "react";

interface HeadingProps {
  children: string;
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <h1 className="text-6xl font-bold text-black tracking-tighter">
      {children}
    </h1>
  );
};
export default Heading;
