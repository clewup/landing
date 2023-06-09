"use client";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Area from "@/components/Area/Area";
import projects from "@/constants/projects";
import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeftCircle, Eye } from "react-feather";
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

  const buttonVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.02, rotate: -1 },
  };

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
        <ArrowLeftCircle size={50} />
      </Link>

      <div className={cx("w-1/2 flex items-end", project.background)}>
        <m.img
          src={project.image}
          alt={project.name}
          className={cx("object-contain")}
        />
      </div>

      <div className="w-1/2 p-5 flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="-translate-x-20 text-9xl font-bold font-drukWide uppercase">
            {project.name}
          </h1>
          <p className="text-2xl py-10">{project.description}</p>

          <Area area="FEATURES" items={project.features} />
          <Area area="TECHNOLOGIES" items={project.technologies} />
        </div>

        <Link href={project.website} target="_blank">
          <m.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="text-4xl font-bold bg-primary py-3 rounded-full w-full flex items-center justify-center gap-4"
          >
            VIEW DEMO
            <Eye size={30} />
          </m.button>
        </Link>
      </div>
    </PageWrapper>
  );
}
