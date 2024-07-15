import Popup from "@/components/popup";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ContactUsInterface {
  className?: string;
  header: string;
  italicHeader: string;
  imageUrl: string;
  imageClassName?: string;
}
export default function ContactUs({
  className,
  header,
  italicHeader,
  imageUrl,
  imageClassName,
}: ContactUsInterface) {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full rounded-3xl md:rounded-5xl bg-white px-4 py-20 space-y-10 lg:flex-row lg:space-y-0 max-w-[1200px]",
        className
      )}
    >
      <div className="flex flex-col w-full max-w-[600px]">
        <h1 className="self-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl font-general-sans-medium flex flex-col w-[250px] sm:w-[500px] md:w-[650px] lg:w-[500px] xl:w-[550px] leading-none -space-y-1">
          <span>{header}</span>
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-6xl xl:text-7xl font-bold-italic self-end">
            {italicHeader}
          </span>
        </h1>
        <div className="self-center flex flex-row space-x-4 ml-20 w-[90%]">
          <div className="relative w-[86px] sm:w-[130px] h-[113px] sm:h-[173px]">
            <Image
              src="/resources/IMG_5352.webp"
              alt="a doctor doing a surgery"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="relative w-[86px] sm:w-[130px] h-[113px] sm:h-[173px] mt-8">
            <Image
              src="/resources/IMG_5336.webp"
              alt="a doctor doing a surgery"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <Link
          href="/drchacra"
          className="self-center font-italic text-xs text-center max-w-[250px] mt-4"
        >
          Meet Dr. Zahi Abou Chacra; Double board certified Facial Plastic and
          Reconstructive surgeon.
        </Link>
      </div>
      <div className="flex flex-col w-full space-y-5 max-w-[600px] items-center">
        <div
          className={cn(
            "self-center relative w-[250px] h-[187px] md:w-[517px] md:h-[388px]",
            imageClassName
          )}
        >
          <Image
            src={imageUrl}
            alt="beautiful women"
            className="rounded-2xl object-cover"
            fill
          />
        </div>
        <Popup className="self-center" />
      </div>
    </div>
  );
}
