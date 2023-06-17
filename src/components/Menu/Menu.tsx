"use client";

import { useCursor } from "@/contexts/CursorContext/CursorContext";
import { useRouter } from "next/navigation";
import {
  Monitor as MonitorIcon,
  Code as CodeIcon,
  User as UserIcon,
} from "react-feather";

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
    <div className="fixed right-10 top-10 flex flex-col gap-2">
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
  );
};

export default Menu;
