"use client";

import Logo from "@/components/atoms/Logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

const Header = () => {
  const pathname = usePathname();

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
    <div className="relative h-[10vh] text-lg gap-5 w-screen md:text-3xl items-center flex md:justify-end px-12 md:gap-10 py-5 z-50">
      <Link href={"/"} className="md:absolute left-10">
        <Logo className="w-16 h-16" />
      </Link>
      <>
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href} className="relative">
              <p>{route.label}</p>
              {pathname === route.href && (
                <m.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-1 w-full bg-white"
                />
              )}
            </Link>
          );
        })}
      </>
    </div>
  );
};
export default Header;
