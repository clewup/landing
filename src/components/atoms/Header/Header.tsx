import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-10 bg-black text-white w-screen text-3xl items-center flex justify-center gap-10 font-bold">
      <Link href={"/"} className="absolute left-10">
        <Image src={"/logo.png"} alt={"clewup_logo"} height={40} width={40} />
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
