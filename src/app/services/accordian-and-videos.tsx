"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const contentData = [
  {
    id: "music-recording",
    title: "MUSIC RECORDING",
    content:
      "Professional music recording services with state-of-the-art equipment and experienced sound engineers. Professional music recording services with state-of-the-art equipment and experienced sound engine .Professional music recording services with ste-art equipment and experienced sound engineers. Professional music recording services with state-of-the-art equipment and experienced sound engine. Professional music recording services with state-of-the-art equipment and experienced sound engineers.",
    videoUrl: "/placeholder.svg?height=480&width=640",
  },
  {
    id: "audio-production",
    title: "AUDIO PRODUCTION",
    content:
      "Complete audio production services including mixing, mastering, and post-production.",
    videoUrl: "/placeholder.svg?height=480&width=640",
  },
  {
    id: "dubbing-vocals",
    title: "DUBBING/VOCALS",
    content:
      "Professional dubbing and vocal recording services for all your audio needs.",
    videoUrl: "/placeholder.svg?height=480&width=640",
  },
  {
    id: "video-production",
    title: "VIDEO PRODUCTION",
    content:
      "Full-service video production including filming, editing, and post-production.",
    videoUrl: "/placeholder.svg?height=480&width=640",
  },
  {
    id: "classes",
    title: "CLASSES",
    content: "Music and audio production classes for all skill levels.",
    videoUrl: "/placeholder.svg?height=480&width=640",
  },
];

const AccordianAndVideos = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<string>("");
  const [selectedContent, setSelectedContent] = React.useState<string | null>(
    null
  );
  const accordionRef = React.useRef<HTMLDivElement>(null);
  const [accordionHeight, setAccordionHeight] = React.useState<number>(0);
  const [isAnyAccordionOpen, setIsAnyAccordionOpen] =
    React.useState<boolean>(false);

  // Update the height whenever the accordion changes
  React.useEffect(() => {
    if (accordionRef.current) {
      setAccordionHeight(accordionRef.current.offsetHeight);
    }

    // Set up a resize observer to track height changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setAccordionHeight(entry.contentRect.height);
      }
    });

    if (accordionRef.current) {
      resizeObserver.observe(accordionRef.current);
    }

    return () => {
      if (accordionRef.current) {
        resizeObserver.disconnect();
      }
    };
  }, [selectedContent]);

  const handleAccordionChange = (value: string) => {
    // If value is empty string, all accordions are closed
    setIsAnyAccordionOpen(value !== "");

    const selected = contentData.find((item) => item.id === value);
    if (selected) {
      setSelectedVideo(selected.videoUrl);
      setSelectedContent(value === selectedContent ? null : value);
    } else {
      setSelectedVideo("");
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left side - Accordion */}
          <div className="space-y-4 col-span-1" ref={accordionRef}>
            <Accordion
              type="single"
              collapsible
              onValueChange={handleAccordionChange}
              className="w-full"
            >
              {contentData.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-muted"
                >
                  <AccordionTrigger className="text-3xl font-bold text-[#FF5722] hover:text-[#FF5722]/90">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-xl text-muted-foreground">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - Video Player */}
          <div className="relative col-span-2">
            <div
              className="bg-muted rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                height:
                  isAnyAccordionOpen && accordionHeight > 0
                    ? `${accordionHeight}px`
                    : "400px", // Default height when closed
                minHeight: "300px", // Fallback minimum height
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={"/img/vid-main.png"}
                  alt="Video content"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordianAndVideos;
