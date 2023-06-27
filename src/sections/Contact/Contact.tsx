"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import Area from "@/components/Area/Area";
import metadata from "@/constants/metadata";
import useSectionStore from "@/lib/zustand/hooks/useSectionStore/useSectionStore";
import {
  SiGithub as GitHubIcon,
  SiTwitter as TwitterIcon,
} from "@icons-pack/react-simple-icons";
import { useInView } from "framer-motion";
import Link from "next/link";
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

          <span className="flex gap-5 justify-center">
            <div className="flex gap-2 flex-row">
              <Link target="_blank" href={metadata.socials.twitter}>
                <TwitterIcon className="cursor-pointer" size={30} />
              </Link>
              <Link target="_blank" href={metadata.socials.github}>
                <GitHubIcon className="cursor-pointer" size={30} />
              </Link>
            </div>
          </span>
        </div>
        <div className="flex flex-col gap-10 md:w-2/3 p-5">
          <Area
            area="SERVICES"
            items={["UI/UX design", "API development", "Cloud computing"]}
          />
          <Area
            area="FRAMEWORKS/LIBRARIES"
            items={[
              "React.js",
              "Next.js",
              ".NET",
              "Nest.js",
              "Node.js",
              "Tailwind",
              "Framer",
            ]}
          />
          <Area area="LANGUAGES" items={["TypeScript", "C#", "Sass"]} />
          <Area area="DATABASES" items={["MsSQL", "Postgres", "MongoDB"]} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
