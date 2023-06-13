import { ProjectType } from "@/types/projectTypes";
import Link from "next/link";
import React, { FC } from "react";
import { Eye as EyeIcon } from "react-feather";

interface FeaturedProjectProps {
  project: ProjectType;
}

const FeaturedProject: FC<FeaturedProjectProps> = ({ project }) => {
  return (
    <div className="flex p-5 bg-primary rounded-2xl text-base-100 gap-10">
      <div className="w-1/2 flex flex-col gap-10 justify-between">
        <span className="flex flex-col gap-5">
          <h2 className="text-5xl font-bold uppercase">{project.name}</h2>
          <p className="text-2xl">{project.description}</p>
        </span>

        <Link
          href={project.website}
          target={"_blank"}
          className="flex gap-2 items-center"
        >
          <p className="underline font-bold uppercase text-3xl">TAKE A PEEK!</p>
          <EyeIcon />
        </Link>
      </div>
      <div className="w-1/2">
        <img src={project.image} alt={project.name} className="rounded-2xl" />
      </div>
    </div>
  );
};

export default FeaturedProject;
