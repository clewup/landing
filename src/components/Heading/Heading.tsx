import { FC } from "react";

interface HeadingProps {
  text: string;
  subtext: string;
}

const Heading: FC<HeadingProps> = ({ text, subtext }) => {
  return (
    <div className="relative h-24 flex flex-col justify-center items-center">
      <h1 className="absolute text-7xl font-bold text-primary">{text}</h1>
      <h1 className="absolute text-9xl font-bold opacity-20">{subtext}</h1>
    </div>
  );
};
export default Heading;
