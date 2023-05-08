import FeaturedProject from "@/components/atoms/FeaturedProject/FeaturedProject";
import ProjectsCatalogue from "@/components/atoms/ProjectsCatalogue/ProjectsCatalogue";
import Hero from "@/components/atoms/Hero/Hero";
import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-10">
      <Hero />
      <FeaturedProject />
    </PageWrapper>
  );
}
