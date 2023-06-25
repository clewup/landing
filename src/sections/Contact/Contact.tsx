"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import SummaryArea from "@/components/SummaryArea/SummaryArea";
import useSectionStore from "@/lib/zustand/hooks/useSectionStore/useSectionStore";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Contact = () => {
  const { setInViewSection } = useSectionStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (isInView) setInViewSection("contact");
  }, [isInView]);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 md:py-0"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-20 px-5 md:px-20 w-full md:flex-row">
        <div className="flex flex-col gap-5 md:w-1/3 md:gap-10 bg-base-light p-5 rounded-xl">
          <h1 className="text-9xl font-bold font-drukCond">REACH OUT</h1>

          <ContactForm />
        </div>
        <div className="flex flex-col gap-10 md:w-2/3 p-5">
          <SummaryArea
            area="SERVICES"
            skills={["UI/UX design", "API development", "Cloud computing"]}
          />
          <SummaryArea
            area="FRAMEWORKS/LIBRARIES"
            skills={[
              "React.js",
              "Next.js",
              ".NET",
              "Nest.js",
              "Node.js",
              "Tailwind",
              "Framer",
            ]}
          />
          <SummaryArea area="LANGUAGES" skills={["TypeScript", "C#", "Sass"]} />
          <SummaryArea
            area="DATABASES"
            skills={["MsSQL", "Postgres", "MongoDB"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
