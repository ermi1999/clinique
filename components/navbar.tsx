"use client";
import { useEffect } from "react";
import Popup from "./popup";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";

export default function Navbar() {
  useEffect(() => {
    const FromLeftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-fadeinleft");
            target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.5 }
    );
    const FromLeftFastObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-fadeinleft-fast");
            target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.5 }
    );

    const FromRightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-fadeinright");
            target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.5 }
    );
    const FromRightFastObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-fadeinright-fast");
            target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.5 }
    );

    const FromBottomObserver = new IntersectionObserver(
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

    const fromRightElements = document.getElementsByClassName("fade-in-right");
    const fromRightElementsFast =
      document.getElementsByClassName("fade-in-right-fast");
    const fromLeftElements = document.getElementsByClassName("fade-in-left");
    const fromLeftElementsFast =
      document.getElementsByClassName("fade-in-left-fast");
    const fromBottomElements = document.getElementsByClassName("fade-in-up");
    for (let i = 0; i < fromRightElements.length; i++) {
      FromRightObserver.observe(fromRightElements[i]);
    }
    for (let i = 0; i < fromRightElementsFast.length; i++) {
      FromRightFastObserver.observe(fromRightElementsFast[i]);
    }

    for (let i = 0; i < fromLeftElements.length; i++) {
      FromLeftObserver.observe(fromLeftElements[i]);
    }
    for (let i = 0; i < fromLeftElementsFast.length; i++) {
      FromLeftFastObserver.observe(fromLeftElementsFast[i]);
    }

    for (let i = 0; i < fromBottomElements.length; i++) {
      FromBottomObserver.observe(fromBottomElements[i] as Element);
    }

    return () => {
      for (let i = 0; i < fromRightElements.length; i++) {
        FromRightObserver.unobserve(fromRightElements[i] as Element);
      }
      for (let i = 0; i < fromRightElementsFast.length; i++) {
        FromRightFastObserver.unobserve(fromRightElementsFast[i] as Element);
      }

      for (let i = 0; i < fromLeftElements.length; i++) {
        FromLeftObserver.unobserve(fromLeftElements[i] as Element);
      }
      for (let i = 0; i < fromLeftElementsFast.length; i++) {
        FromLeftFastObserver.unobserve(fromLeftElementsFast[i] as Element);
      }

      for (let i = 0; i < fromBottomElements.length; i++) {
        FromBottomObserver.unobserve(fromBottomElements[i] as Element);
      }
    };
  }, []);
  return (
    <nav
      className="fixed z-20 w-full pt-3 font-general-sans rounded-b-3xl md:rounded-b-4xl md:px-7 backdrop-blur-lg bg-off-white/50
                "
    >
      <div className="w-full flex flex-row justify-between px-4 py-2 items-center">
        <a href="/">
          <img
            alt="logo image"
            src="/resources/logo.png"
            className="h-14 w-14 md:h-16 md:w-16 animate-spin"
          />
        </a>
        <div
          className="animate-fadeindown space-x-10 xl:space-x-20 *:py-1
                *:relative
                *:isolate 
                *:cursor-pointer
                *:whitespace-nowrap
                before:*:absolute
                before:*:w-full
                before:*:h-0.5
                before:*:bottom-0
                before:*:bg-off-dark
                before:*:transition-all
                before:*:duration-1000
                before:*:ease-in-expo
                before:*:scale-0
                before:*:origin-left before:*:
                hover:before:*:scale-100 h-[3.2rem] hidden lg:flex items-center justify-center px-4 font-medium"
        >
          <a href="/drchacra" className="">
            Dr. Chacra
          </a>
          <a href="/services">Rhinoplasty solutions</a>
          <a href="/out-of-town">Out Of Town</a>
          <a href="/contactus">Contact us</a>
        </div>
        <div className="flex flex-row space-x-10">
          <Popup className="hidden md:flex" />
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Image
                alt="hamburger"
                height={28}
                width={28}
                src="/resources/hamburger.svg"
              />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between font-medium">
              <div className="flex flex-col space-y-3">
                <a href="/drchacra" className="">
                  Dr. Chacra
                </a>
                <a href="/services">Rhinoplasty solutions</a>
                <a href="/out-of-town">Out Of Town</a>
                <a href="/contactus">Contact us</a>
              </div>
              <Popup className="self-center" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
