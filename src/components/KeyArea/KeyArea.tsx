import React, { FC } from "react";

interface KeyAreaProps {
  area: string;
  skills: string[];
}

const KeyArea: FC<KeyAreaProps> = ({ area, skills }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-20 md:justify-between">
      <h2 className="text-xl font-bold md:w-1/2">{area}</h2>
      <span className="text-xl md:w-1/3">
        {skills.map((area, index) => (
          <p key={index}>{area}</p>
        ))}
      </span>
    </div>
  );
};

export default KeyArea;
