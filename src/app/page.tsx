import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import ProjectShowcase from "@/components/atoms/ProjectShowcase/ProjectShowcase";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-10 px-10">
      <div className="text-9xl mt-16 semi">
        <h1 className="font-bold">I&apos;M CLEWUP,</h1>
        <h1>SOFTWARE DEVELOPER.</h1>
      </div>

      <ProjectShowcase />
    </PageWrapper>
  );
}
