import Hero from "@/components/atoms/Hero/Hero";
import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import Skills from "@/components/organisms/Skills/Skills";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-10">
      <Hero />
      <Skills />
    </PageWrapper>
  );
}
