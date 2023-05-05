"use client";

import meta from "@/data/meta";
import {} from "@heroicons/react/24/outline";
import {
  SiTwitter as TwitterIcon,
  SiGithub as GitHubIcon,
} from "@icons-pack/react-simple-icons";
import { useRouter } from "next/navigation";

const Footer = () => {
  return (
    <div className="h-20 flex items-center justify-center relative">
      <span className="absolute left-10 flex gap-5">
        <a target="_blank" href={meta.socials.twitter}>
          <TwitterIcon className="cursor-pointer" />
        </a>
        <a target="_blank" href={meta.socials.github}>
          <GitHubIcon className="cursor-pointer" />
        </a>
      </span>
      <p className="text-xl">© {new Date().getFullYear()} CLEWUP.</p>
    </div>
  );
};

export default Footer;
