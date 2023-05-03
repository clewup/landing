import Hero from "@/components/atoms/Hero/Hero";
import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import Projects from "@/components/organisms/Projects/Projects";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-10">
      <Hero />
      <Projects />
    </PageWrapper>
  );
}
