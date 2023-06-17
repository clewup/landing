import React, { FC } from "react";

interface SkillProps {
  heading: string;
  areas: string[];
}

const Skill: FC<SkillProps> = ({ heading, areas }) => {
  return (
    <div className="flex gap-20">
      <h2 className="text-2xl font-bold w-1/2">{heading}</h2>
      <span className="text-2xl">
        {areas.map((area, index) => (
          <p key={index}>{area}</p>
        ))}
      </span>
    </div>
  );
};

export default Skill;
