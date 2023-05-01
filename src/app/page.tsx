import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import ProjectShowcase from "@/components/atoms/ProjectShowcase/ProjectShowcase";
import { Project } from "@/types/project";
import { use } from "react";

const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(
    `https://gh-pinned-repos.egoist.dev/?username=${process.env.GITHUB_USERNAME}`,
    { cache: "no-store" }
  );
  return await res.json();
};

export default function Home() {
  const projects = use(getProjects());

  return (
    <PageWrapper className="flex flex-col gap-10 px-10">
      <div className="text-9xl mt-16 semi">
        <h1 className="font-bold">I&apos;M CLEWUP,</h1>
        <h1>SOFTWARE DEVELOPER.</h1>
      </div>

      <ProjectShowcase projects={projects} />
    </PageWrapper>
  );
}
