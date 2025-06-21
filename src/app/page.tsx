"use client";

import BigImageCarousel from "@/components/homepage/big-image-carousel";
import ImageCarousel from "@/components/homepage/image-carousel";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const heading = e.currentTarget;
    const rect = heading.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const moveX = (x / rect.width - 0.5) * -50;

    heading.style.transform = `translateX(${moveX}px)`;
    heading.style.transition = "transform 0.3s ease";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.currentTarget.style.transform = "translateX(0)";
  };

  const parallaxTextRef = useRef<HTMLHeadingElement>(null);
  const parallaxSectionRef = useRef<HTMLElement>(null);

  const secondParallaxTextRef = useRef<HTMLHeadingElement>(null);
  const secondParallaxSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxTextRef.current && parallaxSectionRef.current) {
        const rect = parallaxSectionRef.current.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollProgress = Math.min(
            Math.max(0, (window.innerHeight - rect.top) / rect.height),
            1
          );
          const maxMove = 200;
          const offset = maxMove * (0.5 - scrollProgress);
          parallaxTextRef.current.style.transform = `translateY(${offset}px)`;
        }
      }

      if (secondParallaxTextRef.current && secondParallaxSectionRef.current) {
        const rect = secondParallaxSectionRef.current.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollProgress = Math.min(
            Math.max(0, (window.innerHeight - rect.top) / rect.height),
            1
          );

          const maxMove = 200;
          const offset = maxMove * (0.5 - scrollProgress);

          secondParallaxTextRef.current.style.transform = `translateY(${offset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Artists/Creators Section */}
      <BigImageCarousel />
      <div className="relative bg-black text-white text-center flex justify-center flex-col items-center pb-20">
        <h1
          className="text-[21.5vw] font-black font-beni leading-none uppercase p-0 m-0 -mt-32 cursor-default overflow-visible"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          ARTISTS / CREATORS
        </h1>
        <p className="max-w-8xl text-3xl mt-2 font-degular w-full text-center uppercase">
          Hells bells Group is now a full- stack music company with
          distribution, record label, publishing, and catalog divisions <br />
          [as we grow, we remain shamelessly passionate about creators, their
          projects, and their voices]
        </p>
        <div className="absolute font-degular bottom-6 right-6 text-4xl font-footlight">
          (1-9/21)
        </div>
      </div>
      {/* Artist Grid */}
      <ImageCarousel />
      {/* <section className="bg-black relative border-zinc-800 overflow-hidden">
        <div className="grid grid-cols-4 gap-2 -ml-[12.5%] -mr-[12.5%] w-[125%]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/4] relative">
              <Image
                src={"/img/demo.jpg"}
                alt={`Artist ${i}`}
                fill
                sizes={i === 1 || i === 4 ? "37.5vw" : "25vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section> */}
      {/* Links Grid */}
      <section className="bg-black text-white grid grid-cols-1 py-10 text-2xl font-degular">
        <div className="px-6 w-full">
          {/* Add border-t here */}
          <div className="grid grid-cols-3 gap-x-12 gap-y-6 border-zinc-800 pt-2">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {[
                "Anuel AA",
                "Daddy Yankee",
                "De La Ghetto",
                "Flow La Movie",
                "Fuerza Regida",
                "Gianni & Kyle",
              ].map((name, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-orange-500 uppercase border-b pb-1 border-zinc-800"
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {[
                "Haze",
                "Jason Derulo",
                "Lil Mosey",
                "Luny Tunes",
                "Marca Registrada",
                "Monte Booker",
              ].map((name, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-orange-500 uppercase border-b pb-1 border-zinc-800"
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {[
                "Natanael Cano",
                "Ñengo Flow",
                "Sean Kingston",
                "Sy Ari Da Kid",
                "T.I.",
                "Ye Ali",
              ].map((name, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-orange-500 uppercase border-b pb-1 border-zinc-800"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submit Your Music */}
      <section className="relative bg-black grid grid-cols-2 relative py-10">
        {/* Content container */}
        <div className="col-span-2 flex justify-end relative">
          {/* Large image */}
          <div className="w-1/2 relative aspect-square">
            <Image
              src={"/img/homepage/submit-music-1.png"}
              alt="Submit your music background"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>

          {/* Small image */}
          <div className="w-1/4 relative aspect-square">
            <Image
              src={"/img/homepage/submit-music-2.png"}
              alt="Submit your music overlay"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text overlay */}
        <div className="absolute left-32 top-10 flex flex-col justify-center items-center z-10">
          <h2 className="font-beni text-[19.5vw]  font-black leading-[1] uppercase text-center text-white drop-shadow-lg w-[400px]">
            <div className="flex flex-col leading-none">
              <span className="mb-[-130px]">SUBMIT</span>
              <span className="mb-[-130px]">YOUR</span>
              <span>MUSIC</span>
            </div>
          </h2>
        </div>
        <button
          type="submit"
          className="px-24 py-3 bg-[#F26334] hover:bg-[#e05626] font-degular text-white font-semibold text-5xl transition-colors
                     text-2xl font-degular bg-orange-500 hover:bg-orange-600 text-white px-15 py-3 font-bold
                     absolute right-[50%] bottom-[76px] z-10"
        >
          Submit
        </button>
      </section>
      {/* Latest Releases */}
      <section
        ref={parallaxSectionRef}
        className="bg-black text-white pt-[600px] pb-16 relative overflow-hidden"
      >
        {/* Outline-only text background */}
        <div className="absolute top-0 w-screen flex items-start justify-center overflow-hidden">
          <h3
            ref={parallaxTextRef}
            className="text-[728px] font-beni opacity-50 whitespace-nowrap font-black leading-none uppercase text-transparent bg-clip-text bg-black stroke-white"
            style={{ WebkitTextStroke: "1px white" }}
          >
            FRESH NEW
          </h3>
        </div>

        <div className="relative z-10">
          <div className="w-full aspect-[2/1] relative">
            <Image
              src={"/img/homepage/latest-releases.png"}
              alt="Latest release banner"
              fill
              sizes="100vw"
              className="object-cover"
            />  
          </div>
          {/* -top-52 */}
          <h2 className="font-beni w-full text-[21.5vw] absolute -top-72 left-1/2 -translate-x-1/2 font-black leading-none uppercase text-shadow-md"
            // onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
          >
            LATEST RELEASES
          </h2>
        </div>
      </section>

      {/* Album Grid */}
      <section className="bg-black grid grid-cols-2 px-2 gap-2 pb-2">
        <div className="aspect-square relative">
          <Image
            src={"/img/homepage/album-1.png"}
            alt="CALEB"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/img/homepage/album-2.png"
            alt="MELTING IN HEAT"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>
      {/* More Albums */}
      <section className="bg-black grid grid-cols-2 px-2 gap-2 pb-4">
        <div className="aspect-square relative">
          <Image
            src="/img/homepage/album-3.png"
            alt="Urban Night"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/img/homepage/album-4.png"
            alt="Light Show"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>
      {/* Energy Amplifying */}
      <section className="bg-black text-white py-6 border-zinc-800">
        <div className="relative z-10">
          <div className="w-full aspect-[16/9] relative">
            <Image
              src={"/img/homepage/enery-amplifying.png"}
              alt="Latest release banner"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* <h2 className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[130px] font-black leading-none uppercase tracking-tighter">
            ENERGY AMPLIFYING.
          </h2> */}
        </div>
      </section>
      {/* Album Grid 2 */}
      <section className="bg-black grid grid-cols-2 px-2 gap-2 pb-2">
        <div className="aspect-square relative">
          <Image
            src={"/img/homepage/album-5.png"}
            alt="CALEB"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/img/homepage/album-6.png"
            alt="MELTING IN HEAT"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>
      {/* More Albums */}
      <section className="bg-black grid grid-cols-2 px-2 gap-2 pb-4">
        <div className="aspect-square relative">
          <Image
            src="/img/homepage/album-7.png"
            alt="Urban Night"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/img/homepage/album-8.png"
            alt="Light Show"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>
      {/* Become One Of Us */}
      <section
        ref={secondParallaxSectionRef}
        className="bg-black text-white pt-[600px] relative overflow-hidden"
      >
        {/* Outline-only text background */}
        <div className="absolute top-0 w-screen flex items-start justify-center pt-10 overflow-hidden">
          <h3
            ref={secondParallaxTextRef}
            className=" font-beni text-[1000px] opacity-50 whitespace-nowrap font-black leading-none uppercase text-transparent bg-clip-text bg-black stroke-white"
            style={{ WebkitTextStroke: "1px white" }}
          >
            01 of us
          </h3>
        </div>

        <div className="relative z-10">
          <div className="w-full aspect-[16/9] relative">
            <Image
              src={"/img/homepage/become-one-of-us.png"}
              alt="Latest release banner"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <h2 className="absolute font-beni -top-72 left-[50%] -translate-x-1/2 text-[430px] font-black leading-none uppercase whitespace-nowrap text-shadow-md">
            Become one of us
          </h2>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-between w-[70%]  z-10 pb-16">
          <p className="text-6xl font-footlight">
            Stand Strong with the Elementals
          </p>
          {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 uppercase font-bold"></button> */}
          <button
            type="submit"
            className="px-24 py-3 bg-[#F26334] hover:bg-[#e05626] font-degular text-white font-semibold text-5xl transition-colors"
          >
            Join Us
          </button>
        </div>
      </section>
    </main>
  );
}
