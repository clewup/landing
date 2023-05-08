import FeaturedProject from "@/components/atoms/FeaturedProject/FeaturedProject";
import Hero from "@/components/atoms/Hero/Hero";
import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import Quote from "@/components/atoms/Quote/Quote";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-10">
      <Hero />
      <Quote />
      <FeaturedProject />
      <div className="h-screen" />
    </PageWrapper>
  );
}
