"use client";

import InfiniteCarousel from "@/components/atoms/InfiniteCarousel/InfiniteCarousel";
import projects from "@/data/projects";
import { useRef, useState } from "react";

const Projects = () => {
  const carouselItems = projects.map((project) => ({
    label: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
  }));

  return (
    <div
      className="relative flex justify-center items-center h-screen"
      style={{ perspective: "2000px" }}
    >
      <InfiniteCarousel items={carouselItems} />
    </div>
  );
};

export default Projects;
