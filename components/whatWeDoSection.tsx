"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "./button";

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
    <section className="flex flex-col items-center">
      <div className="bg-white flex flex-col items-center space-y-5 z-40 w-[100vw] md:w-[95vw] what-we-do-section pb-40 md:pb-52">
        <h1 className="text-2xl xs:text-3xl mt-6 font-medium">What we do?</h1>
        <p className="hidden md:flex sm:text-4xl md:text-7xl font-medium">
          Rhinoplasty as a{" "}
          <span className="font-bold-italic ml-4">Specialty</span>
        </p>
        <p className="flex flex-col text-5xl xs:text-5xl md:hidden w-full px-5 font-medium">
          <span className="text-left">Rhinoplasty</span>
          <span className="text-right">
            as a <span className="font-bold-italic">Speciality</span>
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
        <div className="bg-white w-[100vw] md:w-[95vw] pb-20 rounded-b-4xl text-4xl md:text-5xl flex flex-col md:flex-row px-5 md:px-10">
          <img
            src="/resources/8d29c8ba-1eee-4b9f-8.png"
            alt="a doctor doing surgery"
            className="object-contain self-end w-24 h-24 md:h-32 md:w-32"
          />
          <div className="flex flex-col font-medium w-full space-y-5">
            <p className="flex flex-col max-w-[900px] self-center w-full">
              <span className="text-start">Choose a rhinoplasty surgeon</span>

              <span className="text-end font-bold-italic">
                with the highest level
              </span>
              <span className="text-center">
                of training, experience and skill.
              </span>
            </p>
            <div className="w-[90%] flex items-end justify-end">
              <Button className="text-sm md:text-base font-light w-52 md:w-60">
                Meet Dr.Zahi Abou Chacra
              </Button>
            </div>
          </div>
          <img
            src="/resources/IMG_8523.jpg"
            alt="a doctor doing surgery"
            className="object-contain self-start pl-5 h-40 w-40 md:h-52 md:w-52"
          />
        </div>
      </div>
    </section>
  );
}
