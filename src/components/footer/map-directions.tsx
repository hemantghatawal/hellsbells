import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MapDirections = () => {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/services") {
    return null; // don't show anything
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.170602083361!2d75.71880427612291!3d26.96149625799106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db336f7f348ab%3A0xb6fe9380cb2ef774!2sHells%20Bells%20Music%20Studio!5e0!3m2!1sen!2sin!4v1739074773156!5m2!1sen!2sin&maptype=roadmap&disableDefaultUI=true"
          width="600"
          height="700"
          className="w-full lg:w-[65%]p-6 border:0;"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className='"w-full lg:w-[35%] bg-grayLight pl-28 pt-36 text-xl'>
          <p className="text-gray-500 uppercase ">Studio:</p>
          <p className="leading-none">
            Plt.no. 448, Niwaru Rd, Ganesh Nagar <br /> Vistar, Harnathapura,
            Jhotwara, Jaipur, <br /> Rajasthan 302012
          </p>
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=Hells Bells Music Studio"
            target="_blank"
            className="block font-semibold uppercase underline mt-8"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </>
  );
};

export default MapDirections;
