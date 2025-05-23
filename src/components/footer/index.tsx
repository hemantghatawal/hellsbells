"use client";
import React from "react";
import MapDirections from "./map-directions";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="font-degular relative">
      <MapDirections />
      {/* absolute inset-x-0 bottom-0 */}
      <footer className="flex bg-primaryColor text-white h-[600px] pt-10">
        <div className="flex flex-col justify-between lg:w-[700px] lg:px-10 md:px-5 pt-16 pb-5">
          <div className="ml-10 pt-[28px]">
            <Image
              src="/HBS-white.png"
              alt="Hells Bells Logo"
              width={260}
              height={38}
            />
            <p className="mt-10 font-thin">
              JAIPUR , GOA , ORLANDO, <br /> SEOUL ,TOKYO , NEW YORK
            </p>
          </div>

          <p className="text-2xl mb-6 ml-12 font-thin">
            ©2021 - HELLS BELLS STUDIO MUSIC GROUP COMPANY
          </p>
        </div>
        <div className="flex flex-wrap gap-5 md:gap-10 lg:gap-20 p-5 lg:p-15 pt-10 md:mt-8 mt-10 text-4xl uppercase font-thin leading-normal">
          <ul>
            <li>Services</li>
            <li>About</li>
          </ul>
          <ul>
            <li>Audiance Request</li>
            <li>Artist Request</li>
            <li>License</li>
            <li>Catalogs</li>
            <li>Press Contact</li>
          </ul>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Tumblr</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Cookies</li>
          </ul>
        </div>
      </footer>
      <div className="bg-white w-full h-5"></div>
    </div>
  );
};

export default Footer;
