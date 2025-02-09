import Link from 'next/link';
import React from 'react'


const MapDirections = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.170602083361!2d75.71880427612291!3d26.96149625799106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db336f7f348ab%3A0xb6fe9380cb2ef774!2sHells%20Bells%20Music%20Studio!5e0!3m2!1sen!2sin!4v1739074773156!5m2!1sen!2sin&maptype=roadmap&disableDefaultUI=true"
          width="600"
          height="500"
          className="w-full lg:w-[75%]p-6 border:0;"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className='"w-full lg:w-[25%] p-6 bg-grayLight pt-20 pr-5 pb-6 pl-24'>
          <p className="text-grey uppercase">Studio:</p>
          <p>
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
}

export default MapDirections