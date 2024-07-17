"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "./ui/button";
import { SmallHeadingContainer } from "./textContainers";
import Link from "next/link";

export default function WhatWeDo() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);
  const directions = [1, 3, 5, 7, 9];
  const elementsToJump = [2, 6, 10, 11];

  let images = [];
  for (let i = 1; i < 12; i++) {
    images[i] = `/resources/image${i}.jpg`;
  }
  useGSAP(
    () => {
      for (let i = 1; i < 12; i++) {
        if (!elementsToJump.includes(i)) {
          gsap.to(`.image${i}`, {
            scrollTrigger: {
              trigger: `.image${i}`,
              scrub: 1,
            },
            y: directions.includes(i) ? -80 : -150,
          });
        }
      }
    },
    { scope: container }
  );
  return (
    <section className="flex flex-col items-center lg:mt-40 xl:mt-20">
      <div className="bg-white flex flex-col items-center space-y-5 z-40 w-[100vw] md:w-[95vw] what-we-do-section pb-40 md:pb-52">
        <SmallHeadingContainer className="fade-in-up opacity-0">
          What we do?
        </SmallHeadingContainer>
        <p className="flex flex-col font-general-sans-medium text-nowrap leading-none -space-y-3 sm:-space-y-5 text-5xl sm:text-7xl lg:text-8xl w-full px-5 max-w-[450px] sm:max-w-[600px] lg:max-w-[900px]">
          <span className="text-left fade-in-left opacity-0">Rhinoplasty</span>
          <span className="text-right fade-in-right opacity-0">
            as a{" "}
            <span className="font-bold-italic text-6xl sm:text-8xl lg:text-9xl fade-in-right opacity-0">
              Speciality
            </span>
          </span>
        </p>
        <div
          className="flex flex-row space-x-1 md:space-x-5 items-center pt-40 md:pt-52 overflow-hidden"
          ref={container}
        >
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              height={100}
              width={90}
              alt="statue"
              className={`rounded-xl image${i}`}
            />
          ))}
        </div>
      </div>
      <div className="w-[100vw] bg-fade-in flex justify-center">
        <div className="bg-white w-[100vw] md:w-[95vw] pb-20 rounded-b-4xl text-2xl sm:text-4xl lg:text-6xl xl:text-[3.5rem] flex flex-col px-5 md:px-10 md:-space-y-5">
          <div className="relative self-end w-24 h-24 md:h-32 md:w-32">
            <Image
              src="/resources/8d29c8ba-1eee-4b9f-8.png"
              alt="a doctor doing surgery"
              className="object-cover rounded-2xl"
              fill
            />
          </div>
          <div className="flex flex-col font-general-sans-medium w-full space-y-5">
            <p className="flex flex-col max-w-[500px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] text-nowrap self-center w-full">
              <span className="self-start fade-in-left opacity-0">
                Choose a rhinoplasty surgeon
              </span>

              <span className="self-end font-bold-italic -my-3 text-3xl sm:text-5xl lg:text-7xl xl:text-[4rem] fade-in-right opacity-0">
                with the highest level
              </span>
              <span className="self-center fade-in-right opacity-0">
                of training, experience and skill.
              </span>
            </p>
            <a href="/drchacra" className="w-[90%] flex items-end justify-end">
              <Button className="text-sm md:text-base font-light w-52 md:w-60 rounded-3xl">
                Meet Dr.Zahi Abou Chacra
              </Button>
            </a>
          </div>
          <div className="relative self-start pl-5 h-40 w-40 md:h-52 md:w-52">
            <Image
              src="/resources/IMG_8523.jpg"
              alt="a doctor doing surgery"
              className="object-cover rounded-2xl"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
