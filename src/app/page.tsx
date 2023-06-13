import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Heading from "@/components/Heading/Heading";
import Hero from "@/components/Hero/Hero";
import History from "@/components/History/History";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Project from "@/components/Project/Project";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import ThinkCreateDeliver from "@/components/ThinkCreateDeliver/ThinkCreateDeliver";
import metadata from "@/data/metadata";
import projects from "@/data/projects";
import React from "react";
import { Mail as EmailIcon } from "react-feather";

export default function Home() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1, projects.length);

  return (
    <PageWrapper className="flex flex-col">
      <Hero />

      <SectionWrapper className="flex flex-col items-center justify-center gap-20">
        <ThinkCreateDeliver />
        <div className="flex justify-center items-center gap-10">
          <div className="w-1/3">
            <p className=" text-2xl">
              Working at the intersection of creativity and user experience, I
              aim to provide memorable experiences with functionality that
              supports business growth.
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-end gap-20">
            <span>
              <h2 className="text-4xl font-bold text-primary">SERVICES</h2>
              <span className="text-2xl">
                <p>UI/UX Development</p>
                <p>API Development</p>
              </span>
            </span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="flex flex-col gap-5">
        <Heading text="RECENT WORK" subtext="PROJECTS" />

        <FeaturedProject project={featuredProject} />
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="flex flex-col justify-center gap-5">
        <Heading text="EDUCATION & EMPLOYMENT" subtext="HISTORY" />

        <div className="flex justify-center">
          <History />
        </div>
      </SectionWrapper>

      <SectionWrapper className="flex flex-col justify-center gap-5">
        <Heading text="REACH OUT" subtext="CONTACT" />
        <div className="flex gap-10 justify-center">
          <div>
            <span className="flex gap-5 items-center">
              <span className="bg-primary text-base-100 rounded-[50%] p-2">
                <EmailIcon />
              </span>
              <a href={`mailto:${metadata.email}`} className="text-2xl">
                {metadata.email}
              </a>
            </span>
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
