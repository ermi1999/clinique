import Link from "next/link";
import { LargeItalicText, LargeTextContainer } from "./textContainers";
import Image from "next/image";
import ContactUs from "./contactUs";

export default function OutOfTownSection() {
  return (
    <div className="-mt-14 h-full w-full">
      <div className="absolute h-[800px] w-full bg bg-[#1f1f21] rounded-3xl lg:rounded-4xl" />
      <div className="flex flex-col w-full h-full items-center justify-center text-white px-1 sm:px-7 md:px-5">
        <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between max-w-[1100px]">
          <h1 className="w-full flex flex-col max-w-[240px] sm:max-w-[300px] text-[3.5rem] sm:text-7xl md:text-6xl md:max-w-[250px] lg:text-8xl lg:max-w-[400px] font-general-sans-medium leading-none mt-14 -space-y-2 z-10">
            <span className="self-start">Out</span>
            <span className="self-end font-bold-italic text-[4rem] sm:text-[5rem] md:text-[4.2rem] lg:text-[6.5rem]">
              of Town
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="flex flex-col font-medium w-[283px] lg:w-[400px] mt-10 text-sm z-10 lg:text-base">
              <span className="self-center md:self-end uppercase">
                Dr. Chacra is pleased to
              </span>
              <span className="text-pretty text-center md:text-left uppercase">
                offer Virtual Consultations for patients who live outside of The
                Greater Montreal area.
              </span>
            </p>
            <Link
              href="/"
              className="flex flex-row underline space-x-2 mt-10 z-10 md:self-end text-nowrap"
            >
              <span>LET&apos;S CONNECT</span>
              <Image
                height={18}
                width={18}
                src="/resources/arrow-right-white.svg"
                alt="right arrow"
              />
            </Link>
          </div>
        </div>
        <ContactUs
          imageUrl="/resources/Clinique_Zahi_vue_1_.webp"
          message="Send us a message through the portal and we will get back to you within 1 business day
"
          className="z-10 text-primary lg:px-0"
        />
      </div>
    </div>
  );
}
