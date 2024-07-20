import ContactUs from "@/components/contactUs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contacts() {
  return (
    <main className="flex flex-col py-32 space-y-32 items-center overflow-hidden">
      <div className="flex flex-col w-full self-center space-y-10 max-w-[340px] sm:max-w-[635px] md:max-w-[720px] lg:max-w-[950px] xl:max-w-[1100px]">
        <h1 className="self-center font-general-sans-medium text-5xl sm:text-7xl lg:text-8xl flex flex-col w-full -space-y-3 sm:-space-y-7 lg:-space-y-10 lg:self-start animate-fadeinleft">
          <span className="flex flex-col -space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <span>Your nose </span> <span className="self-center">is in</span>
          </span>
          <span className="font-bold-italic text-6xl sm:text-8xl lg:text-9xl self-end">
            good hands
          </span>
        </h1>
        <div className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
          <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5 sm:self-start">
            <Link href="tel:5146134977" className="self-center">
              <Button className="rounded-3xl text-lg min-w-[200px]">
                +1 514 613-4977
              </Button>
            </Link>
            <Link href="mailto:info@clinique7.com" className="self-center">
              <Button className="rounded-3xl text-lg min-w-[200px]">
                info@clinique7.com
              </Button>
            </Link>
          </div>
          <p className="self-center text-center sm:self-start sm:text-start w-[250px] flex flex-col font-semibold text-black text-lg">
            <span>1310 Ave.Thérèse-Lavoie-Roux</span> <span>Montreal, QC</span>
            <span>H2V 0B2</span>
          </p>
        </div>
      </div>
      <ContactUs
        imageUrl="/resources/noroot.jpg"
        message="Let us know how we can support you in loving yours even more
"
      />
    </main>
  );
}
