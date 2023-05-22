import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Projects from "@/components/Projects/Projects";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col p-5">
      <Hero />
      <About />
      <Projects />
    </PageWrapper>
  );
}
