"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();
  console.log("pathname ===>", pathname);
  return (
    <>
      <nav className="flex gap-14 text-xl uppercase drop-shadow-md">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "underline underline-offset-2 decoration-2" : ""
          } drop-shadow-lg `}
        >
          Home
        </Link>
        <Link
          href="/services"
          className={`${
            pathname === "/services"
              ? "underline underline-offset-2 decoration-2"
              : ""
          } drop-shadow-lg`}
        >
          Services
        </Link>
        <Link
          href="/about-us"
          className={`${
            pathname === "/about-us"
              ? "underline underline-offset-2 decoration-2"
              : ""
          } drop-shadow-lg`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${
            pathname === "/contact"
              ? "underline underline-offset-2 decoration-2"
              : ""
          } drop-shadow-lg`}
        >
          Contact
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;
