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
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);
  const directions1 = [1, 3, 5, 7, 9];
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
            y: directions1.includes(i) ? -80 : -150,
          });
        }
      }
      console.log("run once");
    },
    { scope: container }
  );
  return (
    <section className="w-[95vw] bg-white rounded-4xl flex flex-col items-center space-y-12 z-40 h-[400vh]">
      <h1 className="font-general-sans text-5xl text-black mt-6">
        What we do?
      </h1>
      <p className="text-7xl">Rhinoplasty as a Specialty</p>
      <div
        className="flex flex-row space-x-5 items-center pt-40"
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
