import Banner from "@/components/Banner/Banner";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Projects from "@/components/Projects/Projects";
import Summary from "@/components/Summary/Summary";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col">
      <Banner />
      <Projects />
      <Summary />
    </PageWrapper>
  );
}
