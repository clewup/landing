"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Monitor as MonitorIcon,
  Code as CodeIcon,
  User as UserIcon,
} from "react-feather";
import { motion as m } from "framer-motion";

const Header = () => {
  const { setCursor } = useCursor();
  const router = useRouter();

  function handleMouseEnter() {
    setCursor("link");
  }

  function handleMouseLeave() {
    setCursor("default");
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const headerLinks = [
    {
      label: "me",
      href: "#",
    },
    {
      label: "projects",
      href: "#projects",
    },
    {
      label: "summary",
      href: "#summary",
    },
  ];

  return (
    <m.div className="fixed h-[15vh] w-full flex justify-between p-5 z-40">
      <Link
        href="/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <m.p
          className="text-2xl font-bold"
          layoutId="logo"
          transition={{ duration: 0.7 }}
        >
          LEWIS J
        </m.p>
        <m.p
          variants={variants}
          initial="hidden"
          animate="visible"
          className="text-xl font-bold text-primary"
        >
          PFOLIO-23
        </m.p>
      </Link>

      <m.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3"
      >
        {headerLinks.map((headerLink, index) => (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push(headerLink.href)}
            key={index}
            className="rounded-2xl border-[1px] border-white px-3 uppercase text-center"
          >
            {headerLink.label}
          </div>
        ))}
      </m.div>
    </m.div>
  );
};

export default Header;
