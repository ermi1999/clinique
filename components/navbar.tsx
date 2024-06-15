import Link from "next/link";
import Button from "./button";

export default function Navbar() {
  return (
    <nav
      className="fixed z-20 w-full text-black pt-3 font-general-sans rounded-b-4xl md:px-7 backdrop-blur-xl
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
                before:*:ease-[cubic-bezier(.47,1.64,.38,.87)]
                before:*:scale-0
                before:*:origin-left before:*:
                hover:before:*:scale-100 bg-grey-white rounded-xl h-[3.2rem] hidden lg:flex items-center justify-center px-4 shadow-sm"
        >
          <Link href="/drchacra" className="">
            Dr. Chacra
          </Link>
          <Link href="/">Rhinoplasty solutions</Link>
          <Link href="/">Learning center</Link>
          <Link href="/">Contact us</Link>
        </div>
        <Button className="text-xs md:text-base shadow-sm">
          Book a consultation
        </Button>
      </div>
    </nav>
  );
}
