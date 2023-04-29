import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import ProjectTile from "@/components/atoms/ProjectTile/ProjectTile";
import { Project } from "@/types/project";
import { use } from "react";

const getRepositories = async (): Promise<Project[]> => {
  const res = await fetch(
    `https://gh-pinned-repos.egoist.dev/?username=${process.env.GITHUB_USERNAME}`,
    { cache: "no-store" }
  );
  return await res.json();
};

export default function Home() {
  const repos = use(getRepositories());

  return (
    <PageWrapper className="flex flex-col gap-10 px-10">
      <div className="text-9xl pt-20 semi">
        <h1 className="font-bold">I&apos;M CLEWUP,</h1>
        <h1>SOFTWARE DEVELOPER.</h1>
      </div>

      <div>
        <h2 className="text-xl">PROJECTS</h2>
        <div className="grid grid-cols-4 gap-5">
          {repos.map((project) => {
            return <ProjectTile key={project.repo} project={project} />;
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
    </PageWrapper>
  );
}
