import React, { FC } from "react";

interface KeyAreaProps {
  area: string;
  skills: string[];
}

const KeyArea: FC<KeyAreaProps> = ({ area, skills }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-20 md:justify-between border-b-[1px] border-base-light pb-10 last:border-b-0">
      <h2 className="text-xl font-bold md:w-1/2">{area}</h2>
      <span className="text-2xl md:w-1/4">
        {skills.map((area, index) => (
          <p key={index}>{area}</p>
        ))}
      </span>
    </div>
  );
};

export default KeyArea;
