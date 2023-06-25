"use client";

import useSectionStore from "@/lib/zustand/hooks/useSectionStore/useSectionStore";
import Link from "next/link";
import { motion as m, Variants } from "framer-motion";
import cx from "classnames";

const Header = () => {
  const { inViewSection } = useSectionStore();

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
      label: "contact",
      href: "#contact",
    },
  ];

  const buttonVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.02, rotate: -1 },
  };

  return (
    <m.div className="fixed h-[15vh] w-screen flex justify-end p-5 z-40">
      <m.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3 items-end"
      >
        {headerLinks.map((headerLink, index) => (
          <Link key={index} href={headerLink.href}>
            <m.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className={cx(
                "rounded-full bg-base-light font-drukWide border-[2px] px-3 uppercase text-center",
                inViewSection === headerLink.label
                  ? "border-primary"
                  : "border-white"
              )}
            >
              {headerLink.label}
            </m.button>
          </Link>
        ))}
      </m.div>
    </m.div>
  );
};

export default Header;
