"use client";

import Heading from "@/components/atoms/Heading/Heading";
import ProjectTile from "@/components/atoms/ProjectTile/ProjectTile";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main
      className={
        "flex flex-col gap-10 justify-center items-center h-screen px-10"
      }
    >
      <Heading>I&apos;M CLEWUP, SOFTWARE DEVELOPER.</Heading>

      <div className="grid grid-cols-4 gap-5">
        {projects.map((project) => {
          return <ProjectTile key={project.id} project={project} />;
        })}
      </div>
    </main>
  );
}
