"use client";
import Popup from "./popup";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroText() {
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".homepage-header", {
        scrollTrigger: {
          trigger: ".homepage-header",
          scrub: 1,
          start: "top 120px",
        },
        y: -100,
        opacity: 0.5,
      });
    },
    { scope: container }
  );
  return (
    <div
      className="absolute w-full mt-32 lg:mt-56 px-3 md:px-7 overflow-hidden"
      ref={container}
    >
      <div className="flex flex-col w-full h-full px-5 items-center justify-center homepage-header">
        <div className="w-full max-w-80 md:max-w-[700px] flex flex-col items-center justify-center lg:items-start lg:max-w-[1100px] 2xl:max-w-[1300px]">
          <p className="font-semibold text-off-dark w-64 text-center lg:text-start text-sm md:text-xl lg:text-lg 2xl:text-xl text-balance">
            Premiere Destination for Designer Rhinoplasty
          </p>
          <h1 className="text-[3.70rem] md:text-[7.50rem] lg:text-[6.5rem] xl:text-[7.2rem] 2xl:text-[9rem] w-full flex flex-col -space-y-4 md:-space-y-7 lg:-space-y-5 pt-5 font-general-sans-medium leading-none lg:mt-5">
            <span className="w-full flex flex-col -space-y-4 md:-space-y-7 lg:-space-y-5 lg:max-w-[550px] xl:max-w-[620px] 2xl:max-w-[800px]">
              <span className="self-end lg:self-end">The brand</span>
              <span className="self-start">behind</span>
            </span>
            <span className="w-full flex flex-col lg:flex-row -space-y-4 md:-space-y-7 lg:space-x-4 lg:self-end lg:justify-end">
              <span className="self-end font-bold-italic text-7xl md:text-[9rem] lg:text-[8.3rem] 2xl:text-[9.5rem] leading-none">
                beautiful
              </span>
              <span className="self-start lg:self-end">noses</span>
            </span>
          </h1>
          <p className="self-end lg:self-start w-36 md:w-56 xl:py-5 xl:w-[330px] text-off-dark font-semibold text-sm md:text-xl lg:text-lg 2xl:text-xl lg:-mt-14 xl:-mt-16">
            Entrust your face to a rhinoplasty specialist in Montrea
          </p>
          <Popup className="md:hidden self-end mt-20" />
        </div>
      </div>
    </div>
  );
}
