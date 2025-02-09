import React from "react";
import MapDirections from "./map-directions";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="font-degular ">
      <MapDirections />
      {/* absolute inset-x-0 bottom-0 */}
      <footer className="flex bg-primaryColor text-white">
        <div className="lg:w-[500px]p-6">
          <Image
            className="ml-10"
            src="/whitelogo.svg"
            alt="whitelogo logo"
            width={180}
            height={38}
            priority
          />
          <p className="text-sm">
            JAIPUR , GOA , ORLANDO, <br /> SEOUL ,TOKYO , NEW YOURK
          </p>

          <p>©2021 - HELLS BELLS STUDIO MUSIC GROUP COMPANY</p>
        </div>
        <div className="flex flex-wrap gap-20 p-20">
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
