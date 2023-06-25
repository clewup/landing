"use client";

import Link from "next/link";
import { motion as m, Variants } from "framer-motion";

const Header = () => {
  const variants: Variants = {
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
      label: "works",
      href: "#works",
    },
    {
      label: "summary",
      href: "#summary",
    },
  ];

  return (
    <m.div className="fixed h-[15vh] w-screen flex justify-end p-5 z-40">
      <m.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3"
      >
        {headerLinks.map((headerLink, index) => (
          <Link
            href={headerLink.href}
            key={index}
            className="rounded-full bg-base-light border-[1px] border-white px-3 uppercase text-center"
          >
            {headerLink.label}
          </Link>
        ))}
      </m.div>
    </m.div>
  );
};

export default Header;
