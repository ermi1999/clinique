"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function DesktopCards() {
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".card", {
        scrollTrigger: {
          trigger: ".card",
          scrub: 1,
        },
        y: -70,
      });
    },
    { scope: container }
  );
  return (
    <div className="flex flex-wrap space-x-10" ref={container}>
      <div className="flex flex-col justify-between backdrop-blur-2xl w-[208px] h-[283px] rounded-3xl space-y-5 p-5 font-medium -mt-14 bg-black/5 card">
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          I
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            One-on-one Consultation with Dr. Chacra
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            Our Consultation Process is unhurried, private, and thorough.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between backdrop-blur-2xl w-[208px] h-[283px] rounded-3xl space-y-5 p-5 font-medium -mt-24 bg-black/5">
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          II
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Preview results
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We use computer imaging and Morphing Technology to help you
            visualize your possible outcomes.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between backdrop-blur-2xl w-[208px] h-[283px] rounded-3xl space-y-5 p-5 font-medium mt-20 bg-black/5 card">
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          III
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Surgical plan
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We believe that informed patients are empowered patients.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between backdrop-blur-2xl w-[208px] h-[283px] rounded-3xl space-y-5 p-5 font-medium mt-10 bg-black/5 card1">
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          IV
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Pre-op
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We will guide you through the process and answer questions.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between backdrop-blur-2xl w-[208px] h-[283px] rounded-3xl space-y-5 p-5 font-medium bg-black/5">
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          V
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Day of surgery
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We will provide you with exemplary surgical results and the highest
            level of care.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between backdrop-blur-2xl w-[208px] h-[283px] rounded-3xl space-y-5 p-5 font-medium -mt-20 bg-black/5">
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          VI
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Post-op
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We will accompany you through your healing process, ensuring you can
            relax following your Rhinoplasty.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between backdrop-blur-2xl w-[208px] h-[283px] rounded-3xl space-y-5 p-5 font-medium mt-14 bg-black/5">
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          VII
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Follow up
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We will see you about 7 days after your surgery to remove your
            bandages.
          </p>
        </div>
      </div>
    </div>
  );
}

export function MobileAndTabletCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 space-y-5 sm:space-y-0 sm:w-[450px]">
      <div
        className="flex flex-col justify-between bg-[url(/resources/blur_m1.webp)] sm:bg-[url(/resources/blur_t1.webp)]
            bg-cover bg-center w-full sm:w-[208px] sm:h-[283px] rounded-3xl space-y-5 p-8 sm:p-5 font-medium"
      >
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          I
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            One-on-one Consultation with Dr. Chacra
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            Our Consultation Process is unhurried, private, and thorough.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-between bg-[url(/resources/blur_m2.webp)] sm:bg-[url(/resources/blur_t2.webp)]
            bg-cover bg-center w-full sm:w-[208px] sm:h-[283px] rounded-3xl space-y-5 sm:space-y-16 p-8 sm:p-5 font-medium sm:mt-0"
      >
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          II
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Preview results
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We use computer imaging and Morphing Technology to help you
            visualize your possible outcomes.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-between bg-[url(/resources/blur_m3.webp)] sm:bg-[url(/resources/blur_t3.webp)]
            bg-cover bg-center w-full sm:w-[208px] sm:h-[283px] rounded-3xl space-y-5 sm:space-y-16 p-8 sm:p-5 font-medium"
      >
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          III
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Surgical plan
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We believe that informed patients are empowered patients.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-between bg-[url(/resources/blur_m4.webp)] sm:bg-[url(/resources/blur_t4.webp)]
            bg-cover bg-center w-full sm:w-[208px] sm:h-[283px] rounded-3xl space-y-5 sm:space-y-16 p-8 sm:p-5 font-medium"
      >
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          IV
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Pre-op
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We will guide you through the process and answer questions.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-between bg-[url(/resources/blur_m5.webp)] sm:bg-[url(/resources/blur_t5.webp)]
            bg-cover bg-center w-full sm:w-[208px] sm:h-[283px] rounded-3xl space-y-5 sm:space-y-16 p-8 sm:p-5 font-medium"
      >
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          V
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Day of surgery
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We will provide you with exemplary surgical results and the highest
            level of care.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-between bg-[url(/resources/blur_m6.webp)] sm:bg-[url(/resources/blur_t6.webp)]
            bg-cover bg-center w-full sm:w-[208px] sm:h-[283px] rounded-3xl space-y-5 sm:space-y-16 p-8 sm:p-5 font-medium"
      >
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          VI
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Post-op
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We will accompany you through your healing process, ensuring you can
            relax following your Rhinoplasty.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-between bg-[url(/resources/blur_m7.webp)] sm:bg-[url(/resources/blur_t7.webp)]
            bg-cover bg-center w-full sm:w-[208px] sm:h-[283px] rounded-3xl space-y-5 sm:space-y-16 p-8 sm:p-5 font-medium"
      >
        <div className="w-[36px] h-[36px] border rounded-full flex items-center justify-center">
          VII
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl sm:text-xl leading-none sm:leading-none text-balance font-general-sans-semibold w-[90%]">
            Follow up
          </h4>
          <p className="leading-none text-balance text-xl sm:text-base sm:leading-none">
            We will see you about 7 days after your surgery to remove your
            bandages.
          </p>
        </div>
      </div>
    </div>
  );
}
