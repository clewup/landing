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

  const sublogoVariants = {
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
        <m.img
          src="https://res.cloudinary.com/dliog6kq6/image/upload/v1687095992/LEWIS_J_idjcjb.png"
          alt=""
          layoutId="logo"
          className="h-5 w-full object-contain"
          transition={{ duration: 0.7 }}
        />
        <m.p
          variants={sublogoVariants}
          initial="hidden"
          animate="visible"
          className="text-xl font-bold text-primary"
        >
          PFOLIO-23
        </m.p>
      </Link>

      <div className="flex flex-col gap-3">
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
      </div>
    </m.div>
  );
};

export default Header;
