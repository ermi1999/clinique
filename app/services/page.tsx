"use client";
import { SmallHeadingContainer } from "@/components/textContainers";
import Service from "./components/services";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".services-header", {
        scrollTrigger: {
          trigger: ".services-header",
          scrub: 1,
          start: "top 220px",
        },
        y: -40,
        opacity: 0.3,
      });
    },
    { scope: container }
  );
  return (
    <main className="flex flex-col py-32 px-5 space-y-20 w-full justify-center items-center">
      <div
        className="flex flex-col items-center space-y-5 leading-none w-[300px] sm:w-[450px] md:w-[700px] lg:w-[800px]"
        ref={container}
      >
        <SmallHeadingContainer>Our services</SmallHeadingContainer>
        <h1 className="flex flex-col font-general-sans-medium text-2xl sm:text-4xl md:text-5xl w-full services-header">
          <span className="font-bold-italic text-6xl sm:text-8xl lg:text-9xl">
            Rhinoplasty{" "}
          </span>
          <span className="self-end">by Dr. Zahi Abou Chacra</span>
        </h1>
        <p className="w-[200px] font-medium self-start services-header">
          Boutique experience. Breathtaking results.
        </p>
      </div>
      <div className="flex flex-col space-y-5 w-full">
        <div className="w-full flex justify-center">
          <Service
            ImageUrl="/resources/service1-image.png"
            service="Primary Rhinoplasty"
            url="/primary-rhinoplasty"
          >
            <p>
              A surgical procedure that changes the shape of the nose to achieve
              more balance and symmetry of the facial features.
            </p>
            <p>
              Softening the appearance of, or creating a more structured nose
              are some of the reasons why patients choose Clinique 7 as their
              premiere destination for Cosmetic Rhinoplasty.
            </p>
          </Service>
        </div>
        <div className="w-full flex justify-center">
          <Service
            ImageUrl="/resources/service2-image.png"
            service="Revision Rhinoplasty"
            url="/revision-rhinoplasty"
          >
            <p>
              Revision Rhinoplasty requires operating on a nose that has
              previously been altered surgically. This procedure corrects
              undesirable or subpar aesthetic and functional results from a
              Primary Rhinoplasty.
            </p>
            <p>
              Dr Chacra specializes in Revision Rhinoplasty and is highly
              experienced in this aspect of facial surgery.
            </p>
          </Service>
        </div>
        <div className="w-full flex justify-center">
          <Service
            ImageUrl="/resources/service3-image.jpg"
            service="Ethnic Rhinoplasty"
            url="/ethnic-rhinoplasty"
          >
            <p>
              Like all Rhinoplasty, the main goal of this procedure is to
              enhance a patient’s natural nose shape.
            </p>
            <p>
              Preserving the ethnic qualities of patients’ facial features and
              characteristics is crucial to the outcome of this procedure.
            </p>
          </Service>
        </div>
        <div className="w-full flex justify-center">
          <Service
            ImageUrl="/resources/service4-image.jpg"
            service="Liquid Rhinoplasty"
            url="/liquid-rhinoplasty"
          >
            <p>
              Dermal Fillers are used to sculpt a more aesthetic nose that
              perfectly suits the face. Liquid Rhinoplasty may be combined with
              other cosmetic treatments to achieve the overall look that
              patients desire.
            </p>
          </Service>
        </div>
        <div className="w-full flex justify-center">
          <Service
            ImageUrl="/resources/service5-image.png"
            service="Function Rhinoplasty"
            url="/function-rhinoplasty"
          >
            <p>
              The goal of this surgery is to alleviate nasal obstruction. While
              changes in the appearance of the nose is not the objective of this
              procedure, Functional Rhinoplasty can be combined with a Cosmetic
              Rhinoplasty, as often is the case.
            </p>
          </Service>
        </div>
        <div className="w-full flex justify-center">
          <Service
            ImageUrl="/resources/service6-image.png"
            service="Adjunct Rhinoplasty"
            url="/adjunct-rhinoplasty"
          >
            <p>
              These procedures are performed in conjunction with Cosmetic
              Rhinoplasty. They create even further harmony within the face.
            </p>
          </Service>
        </div>
      </div>
    </main>
  );
}
