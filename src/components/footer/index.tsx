import React from "react";
import MapDirections from "./map-directions";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="font-degular relative bottom-5">
      <MapDirections />
      {/* absolute inset-x-0 bottom-0 */}
      <footer className="flex bg-primaryColor text-white ">
        <div className="flex flex-col justify-between lg:w-[500px] lg:px-10 md:px-5 pt-16 pb-5">
          <div className="ml-5">
            <Image
              src="/whitelogo.svg"
              alt="whitelogo logo"
              width={180}
              height={38}
              priority
            />
            <p className="text-sm mt-5">
              JAIPUR , GOA , ORLANDO, <br /> SEOUL ,TOKYO , NEW YOURK
            </p>
          </div>

          <p className="mt-10">
            ©2021 - HELLS BELLS STUDIO MUSIC GROUP COMPANY
          </p>
        </div>
        <div className="flex flex-wrap lg:gap-20 md:gap-10 sm:gap-5 lg:p-20 md:p-5 md:pt-10  md:mt-8 sm:mt-10">
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
    </div>
  );
};

export default Footer;
