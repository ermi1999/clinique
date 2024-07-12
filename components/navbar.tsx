import Link from "next/link";
import Button from "./button";
import Popup from "./popup";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="fixed z-20 w-full pt-3 font-general-sans rounded-b-3xl md:rounded-b-4xl md:px-7 backdrop-blur-lg bg-off-white/50
                "
    >
      <div className="w-full flex flex-row justify-between px-4 py-2 items-center">
        <Link href="/">
          <img
            alt="logo image"
            src="/resources/logo.png"
            className="h-14 w-14 md:h-16 md:w-16 animate-spin"
          />
        </Link>
        <div
          className="space-x-10 xl:space-x-20 *:py-1
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
          <Link href="/drchacra" className="">
            Dr. Chacra
          </Link>
          <Link href="/services">Rhinoplasty solutions</Link>
          <Link href="/out-of-town">Out Of Town</Link>
          <Link href="/">Contact us</Link>
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
                <Link href="/drchacra" className="">
                  Dr. Chacra
                </Link>
                <Link href="/services">Rhinoplasty solutions</Link>
                <Link href="/out-of-town">Out Of Town</Link>
                <Link href="/">Contact us</Link>
              </div>
              <Popup className="self-center" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
