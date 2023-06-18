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

  return (
    <m.div className="fixed w-full flex justify-between p-5 right-0 top-0 backdrop-blur items-center z-40">
      <Link
        href="/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <m.img
          src="https://res.cloudinary.com/dliog6kq6/image/upload/v1687095992/LEWIS_J_idjcjb.png"
          alt=""
          layoutId="logo"
          className="h-10 w-full object-contain"
          transition={{ duration: 0.7 }}
        />
        <m.p
          variants={sublogoVariants}
          initial="hidden"
          animate="visible"
          className="text-xl text-primary font-bold"
        >
          CREATIVE DEVELOPER
        </m.p>
      </Link>

      <div className="flex flex-col gap-2">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => router.push("#")}
        >
          <MonitorIcon />
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => router.push("#projects")}
        >
          <CodeIcon />
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => router.push("#summary")}
        >
          <UserIcon />
        </div>
      </div>
    </m.div>
  );
};

export default Header;
