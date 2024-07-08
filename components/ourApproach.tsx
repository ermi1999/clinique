"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  LargeItalicText,
  LargeTextContainer,
  SmallHeadingContainer,
} from "./textContainers";
import { useRef } from "react";

export default function OurApproach() {
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".surgent-image", {
        scrollTrigger: {
          trigger: ".surgent-image",
          scrub: 1,
        },
        y: 80,
      });
    },
    { scope: container }
  );
  return (
    <section className="w-full mb-20">
      <div className="flex flex-col space-y-3 items-center justify-center w-full px-10">
        <SmallHeadingContainer>OUR APPROACH</SmallHeadingContainer>
        <img
          src="/resources/Screenshot_2023-10-2.webp"
          alt="Dr cahcra doing a surgery"
          className="rounded-2xl w-[315px] h-full md:w-[600px] lg:w-[262px] lg:h-[262px] object-cover object-center lg:absolute lg:right-10"
        />
        <LargeTextContainer className="sm:max-w-[400px] sm:text-[4rem] md:text-[4.7rem] md:max-w-[600px] lg:max-w-[600px] lg:text-[5.5rem] lg:self-start xl:text-[6.5rem] xl:max-w-[800px]">
          <span>Rhinoplasty</span>
          <span className="self-end">
            as a{" "}
            <LargeItalicText className="md:text-[5.2rem] lg:text-[6rem] xl:text-[7rem]">
              Passion
            </LargeItalicText>
          </span>
        </LargeTextContainer>
        <div className="flex flex-col w-full" ref={container}>
          <img
            src="/resources/8b6c8696-4ca1-47bb-a.webp"
            alt="a surgent"
            className="hidden lg:flex self-start h-[150px] w-[150px] object-cover object-center rounded-3xl surgent-image"
          />
          <p className="w-full self-center text-center font-medium py-10 lg:pt-0 sm:text-end sm:max-w-[400px] md:max-w-[600px] sm:text-lg sm:font-general-sans-semibold lg:text-center">
            OVER A DECADE OF EXPERIENCE
          </p>
          <Link href="/" className="self-end">
            <img src="/resources/Vector.svg" alt="Learn more" />
          </Link>
        </div>
      </div>
    </section>
  );
}
