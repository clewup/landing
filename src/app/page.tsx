import Me from "@/sections/Me/Me";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Works from "@/sections/Works/Works";
import Contact from "@/sections/Contact/Contact";
import React from "react";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col">
      <Me />
      <Works />
      <Contact />
    </PageWrapper>
  );
}
