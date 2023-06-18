"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { useRouter } from "next/navigation";
import {
  Monitor as MonitorIcon,
  Code as CodeIcon,
  User as UserIcon,
} from "react-feather";
import { motion as m } from "framer-motion";

const Menu = () => {
  const { setCursor } = useCursor();
  const router = useRouter();

  function handleMouseEnter() {
    setCursor("link");
  }

  function handleMouseLeave() {
    setCursor("default");
  }

  return (
    <m.div className="fixed w-screen flex justify-between right-0 px-5">
      <m.h1 className="text-4xl font-bold" layoutId="logo">
        LEWIS J
      </m.h1>
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

export default Menu;
