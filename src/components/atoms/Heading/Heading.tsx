import React, { FC } from "react";

interface HeadingProps {
  children: string;
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return <h1 className="text-8xl font-bold text-purple-400">{children}</h1>;
};
export default Heading;
