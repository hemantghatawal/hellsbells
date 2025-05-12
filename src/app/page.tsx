"use client";
import Image from "next/image";
import ArtistsHeading from "./artists-heading";
import ArtistsCarousel from "./artists-carousel";
import Link from "next/link";
import ParallaxSection from "./parallex-section";

export default function Home() {
  return (
    <>
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Hero section */}
        <div className="flex-1 flex flex-col justify-end pb-8 px-4 md:px-8">
          <ArtistsHeading />

          <div className="max-w-3xl mt-4 mb-8">
            <p className="text-sm md:text-base uppercase tracking-wider">
              HELLS BELLS GROUP IS NOW A FULL-STACK MUSIC COMPANY WITH
              DISTRIBUTION, RECORD LABEL, PUBLISHING, AND CATALOG DIVISIONS.
            </p>
            <p className="text-sm md:text-base uppercase tracking-wider mt-2">
              [AS WE GROW, WE REMAIN SHAMELESSLY PASSIONATE ABOUT CREATORS,
              THEIR PROJECTS, AND THEIR VOICES]
            </p>
          </div>

          <div className="self-end text-xl font-bold">(1:9/21)</div>
        </div>

        {/* Carousel section */}
        <div className="h-72 md:h-96">
          <ArtistsCarousel />
        </div>
      </div>
      <div className="min-h-screen bg-black text-white">
        {/* Artist listings in three columns */}
        <div className="grid grid-cols-3 px-10 py-6">
          {/* Left column */}
          <div className="flex flex-col border-t border-neutral-800">
            {[
              "ANUEL AA",
              "DADDY YANKEE",
              "DE LA GHETTO",
              "FLOW LA MOVIE",
              "FUERZA REGIDA",
              "GIANNI & KYLE",
            ].map((artist) => (
              <div key={artist} className="py-3 border-b border-neutral-800">
                {artist}
              </div>
            ))}
          </div>

          {/* Middle column */}
          <div className="flex flex-col border-t border-neutral-800">
            {[
              "HAZE",
              "JASON DERULO",
              "LIL MOSEY",
              "LUNY TUNES",
              "MARCA REGISTRADA",
              "MONTE BOOKER",
            ].map((artist) => (
              <div key={artist} className="py-3 border-b border-neutral-800">
                {artist}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col border-t border-neutral-800">
            {[
              "NATANAEL CANO",
              "NENGO FLOW",
              "SEAN KINGSTON",
              "SY ARI DA KID",
              "T.I.",
              "YE ALI",
            ].map((artist) => (
              <div key={artist} className="py-3 border-b border-neutral-800">
                {artist}
              </div>
            ))}
          </div>
        </div>

        {/* Main content section */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-10">
          {/* Left section with big text */}
          <div className="flex items-center">
            <h1 className="text-8xl font-extrabold leading-none tracking-tighter">
              SUBMIT
              <br />
              YOUR
              <br />
              MUSIC
            </h1>
          </div>

          {/* Middle section with purple image */}
          <div className="relative">
            <Image
              src="/img/services-main.png"
              alt="Music visual"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right section with "Jamming to bang" text and concert image */}
          <div className="relative flex flex-col">
            <div className="text-right italic text-4xl font-serif mb-4 pt-4">
              Jamming
              <br />
              to bang
            </div>
            <div className="flex-grow relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Concert silhouette"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-6 mb-12">
          <Link
            href="#"
            className="bg-[#F26B34] text-white font-medium py-3 px-16 text-xl hover:bg-[#e05a25] transition-colors"
          >
            Submit
          </Link>
        </div>
      </div>
      <div>
        <ParallaxSection />

        {/* Additional content to enable scrolling */}
        <section className="h-screen bg-neutral-100 flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl max-w-2xl text-center mb-8">
            Be part of something extraordinary. Our community is growing every
            day with people who share the same vision.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-md transition-colors">
            Join us
          </button>
        </section>
      </div>
    </>
  );
}
