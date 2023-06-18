import Me from "@/components/Me/Me";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Projects from "@/components/Projects/Projects";
import Summary from "@/components/Summary/Summary";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col">
      <Me />
      <Projects />
      <Summary />
    </PageWrapper>
  );
}
