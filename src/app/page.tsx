import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Heading from "@/components/Heading/Heading";
import Hero from "@/components/Hero/Hero";
import History from "@/components/History/History";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Project from "@/components/Project/Project";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import ThinkCreateDeliver from "@/components/ThinkCreateDeliver/ThinkCreateDeliver";
import projects from "@/data/projects";
import React from "react";

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

      <SectionWrapper className="flex flex-col items-center justify-center gap-5">
        <Heading text="EDUCATION & EMPLOYMENT" subtext="HISTORY" />
        <History />
      </SectionWrapper>
    </PageWrapper>
  );
}
