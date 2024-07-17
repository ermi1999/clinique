import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function FooterImage({
  imageUrl,
  className,
}: {
  imageUrl: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col w-full space-y-5">
      <div
        className={cn(
          "self-center relative w-[300px] sm:w-[374px] h-[400px] sm:h-[498px] fade-in-up opacity-0",
          className
        )}
      >
        <Image
          alt="beautiful women"
          src={imageUrl}
          fill
          className="rounded-3xl sm:rounded-4xl object-cover"
        />
      </div>
      <Link href="/contactus" className="self-center">
        <Button className="rounded-3xl min-w-[140px] sm:min-w-[170px] sm:min-h-[55px] sm:rounded-4xl sm:text-lg">
          Contact Us
        </Button>
      </Link>
    </div>
  );
}
