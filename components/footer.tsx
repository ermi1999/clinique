"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Footer() {
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".logo", {
      scrollTrigger: {
        trigger: ".logo",
        scrub: 1,
      },
      rotation: 360,
      duration: 10,
      ease: "none",
    });
  });
  return (
    <section className="flex items-center justify-center">
      <div
        ref={container}
        className="flex flex-col w-full items-center justify-center px-5 lg:px-10"
      >
        <div className="lg:self-end flex flex-row justify-between lg:w-[50%]">
          <Link href="/" className="self-center">
            <img
              alt="logo image"
              src="/resources/logo.png"
              className="h-24 w-24 md:w-32 md:h-32 lg:w-40 lg:h-40 my-10 logo"
            />
          </Link>
          <div className="hidden lg:flex flex-row space-x-5 mt-7">
            <div className="flex flex-col space-y-2">
              <h1 className="text-muted mb-2">Our Services</h1>
              <Link
                href="/primary-rhinoplasty"
                className="hover:text-muted-foreground"
              >
                Primary Rhinoplasty
              </Link>
              <Link
                href="/revision-rhinoplasty"
                className="hover:text-muted-foreground"
              >
                Revision Rhinoplasty
              </Link>
              <Link
                href="/ethnic-rhinoplasty"
                className="hover:text-muted-foreground"
              >
                Ethnic Rhinoplasty
              </Link>
              <Link
                href="/liquid-rhinoplasty"
                className="hover:text-muted-foreground"
              >
                Liquid Rhinoplasty
              </Link>
              <Link
                href="/functional-rhinoplasty"
                className="hover:text-muted-foreground"
              >
                Functional Rhinoplasty
              </Link>
              <Link
                href="/adjunct-procedures"
                className="hover:text-muted-foreground"
              >
                Adjunct Procedures
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-muted mb-2">Navigation</h1>
              <Link href="/drchacra" className="hover:text-muted-foreground">
                Dr. Zahi Abou Chacra
              </Link>
              <Link href="/services" className="hover:text-muted-foreground">
                Rhinoplasty Solutions
              </Link>
              <Link
                href="/learning-center"
                className="hover:text-muted-foreground"
              >
                Learning Center
              </Link>
              <Link href="/out-of-town" className="hover:text-muted-foreground">
                Out Of Town
              </Link>
              <Link href="/contacts" className="hover:text-muted-foreground">
                Contact Us
              </Link>
              <Link href="/blog" className="hover:text-muted-foreground">
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center -space-y-2 md:-space-y-5 lg:-space-y-10 text-3xl sm:text-4xl mt-5 sm:w-[400px] md:w-full md:text-7xl lg:text-8xl xl:text-9xl">
          <Link
            href="tel:5146134977"
            className="font-general-sans sm:self-start md:self-end lg:self-start hover:text-muted-foreground"
          >
            514 613 4977
          </Link>
          <Link
            href="mailto:info@clinique7.com"
            className="font-semibold-italic text-4xl sm:text-5xl md:text-8xl lg:text-[7rem] xl:text-[9rem] sm:self-end md:self-start lg:self-end hover:text-muted-foreground"
          >
            info@clinique7.com
          </Link>
        </div>
        <div className="flex flex-col sm:flex-col-reverse md:flex-row md:w-full space-y-5 sm:space-y-0 md:space-y-5 items-center justify-center md:justify-between sm:self-start mb-5 mt-5 sm:mt-0">
          <p className="text-center sm:text-start text-pretty w-[270px] font-medium leading-none">
            1310 Ave. Thérèse-Lavoie-Roux Montreal, QC. H2V 0B2
          </p>
          <Link
            href="https://www.instagram.com/clinique7___/"
            className="sm:pb-4 sm:self-start md:self-end"
          >
            <Image
              alt="instagram"
              src="/resources/instagram-new-2016-g.png"
              width={22}
              height={22}
            />
          </Link>
        </div>
        <div className="flex flex-col sm:space-y-0 sm:flex-row sm:w-full sm:justify-between sm:border-t items-center justify-center border-[#c7c7c7] sm:h-16 md:h-20">
          <span>All rights reserved</span>
          <span className="mb-5 sm:mb-0">Privacy Policy</span>
          <p>Created by Ermiyas</p>
        </div>
      </div>
    </section>
  );
}
