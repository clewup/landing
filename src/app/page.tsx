import FeaturedProject from "@/components/atoms/FeaturedProject/FeaturedProject";
import Hero from "@/components/atoms/Hero/Hero";
import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import Quote from "@/components/atoms/Quote/Quote";
import projects from "@/data/projects";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col">
      <Hero />
      <Quote />

      <FeaturedProject project={projects[0]} />
    </PageWrapper>
  );
}
