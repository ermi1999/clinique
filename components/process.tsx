"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SmallHeadingContainer } from "./textContainers";
import { DesktopCards, MobileAndTabletCards } from "./processCards";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorkProcess() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".card_container", {
        scrollTrigger: {
          trigger: ".card_container",
          scrub: 1,
        },
        y: 30,
      });
    },
    { scope: container }
  );
  return (
    <section className="w-full">
      <div className="absolute z-30 w-full px-2">
        <div className="w-full bg-white rounded-3xl flex flex-col xl:flex-row xl:justify-between font-general-sans-medium items-center justify-center space-y-10 p-10">
          <p className="hidden xl:flex flex-col w-full text-5xl xl:max-w-[800px] leading-none">
            <span className="self-center">As great work is often</span>
            <span className="self-end">
              the culmination{" "}
              <span className="font-bold-italic text-[2rem] sm:text-[3.75rem] leading-none">
                of
              </span>{" "}
              both{" "}
            </span>
            <span className="self-start">applied skill and wonder,</span>{" "}
            <span className="self-center">
              so is{" "}
              <span className="font-bold-italic text-[2rem] sm:text-[3.75rem] leading-none">
                The Art
              </span>{" "}
              of Rhinoplasty
            </span>
          </p>
          <p className="xl:hidden text-center text-balance text-3xl sm:text-5xl max-w-[300px] sm:max-w-[550px]">
            As great work is often the culmination{" "}
            <span className="font-bold-italic text-[2rem] sm:text-[4rem] leading-none">
              of
            </span>{" "}
            both applied skill and wonder, so is{" "}
            <span className="font-bold-italic text-[2rem] sm:text-[3.75rem] leading-none">
              The Art
            </span>{" "}
            of Rhinoplasty
          </p>
          <img
            src="/resources/cb05547e-6381-4fac-b.webp"
            alt="beautiful women"
            className="w-[250px] h-[300px] xl:w-[300px] xl:h-[350px] object-cover object-center rounded-3xl"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full mt-96 md:mt-[30rem] xl:mt-[15rem] bg-black text-white lg:bg-[url(/resources/Frame_198_2.webp)] bg-cover px-5 min-h-[1000px]">
        <div
          ref={container}
          className={cn(
            "flex flex-col pt-60 lg:pt-60 space-y-10 pb-20 items-center justify-center max-w-[1200px]",
            isDesktop ? "card_container" : "some"
          )}
        >
          <SmallHeadingContainer>TAILORED RESULTS</SmallHeadingContainer>
          <h1 className="flex flex-col w-full max-w-[320px] sm:max-w-[600px] md:w-[450px] lg:w-[600px] text-[2.50rem] sm:text-[4.7rem] md:text-7xl lg:text-8xl text-nowrap lg:self-end leading-none font-general-sans-medium -space-y-2 sm:-space-y-4">
            <span>Rhinoplasty</span>{" "}
            <span className="self-end">
              at-a-
              <span className="font-bold-italic text-[2.80rem] sm:text-[5.2rem] md:text-[5rem] lg:text-[6.5rem]">
                glance
              </span>
            </span>
          </h1>
          {isDesktop ? <DesktopCards /> : <MobileAndTabletCards />}
        </div>
      </div>
    </section>
  );
}
