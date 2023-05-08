import Hero from "@/components/organisms/Hero/Hero";
import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import Introduction from "@/components/organisms/Introduction/Introduction";
import Projects from "@/components/organisms/Projects/Projects";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-10">
      <Hero />
      <Introduction />
      <Projects />
    </PageWrapper>
  );
}
