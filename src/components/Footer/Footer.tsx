"use client";

import metadata from "@/constants/metadata";
import { useCursor } from "@/contexts/CursorContext/CursorContext";
import {
  SiTwitter as TwitterIcon,
  SiGithub as GitHubIcon,
} from "@icons-pack/react-simple-icons";
import { Suspense, useEffect, useState } from "react";
import Clock from "react-live-clock";

const Footer = () => {
  const { setCursor } = useCursor();

  function handleMouseEnter() {
    setCursor("link");
  }

  function handleMouseLeave() {
    setCursor("default");
  }

  return (
    <div className="h-20 flex items-center justify-between px-10 bg-base-light">
      <span className="flex gap-5">
        <p className="text-lg">© ALL RIGHTS RESERVED</p>
        <Clock
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"GB"}
          className="text-lg"
        />
      </span>
      <span className="flex gap-5 items-center">
        <a
          href="mailto:lewis@clewup.co.uk"
          className="text-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {metadata.email}
        </a>
        <a
          target="_blank"
          href={metadata.socials.twitter}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <TwitterIcon className="cursor-pointer" height={20} />
        </a>
        <a
          target="_blank"
          href={metadata.socials.github}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <GitHubIcon className="cursor-pointer" height={20} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
