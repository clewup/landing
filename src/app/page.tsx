import Introduction from "@/components/Introduction/Introduction";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Projects from "@/components/Projects/Projects";
import Summary from "@/components/Summary/Summary";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col">
      <Introduction />
      <Projects />
      <Summary />
    </PageWrapper>
  );
}
