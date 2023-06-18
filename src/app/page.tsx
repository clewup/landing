import Cursor from "@/components/Cursor/Cursor";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Projects from "@/components/Projects/Projects";
import Summary from "@/components/Summary/Summary";
import Values from "@/components/Banner/components/Values/Values";
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
