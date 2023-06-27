import React, { FC } from "react";

interface AreaProps {
  area: string;
  items: string[];
}

const Area: FC<AreaProps> = ({ area, items }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-20 md:justify-between border-b-[1px] border-base-light pb-10 last:border-b-0">
      <h2 className="text-xl font-bold font-drukWide">{area}</h2>
      <span className="text-2xl text-right">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </span>
    </div>
  );
};

export default Area;
