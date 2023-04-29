import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="backdrop-filter backdrop-blur-md fixed w-screen text-3xl items-center flex justify-center gap-10 font-bold py-5 z-50">
      <Link href={"/"} className="absolute left-10">
        <Image src={"/smile_logo.png"} alt={"logo"} height={50} width={50} />
      </Link>
      <>
        <Link href={"/projects"}>
          <p>PROJECTS</p>
        </Link>
        <Link href={"/about"}>
          <p>ABOUT</p>
        </Link>
      </>
    </div>
  );
};
export default Header;
