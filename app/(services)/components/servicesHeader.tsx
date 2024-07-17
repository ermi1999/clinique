"use client";
import { SmallHeadingContainer } from "@/components/textContainers";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface ServicesHeaderInterface {
  className?: string;
  smallHeading: string;
  italicHeader: string;
  header: string;
  smallText: string;
}
export default function ServicesHeader({
  className,
  smallHeading,
  italicHeader,
  header,
  smallText,
}: ServicesHeaderInterface) {
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".services-header", {
        scrollTrigger: {
          trigger: ".services-header",
          scrub: 1,
          start: "top 150px",
        },
        y: -40,
        opacity: 0.3,
      });
    },
    { scope: container }
  );
  return (
    <div
      className={cn(
        "flex flex-col items-center space-y-5 leading-none w-[content] md:w-[650px] lg:w-[1000px]",
        className
      )}
      ref={container}
    >
      <SmallHeadingContainer className="mt-0 py-0 md:py-0 animate-fadeindown">
        {smallHeading}
      </SmallHeadingContainer>
      <h1 className="flex flex-col font-general-sans-medium text-2xl sm:text-4xl md:text-5xl lg:text-7xl w-full services-header">
        <span className="font-bold-italic self-center md:self-start text-[2.7rem] sm:text-6xl md:text-7xl lg:text-[7.8rem] text-nowrap animate-fadeinleft">
          {italicHeader}
        </span>
        <span className="self-center md:self-end animate-fadeinright">
          {header}
        </span>
      </h1>
      <p className="w-[150px] font-medium self-center lg:self-start services-header animate-fadeinleft">
        {smallText}
      </p>
    </div>
  );
}
