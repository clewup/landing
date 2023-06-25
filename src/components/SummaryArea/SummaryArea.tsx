import React, { FC } from "react";

interface SummaryAreaProps {
  area: string;
  skills: string[];
}

const SummaryArea: FC<SummaryAreaProps> = ({ area, skills }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-20 md:justify-between border-b-[1px] border-base-light pb-10 last:border-b-0">
      <h2 className="text-xl font-bold md:w-1/2 font-drukWide">{area}</h2>
      <span className="text-2xl md:w-1/4">
        {skills.map((area, index) => (
          <p key={index}>{area}</p>
        ))}
      </span>
    </div>
  );
};

export default SummaryArea;
