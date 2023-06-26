"use client";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import projects from "@/constants/projects";
import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeftCircle } from "react-feather";
import cx from "classnames";

export default function ProjectSlug({
  params,
}: {
  params: Record<string, string>;
}) {
  const { setCursor } = useCursor();

  useEffect(() => {
    setCursor("default");
  }, []);

  const name = decodeURIComponent(params.slug);
  const project = projects.find((project) => project.name === name);

  if (!project) {
    return (
      <PageWrapper className="flex items-center justify-center">
        <div className="w-1/3 text-center">
          <h1 className="font-bold text-9xl font-drukCond">UH OH!</h1>
          <p className="text-2xl">{name} doesn&apos;t exist (yet)!</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="relative flex">
      <Link href="/#works" className="absolute top-10 right-10">
        <ArrowLeftCircle size={40} />
      </Link>

      <div className="w-1/2">
        <m.img
          src={project.image}
          alt={project.name}
          className={cx("h-full w-full object-cover", project.background)}
          layoutId="project_image"
          transition={{
            duration: 1.5,
          }}
        />
      </div>

      <div className="w-1/2 p-5 flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="text-9xl font-bold font-drukWide uppercase">
            {project.name}
          </h1>
          <p>{project.description}</p>
        </div>

        <Link href={project.website} target="_blank">
          <h1 className="text-9xl font-bold font-drukCond underline">
            VIEW DEMO
          </h1>
        </Link>
      </div>
    </PageWrapper>
  );
}
