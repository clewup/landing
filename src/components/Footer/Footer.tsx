"use client";

import { usePathname } from "next/navigation";
import cx from "classnames";

const Footer = () => {
  const pathname = usePathname();

  const isRendered = ["/"].includes(pathname);

  return (
    <div
      className={cx(
        "items-center justify-between py-10 px-5 bg-base-light text-lg md:px-10",
        isRendered ? "flex" : "hidden"
      )}
    >
      <p>Copyright © 2023 Lewis J</p>
      <p>All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
