"use client";

import { Project } from "@/types/project";
import Link from "next/link";
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface ProjectTileProps {
  project: Project;
}

const ProjectTile: FC<ProjectTileProps> = ({ project }) => {
  const [isHovering, setHovering] = useState(false);

  return (
    <Link href={project.link}>
      <motion.div
        className="h-96 border-black border-2 text-black flex items-center justify-center rounded"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        {isHovering && (
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center text-4xl font-bold uppercase"
          >
            {project.repo}
          </motion.p>
        )}
      </motion.div>
    </Link>
  );
};

export default ProjectTile;
