"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function WhatWeDo() {
  const container = useRef<HTMLDivElement | null>(null);
  const scrubDelays = [1, 2, 3, 4, 5];
  const directions = [100, -100];
  gsap.registerPlugin(ScrollTrigger);

  let images = [];
  for (let i = 1; i < 12; i++) {
    images[i] = `/resources/image${i}.jpg`;
  }
  useGSAP(
    () => {
      for (let i = 1; i < 12; i++) {
        if (getRandomArbitrary(0, 3)) {
          gsap.to(`.image${i}`, {
            scrollTrigger: {
              trigger: `.image${i}`,
              // toggleActions: "play pause reverse pause",
              scrub: scrubDelays[getRandomArbitrary(0, 5)],
            },
            y: directions[getRandomArbitrary(0, 2)],
          });
        }
      }
      console.log("run once");
    },
    { scope: container }
  );
  return (
    <section className="w-[95vw] bg-white rounded-4xl flex flex-col items-center space-y-12 z-40 h-[400vh]">
      <h1 className="font-general-sans text-3xl text-black mt-6">
        What we do?
      </h1>
      <p className="text-7xl">Rhinoplasty as a Specialty</p>
      <div
        className="flex flex-row space-x-5 h-[70vh] items-center"
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
    </section>
  );
}
