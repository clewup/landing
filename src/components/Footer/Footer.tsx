"use client";

import metadata from "@/data/metadata";
import {
  SiTwitter as TwitterIcon,
  SiGithub as GitHubIcon,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <div className="h-20 flex items-center justify-between px-10 bg-base-300">
      <span className="flex gap-5">
        <p className="text-lg">© 2023 CLEWUP</p>
        <p className="text-lg">Privacy Policy</p>
      </span>
      <span className="flex gap-5 items-center">
        <a href="mailto:lewis@clewup.co.uk" className="text-lg">
          {metadata.email}
        </a>
        <a target="_blank" href={metadata.socials.twitter}>
          <TwitterIcon className="cursor-pointer" height={20} />
        </a>
        <a target="_blank" href={metadata.socials.github}>
          <GitHubIcon className="cursor-pointer" height={20} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
