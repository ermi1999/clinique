"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { photos } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

export default function BeforeAndAfter() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const top = [2, 6, 12];
  const bottom = [4, 10];
  useEffect(() => {
    const slider = document.querySelector(".items") as HTMLElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    if (!slider) return;

    const startDragging = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
    };

    const drag = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", startDragging);
    slider.addEventListener("mouseleave", stopDragging);
    slider.addEventListener("mouseup", stopDragging);
    slider.addEventListener("mousemove", drag);

    return () => {
      slider.removeEventListener("mousedown", startDragging);
      slider.removeEventListener("mouseleave", stopDragging);
      slider.removeEventListener("mouseup", stopDragging);
      slider.removeEventListener("mousemove", drag);
    };
  }, []);
  const nextButtonHandler = () => {
    let slider = document.querySelector(".items");
    if (slider instanceof HTMLElement) {
      slider.scrollLeft += 250;
    }
  };
  const prevButtonHandler = () => {
    let slider = document.querySelector(".items");
    if (slider instanceof HTMLElement) {
      slider.scrollLeft -= 250;
    }
  };
  return (
    <section className="h-full w-full bg-fade-in-white py-10">
      <h1 className="w-full text-center font-medium mt-10 mb-5">
        BEFORE AND AFTER
      </h1>
      <div className="px-10 md:px-16 lg:px-20 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row w-full max-w-[400px] md:max-w-none md:space-x-5 self-center md:self-start items-end">
          <p className="w-44 font-semibold hidden lg:flex">
            HOVER OVER PHOTOS TO SEE THE BEFORE
          </p>
          <p className="w-44 lg:hidden font-semibold self-start md:self-end">
            CLICK ON PHOTOS TO SEE THE BEFORE
          </p>
          <p className="flex flex-col text-6xl md:text-7xl lg:text-8xl w-full font-general-sans max-w-96">
            <span>Simply</span>
            <span className="font-bold-italic text-right">Sculpted</span>
          </p>
        </div>
        <div className="flex flex-row space-x-5 self-end">
          <button onClick={prevButtonHandler}>
            <Image
              height={24}
              width={24}
              src="/resources/arrow_left.svg"
              alt="left arrow"
            />
          </button>
          <button onClick={nextButtonHandler}>
            <Image
              height={24}
              width={24}
              src="/resources/arrow-right.svg"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
      <div className="photos flex flex-row w-full overflow-y-hidden  space-x-7 md:space-x-10 overflow-x-scroll whitespace-nowrap my-10 items h-[450px]">
        {photos.map((photo, i) => {
          return (
            <div
              key={i}
              className={cn(
                "relative min-w-[200px] md:min-w-[250px]",
                bottom.includes(i)
                  ? "self-end"
                  : top.includes(i)
                  ? "self-start"
                  : "self-center"
              )}
            >
              {/* Default Image */}
              {isDesktop ? (
                <Image
                  src={photo[1]}
                  alt="Default Image"
                  width={253}
                  height={313}
                  draggable={false}
                  unoptimized
                  className="rounded-2xl absolute inset-0 transition-opacity duration-300 hover:opacity-0 object-center w-[200px] h-[250px] md:w-[250px] md:h-[300px] object-cover"
                />
              ) : (
                <Image
                  onClick={(e) => {
                    e.currentTarget.style.opacity =
                      e.currentTarget.style.opacity === "0" ? "1" : "0";
                  }}
                  src={photo[1]}
                  alt="Default Image"
                  width={253}
                  height={313}
                  draggable={false}
                  unoptimized
                  className="rounded-2xl absolute inset-0 transition-opacity duration-300 hover:opacity-0 object-center w-[200px] h-[250px] md:w-[250px] md:h-[300px] object-cover"
                />
              )}
              {/* Hover Image */}
              <Image
                src={photo[0]}
                alt="Hover Image"
                width={253}
                height={313}
                draggable={false}
                unoptimized
                className="rounded-2xl transition-opacity duration-300 object-center w-[200px] h-[250px] md:w-[250px] md:h-[300px] object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
