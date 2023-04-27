import Heading from "@/components/atoms/Heading/Heading";
import ProjectTile from "@/components/atoms/ProjectTile/ProjectTile";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={
        "flex flex-col gap-10 justify-center items-center h-screen px-10"
      }
    >
      <Heading>I&apos;M CLEWUP, SOFTWARE DEVELOPER.</Heading>

      <div className="grid grid-cols-4 gap-5">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </main>
  );
}
