"use client";

import Logo from "@/components/atoms/Logo/Logo";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion as m } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const routes = [
    {
      label: "Projects",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="relative h-[10vh] text-lg gap-5 w-screen md:text-2xl items-center flex md:justify-end px-12 md:gap-10 py-5 z-50">
      <Link href={"/"} className="md:absolute left-10">
        <div className="flex items-center text-3xl font-bold">
          <h1>CLEW</h1>
          <span className="flex items-center -ml-1">
            <Logo className="w-10 h-10" />
            <h1 className="-ml-1">P</h1>
          </span>
        </div>
      </Link>
      <>
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href} className="relative">
              <p>{route.label}</p>
              {pathname === route.href && (
                <m.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-1 w-full bg-branding-purple"
                />
              )}
            </Link>
          );
        })}
        <div
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme !== "light" ? (
            <m.div
              variants={{ hidden: { rotate: -20 }, visible: { rotate: 20 } }}
              initial="hidden"
              animate="visible"
            >
              <MoonIcon className="w-8" />
            </m.div>
          ) : (
            <m.div
              variants={{ hidden: { rotate: 20 }, visible: { rotate: -20 } }}
              initial="hidden"
              animate="visible"
            >
              <SunIcon className="w-8" />
            </m.div>
          )}
        </div>
      </>
    </div>
  );
};
export default Header;
