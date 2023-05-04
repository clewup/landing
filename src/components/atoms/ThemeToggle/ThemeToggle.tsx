"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? (
        <m.div initial={{ rotate: -20 }} animate={{ rotate: 20 }}>
          <MoonIcon className="w-8" />
        </m.div>
      ) : (
        <m.div initial={{ rotate: 20 }} animate={{ rotate: -20 }}>
          <SunIcon className="w-8" />
        </m.div>
      )}
    </div>
  );
};

export default ThemeToggle;
