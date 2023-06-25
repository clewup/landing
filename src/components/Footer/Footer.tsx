"use client";

import metadata from "@/constants/metadata";
import {
  SiTwitter as TwitterIcon,
  SiGithub as GitHubIcon,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Clock from "react-live-clock";

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-5 px-5 bg-base-light md:px-10">
      <span className="flex gap-2 flex-col md:flex-row md:gap-5">
        <p className="text-lg">© ALL RIGHTS RESERVED</p>
        <Clock
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"GB"}
          className="text-lg"
        />
      </span>
      <span className="flex gap-5 flex-col md:flex-row md:items-center">
        <Link href="mailto:lewis@clewup.co.uk" className="text-lg">
          {metadata.email}
        </Link>

        <div className="flex gap-2 flex-row">
          <Link target="_blank" href={metadata.socials.twitter}>
            <TwitterIcon className="cursor-pointer" height={20} />
          </Link>
          <Link target="_blank" href={metadata.socials.github}>
            <GitHubIcon className="cursor-pointer" height={20} />
          </Link>
        </div>
      </span>
    </div>
  );
};

export default Footer;
