import Cursor from "@/components/Cursor/Cursor";
import Menu from "@/components/Menu/Menu";
import Banner from "@/components/Banner/Banner";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Projects from "@/components/Projects/Projects";
import Summary from "@/components/Summary/Summary";
import Values from "@/components/Values/Values";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col">
      {/*PAGE CONSTANTS*/}
      <Cursor />
      <Menu />

      {/*PAGE CONTENT*/}
      <Banner />
      <Projects />
      <Summary />
    </PageWrapper>
  );
}
