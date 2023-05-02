import { Skill } from "@/types/skill";
import React, { FC } from "react";

interface SkillProps {
  skill: Skill;
}

const Skill: FC<SkillProps> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center w-[280px] md:w-[400px] mx-auto p-10 relative border-2 border-black rounded">
      <skill.icon width={72} />
      <div className="pt-5 w-full">
        <h2 className="text-4xl text-center font-bold">{skill.title}</h2>
        <p className="text-xl pt-5">{skill.description}</p>
      </div>
    </div>
  );
};
export default Skill;
