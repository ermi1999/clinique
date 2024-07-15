"use client";
import Popup from "@/components/popup";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface ServiceInterface {
  ImageUrl: string;
  service: string;
  url: string;
  children: React.ReactNode;
}
export default function Service({
  ImageUrl,
  service,
  url,
  children,
}: ServiceInterface) {
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
    <div className="flex flex-col sm:flex-row space-y-5 sm:space-x-10 sm:border-t sm:border-[#c7c7c7] sm:py-10 lg:w-full lg:max-w-[1200px] fade-in-up opacity-0">
      <Link href={url}>
        <div className="w-full h-[445px] sm:w-[200px] sm:h-[280px] md:w-[150px] md:h-[230px] lg:w-[200px] lg:h-[280px] relative">
          <Image
            alt="image"
            src={ImageUrl}
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </Link>
      <div className="flex flex-col lg:flex-row space-y-5 sm:space-y-10 lg:space-y-0 lg:space-x-10 lg:w-full lg:justify-between">
        <div className="flex flex-col space-y-5 lg:space-y-10">
          <Link href={url}>
            <h2 className="text-wrap text-4xl xl:text-5xl xl:text-nowrap font-general-sans-medium leading-none max-w-[200px] lg:max-w-[500px]">
              {service}
            </h2>
          </Link>
          <div className="flex flex-col text-lg font-semibold text-pretty space-y-4 leading-none max-w-[400px] lg:max-w-[600px]">
            {children}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Popup className="w-full text-base h-[50px] sm:w-[165px]" />
          <Link href={url}>
            <Button className="rounded-3xl w-full uppercase bg-background border border-primary hover:bg-off-dark hover:text-white text-primary h-[50px] sm:w-[165px]">
              Discover
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
