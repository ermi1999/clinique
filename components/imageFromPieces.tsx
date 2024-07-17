import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface PieceInterface {
  imageUrl: string;
  pieceNumber: string;
  heading: string;
  paragraph1: string;
  paragraph2?: string;
  align: "end" | "start";
  href?: string;
}
export default function Piece({
  imageUrl,
  pieceNumber,
  heading,
  paragraph1,
  paragraph2,
  align,
  href,
}: PieceInterface) {
  return (
    <div className="w-full h-full relative cursor-pointer">
      <a href={href ? href : "/"}>
        <div className="absolute h-full w-full bg-black/10 lg:bg-black/45 xl:bg-transparent xl:hover:bg-black/45 *:*:*:*:hover:opacity-100 z-10 rounded-xl lg:rounded-3xl transition-all">
          <div
            className={cn(
              "absolute w-full h-full p-5 sm:p-10 lg:p-0",
              align === "start" ? "lg:pl-10 xl:pl-20" : "lg:pl-5 xl:pl-20"
            )}
          >
            <div className="flex flex-row w-full h-full items-center justify-center lg:justify-between font-medium">
              <div
                className={cn(
                  "flex w-full h-full lg:justify-between lg:items-center flex-col space-y-4",
                  align === "end" ? "lg:flex-row-reverse" : "lg:flex-row"
                )}
              >
                <h1
                  className={cn(
                    "text-[1.6rem] sm:text-5xl lg:text-[2.5rem] leading-none flex flex-row text-nowrap space-x-2 font-general-sans-medium",
                    align === "end" ? "lg:pl-5 xl:pl-10" : "lg:pr-5 xl:pr-10"
                  )}
                >
                  <span className="text-xs sm:text-sm self-start">
                    {pieceNumber}
                  </span>
                  <span>{heading}</span>
                </h1>
                <p className="opacity-100 xl:opacity-0 transition-opacity flex flex-col w-full max-w-[500px] text-sm sm:text-lg lg:text-lg -space-y-3 lg:text-nowrap">
                  <span className={cn(paragraph2 ? "self-end" : "self-start")}>
                    {paragraph1}
                  </span>
                  {paragraph2 ? (
                    <span className="self-start">{paragraph2}</span>
                  ) : null}
                </p>
              </div>
              <button className="pl-3 lg:p-5 self-start lg:self-center">
                <Image
                  alt="right arrow"
                  src="/resources/arrow-right-white.svg"
                  height={28}
                  width={28}
                />
              </button>
            </div>
          </div>
        </div>
        <img
          src={imageUrl}
          alt="background image"
          className="relative rounded-xl lg:rounded-3xl h-full w-full object-cover object-center"
        />
      </a>
    </div>
  );
}
