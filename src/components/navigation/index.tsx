import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigationBar from "./navigation-bar";

const Navigation = () => {
  return (
    <section
      className={`flex flex-wrap justify-between items-center mt-[66px] mx-[64px] mb-[57px] font-degular`}
    >
      <Image
        className=""
        src="/HBS-white.png"
        alt="Hells Bells Logo"
        width={200}
        height={38}
        priority
      />
      <NavigationBar />
      {/* <ThemeToggle /> */}
      <div className="flex gap-5 items-center p-15 text-[16px]">
        <div>
          <button>Log In</button>
        </div>
        <div className="flex gap-5 pl-5 items-center border-l border-black h-[50px]">
          <Link href={""}>IG</Link>
          <Link href={""}>FB</Link>
          <Link href={""}>LKDIN</Link>
          <Link href={""}>X</Link>
          <Link href={""}>TMLR</Link>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
