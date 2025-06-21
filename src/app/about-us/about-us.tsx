import Image from "next/image";
import AboutUsCarousel from "./aboutus-carousel";
import { Separator } from "@/components/ui/separator";

export default function AboutUs() {
  return (
    <div className="min-h-screen transition-colors">
      {/* Hero Section */}
      <section className="container mx-32 m-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <h1 className="font-beni uppercase text-[425px] leading-[0.7] p-0 m-0 lg:w-[80%]">
            ABOUT US
          </h1>
          <div className="lg:w-[40%]">
            <div className="flex flex-row justify-end items-end	relative">
              <Image src="/img/2022.png" alt="2022" width={120} height={120} />
            </div>
          </div>
        </div>

        <div className=" mt-20 w-full">
          <div>
            <h2 className="font-degular text-7xl font-bold mb-8 leading-[0.9]">
              HELLS BELLS GROUP WAS <br /> FOUNDED IN 2022 BY PUNIT SONI <br />{" "}
              AND MONIKIA SONI CREATING <br /> TAILORED SOLUTIONS FOR AUDIO{" "}
              <br /> & CREATIVE PRODUCTION.
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div></div>
          <div className="flex justify-end">
            <div className="font-degular space-y-6 max-w-md text-base md:text-lg">
              <p className="leading-relaxed">
                They were either right, or just lucky. Within three <br /> years
                they had tremendous amount of work that <br /> shined in the
                industry.
              </p>
              <p className=" leading-relaxed">
                To date, they had deployed over 128 successful <br /> projects
                &amp; is damn proud of it.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Audio Equipment Image */}
      <div className="mt-16 lg:mt-24">
        <div className="relative w-[60%] mx-auto lg:mx-0">
          <Image
            src="/img/about-us-img.png"
            alt="Audio production equipment"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      <section className="container mx-auto px-4 py-16 lg:py-24 space-y-16">
        {/* Row 1 */}
        <div>
          <Separator className="my-8 h-[1px] bg-gray-500" />{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 001 */}
            <div className="space-y-4">
              <h3 className="font-footlight text-4xl md:text-5xl font-light">
                001
              </h3>
              <h4 className="font-degular text-xl md:text-2xl">
                CREATIVE
                <br />
                EXCELLENCE
              </h4>
              <p className="font-degular text-sm leading-relaxed">
                Crafting unique, high-quality sound that resonates with every
                artist and listener.
              </p>
            </div>

            {/* Service 002 */}
            <div className="space-y-4">
              <h3 className="font-footlight text-4xl md:text-5xl font-light">
                002
              </h3>
              <h4 className="font-degular text-xl md:text-2xl">
                INNOVATIVE
                <br />
                TECHNOLOGY
              </h4>
              <p className="font-degularfont-degular  text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Equipped with state-of-the-art tools to bring your musical
                vision to life with precision.
              </p>
            </div>

            {/* Service 003 */}
            <div className="space-y-4">
              <h3 className="font-footlight text-4xl md:text-5xl font-light">
                003
              </h3>
              <h4 className="font-degular text-xl md:text-2xl">
                COLLABORATIVE
                <br />
                ATMOSPHERE
              </h4>
              <p className="font-degular text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                A collaborative space where creativity thrives.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <Separator className="my-8 h-[1px] bg-gray-500" />{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 004 */}
            <div className="space-y-4">
              <h3 className="font-footlight text-4xl md:text-5xl font-light">
                004
              </h3>
              <h4 className="font-degular text-xl md:text-2xl">
                UNMATCHED
                <br />
                SKILL
              </h4>
              <p className="font-degular text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Experts committed to delivering exceptional results in every
                project.
              </p>
            </div>

            {/* Service 005 */}
            <div className="space-y-4">
              <h3 className="font-footlight text-4xl md:text-5xl font-light">
                005
              </h3>
              <h4 className="font-degular text-xl md:text-2xl">
                PERSONALIZED
                <br />
                EXPERIENCE
              </h4>
              <p className="font-degular text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Bespoke services that bring your unique vision to life.
              </p>
            </div>

            {/* Service 006 */}
            <div className="space-y-4">
              <h3 className="font-footlight text-4xl md:text-5xl font-light">
                006
              </h3>
              <h4 className="font-degular text-xl md:text-2xl">
                INDUSTRY-
                <br />
                LEADING SOUND
              </h4>
              <p className="font-degular text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Top-tier facilities delivering unmatched audio quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel Section */}
      <AboutUsCarousel />

      {/* Bottom Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="space-y-8">
          <div className="space-y-4 font-footlight">
            <h2 className="text-3xl md:text-5xl lg:text-6xl  leading-[0.8]">
              This is who we are. <br />
              If this resonates with you, let&apos;s chat
            </h2>
          </div>

          <button
            type="submit"
            className="px-24 py-3 bg-[#F26334] hover:bg-[#e05626] font-degular text-white font-semibold text-4xl transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
