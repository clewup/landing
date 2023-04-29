import ProjectTile from "@/components/atoms/ProjectTile/ProjectTile";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 h-screen px-10">
      <div className="text-9xl pt-20 semi">
        <h1 className="font-bold">I&apos;M CLEWUP,</h1>
        <h1>SOFTWARE DEVELOPER.</h1>
      </div>

      <div>
        <h2 className="text-xl">PROJECTS</h2>
        <div className="grid grid-cols-4 gap-5">
          {projects.map((project) => {
            return <ProjectTile key={project.id} project={project} />;
          })}
        </div>
      </div>

      <div className="text-3xl pb-10">
        <p>WEB DEVELOPMENT</p>
        <p>API DEVELOPMENT</p>
        <p>TYPESCRIPT</p>
        <p>REACT & NEXT</p>
        <p>.NET</p>
        <p>POSTGRES</p>
      </div>
    </main>
  );
}
