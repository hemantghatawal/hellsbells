import Image from "next/image";
import React from "react";
import AccordianAndVideos from "./accordian-and-videos";

const ServicesPage = () => {
  return (
    <div className="m-20">
      <div className="center">
        <h1 className="flex items-center place-content-center font-beni uppercase text-[425px] leading-[0.7]">
          What we do
          <Image
            src="/img/services-main.png"
            className="ml-6"
            height={425}
            width={425}
            alt="services logo"
          />
        </h1>
        <p className="ml-8 text-2xl font-degular font-semibold uppercase leading-none">
          tailored solutions that turn <br /> vision into reality
        </p>
      </div>
      <div className="lg:ml-[50%]">
        <p className="m-4 px-36 font-degular text-3xl leading-none">
          Since our inception, we have consistently upheld a commitment to
          blending innovation with collaboration. If you are ready to embark on
          a journey of technology-driven creativity and seamless partnership,
          begin your experience with HELLS BELLS.
        </p>
        <p className="m-4 px-36 font-degular text-3xl leading-none">
          Should you have any inquiries or wish to learn more, we are here to
          assist in bringing your vision to life.
        </p>
      </div>
      <AccordianAndVideos />
      <div className="m-20 center">
        <h1 className=" flex flex-wrap font-beni uppercase text-[375px] leading-[0.7]">
          Bringing vision and creativity to life in their
          <Image
            src="/img/services-section.png"
            className=""
            height={151}
            width={634}
            alt="services logo"
          />
          own way
        </h1>
      </div>
    </div>
  );
};

export default ServicesPage;
