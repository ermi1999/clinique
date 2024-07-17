"use client";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactUs from "@/components/contactUs";

export default function OutOfTown() {
  const container = useRef<HTMLDivElement | null>(null);
  let toggle = 0;
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      for (let i = 1; i < 7; i++) {
        gsap.to(`.pic-${i}`, {
          scrollTrigger: {
            trigger: `.pic-${i}`,
            scrub: 1,
          },
          y: toggle ? -30 : 30,
        });
        toggle ? (toggle = 0) : (toggle = 1);
      }
      gsap.to(".out-of-town-header", {
        scrollTrigger: {
          trigger: ".out-of-town-header",
          scrub: 1,
          start: "top 120px",
        },
        y: -40,
        opacity: 0.3,
      });
    },
    { scope: container }
  );
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-fadeinup");
            target.classList.add("opacity-100"); // Add class when intersecting
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.getElementsByClassName("fade-in-up");
    for (let i = 0; i < elements.length; i++) {
      observer.observe(elements[i] as Element);
    }

    // Cleanup observer on component unmount
    return () => {
      for (let i = 0; i < elements.length; i++) {
        observer.unobserve(elements[i] as Element);
      }
    };
  }, []);
  return (
    <main
      className="flex flex-col py-32 overflow-hidden items-center space-y-32"
      ref={container}
    >
      <div className="flex flex-col space-y-10 xl:-space-y-10 out-of-town-header px-5 w-full max-w-[450px] sm:max-w-[570px] lg:max-w-[900px] xl:max-w-[1100px]">
        <h1
          className="flex flex-col text-[2.7rem] sm:text-7xl lg:text-8xl xl:text-9xl font-general-sans-medium
          -space-y-3 sm:-space-y-5 leading-none w-full text-nowrap out-of-town-header"
        >
          <span className="self-start animate-fadeinleft">
            Not in montreal?
          </span>
          <span className="self-end font-bold-italic text-6xl sm:text-8xl lg:text-9xl animate-fadeinright">
            We&apos;ve got you
          </span>
        </h1>
        <p className="text-pretty text-start text-off-dark font-medium leading-none flex flex-col space-y-3 w-[300px] sm:w-[400px] lg:w-[300px] out-of-town-header">
          <span className="animate-fadeinleft">
            We are pleased to offer virtual consultations for patients located
            outside of The Greater Montreal Area, including our specialized
            online rhinoplasty consultation with Dr. Chacra. Whether you&apos;re
            just starting to consider changes to the appearance of your nose or
            you&apos;ve been thinking about it for a while, we&apos;ve got you
            covered.
          </span>
        </p>
      </div>
      <section className="flex flex-col lg:flex-row h-full w-full md:w-[85%] lg:w-full px-1 md:px-7 my-14 md:my-20">
        <img
          alt="beautiful women"
          className="rounded-3xl sm:rounded-4xl md:rounded-5xl w-full lg:w-[450px] xl:w-[500px] h-[400px] md:h-[600px] lg:h-auto object-cover object-top"
          src="/resources/Page_5_-_Comment_3.jpg"
        />
        <div className="items-center justify-center bg-white rounded-3xl sm:rounded-4xl md:rounded-5xl flex flex-col w-full pt-4 pb-20 xl:pb-0">
          <h1 className="flex flex-col font-general-sans-medium leading-none text-5xl sm:text-7xl w-full max-w-[320px] sm:max-w-[500px] xl:max-w-full -space-y-3 my-10">
            <span className="self-center fade-in-left opacity-0">
              Meet your
            </span>
            <span className="flex flex-col xl:flex-row xl:self-center xl:space-x-3 -space-y-3">
              <span className="self-start fade-in-left opacity-0">
                Surgeon,
              </span>
              <span className="text-7xl sm:text-8xl font-bold-italic self-end fade-in-right opacity-0">
                virtually
              </span>
            </span>
          </h1>
          <div className="w-full flex flex-col xl:flex-row xl:space-x-10 space-y-5 xl:space-y-0 justify-center items-center xl:items-start">
            <p className="font-semibold w-80 xl:w-48 text-base md:text-xl leading-none text-center xl:text-start">
              Connect with us to find out how to book your virtual consultation
              with Dr. Chacra
            </p>
            <div className="flex flex-col space-y-3 justify-center items-center w-80">
              <Input type="text" placeholder="Full Name" className="h-14" />
              <Input placeholder="Phone Number" className="h-14" />
              <Input type="email" placeholder="Email" className="h-14" />
              <p className="font-semibold leading-5">
                How long have you been thinking about making changes to the
                appearance of your nose?
              </p>
              <div className="flex flex-row w-full space-x-5 items-center cursor-pointer">
                <Input type="checkbox" id="checkbox" className="h-4 w-4" />
                <label htmlFor="checkbox">
                  I agree to the processing of personal data
                </label>
              </div>
              <div className="w-full flex justify-center items-center lg:justify-start">
                <Button type="submit" className="rounded-full">
                  Book a consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full px-3 space-y-32">
        <div className="flex flex-col w-full space-y-5">
          <h1 className="self-center flex flex-col text-[2.7rem] sm:text-6xl lg:text-8xl font-general-sans-medium w-full max-w-[340px] sm:max-w-[550px] lg:max-w-[800px] text-nowrap leading-none -space-y-3 sm:-space-y-5">
            <span className="self-center flex flex-row space-x-3">
              <span className="text-6xl sm:text-8xl lg:text-9xl font-bold-italic fade-in-left opacity-0">
                Discover
              </span>{" "}
              <span className="hidden sm:flex self-center fade-in-right opacity-0">
                The City
              </span>
            </span>
            <span className="flex flex-row space-x-3 sm:self-end lg:self-center fade-in-left opacity-0">
              <span className="sm:hidden">The City</span> <span>We love</span>
            </span>
          </h1>
          <div className="flex flex-wrap w-full self-center justify-center -z-10">
            <div className="relative w-[158px] h-[220px] lg:w-[187px] lg:h-[240px] m-1 pic-1">
              <Image
                alt="montreal city picture"
                src="/resources/Page_5_-_Comment_6.webp"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative w-[158px] h-[220px] lg:w-[187px] lg:h-[240px] m-1 pic-2">
              <Image
                alt="montreal city picture"
                src="/resources/Page_5_-_Comment_6_1.webp"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative w-[158px] h-[220px] lg:w-[187px] lg:h-[240px] m-1 pic-3">
              <Image
                alt="montreal city picture"
                src="/resources/Page_5_-_Comment_6_5.webp"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative w-[158px] h-[220px] lg:w-[187px] lg:h-[240px] m-1 pic-4">
              <Image
                alt="montreal city picture"
                src="/resources/Page_5_-_Comment_6_3.jpg"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative w-[158px] h-[220px] lg:w-[187px] lg:h-[240px] m-1 pic-5">
              <Image
                alt="montreal city picture"
                src="/resources/Page_5_-_Comment_6_2.webp"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative w-[158px] h-[220px] lg:w-[187px] lg:h-[240px] m-1 pic-6">
              <Image
                alt="montreal city picture"
                src="/resources/Page_5_-_Comment_6_4.webp"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[750px] self-center px-5"
        >
          <AccordionItem value="item-1" className="fade-in-up">
            <AccordionTrigger>
              Our neighborhood of Outremont at a glance
            </AccordionTrigger>
            <AccordionContent className="text-muted text-lg">
              Outremont is mostly a residential neighborhood, giving it a cozy,
              family-filled feeling. Its major commercial streets are Laurier
              Avenue, Bernard Avenue, and Van Horne Avenue. The borough is home
              to a number of trendy restaurants, cafés, and shops. <br />
              <br />
              Notably: <br />
              <br /> Caffe Dante <br /> Patisserie Lescurier <br /> Leméac{" "}
              <br /> Damas <br /> Boxermans <br />
              Estiatorio <br /> Milos <br /> St-Viateur Bagel <br />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="fade-in-up">
            <AccordionTrigger>Montreal at a glance</AccordionTrigger>
            <AccordionContent className="text-muted text-lg">
              Home to nearly 4.5 million people, Montreal is widely recognized
              for its art, culture, literature, film, and television, music,
              commerce, aerospace, transport, finance, pharmaceuticals,
              technology, design, education, tourism, food, fashion, video game
              development and world affairs. <br /> <br /> The city hosts the
              Canadian Grand Prix of Formula One, as well as the Montreal
              International Jazz Festival, the largest jazz festival in the
              world.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="fade-in-up">
            <AccordionTrigger>Out go-to spots</AccordionTrigger>
            <AccordionContent className="text-muted text-lg">
              Time Out Market <br /> Old Montreal <br /> The Montreal Museum of
              Fine <br /> Arts Atwater Market <br /> Crew Café <br /> The McCord
              Museum <br /> The Musée d’art Contemporain de Montréal
              (Contemporary Art Museum) <br /> Antique and Rare book stores
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="fade-in-up">
            <AccordionTrigger>
              Reserve a table at one of the city&apos;s beloved restaurants
            </AccordionTrigger>
            <AccordionContent className="text-muted text-lg">
              L&apos;express <br /> Beauty’s <br /> Maison Boulud (Ritz Carlton){" "}
              <br /> Moccione <br /> Tuck Shop <br /> Estiatorio Milos
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="fade-in-up">
            <AccordionTrigger>
              Book your online rhinoplasty consultation today
            </AccordionTrigger>
            <AccordionContent className="text-muted text-lg font-semibold">
              Send us a message through the portal and we will get back to you
              within 1 business day about your face, your dreams, and how we can
              help. How long have you been thinking about making changes to the
              appearance of your nose? Less than 1 month, 1 - 3 months, 3 - 6
              months, 6 months to 1 year, 1 year +.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <ContactUs
        imageUrl="/resources/Page_5_-_Comment_4.jpg"
        message="Send us a message through the portal and we will get back to you within 1 business day"
      />
    </main>
  );
}
