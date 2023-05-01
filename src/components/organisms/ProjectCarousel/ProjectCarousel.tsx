"use client";

import Carousel from "@/components/atoms/Carousel/Carousel";
import projects from "@/data/projects";
import { router } from "next/client";
import { FC } from "react";

const ProjectCarousel: FC = () => {
  const items = projects.map((project) => ({
    label: project.name,
    onClick: () => router.push(project.url),
  }));

  return <Carousel items={items} />;
};

export default ProjectCarousel;
