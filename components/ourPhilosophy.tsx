import Image from "next/image";
import BluryCard from "./bluryCard";

export default function OurPhilosophy() {
  return (
    <div className="w-[100vw] flex flex-col">
      <div className="absolute w-full h-80 bg-fade-out" />
      <div className="absolute mt-20 lg:mt-32 h-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start space-y-20">
          <div className="hidden lg:flex flex-col w-[45vw]">
            <div className="flex flex-row items-start h-[400px] ml-28">
              <Image
                src="/resources/line.svg"
                alt="line image"
                height={200}
                width={80}
                className="pt-3"
              />
              <Image
                src="/resources/star.svg"
                alt="star"
                height={35}
                width={35}
                className="-ml-2"
              />
            </div>
            <BluryCard className="ml-5 flex flex-col p-4 w-[350px] text-lg text-balance font-medium z-10">
              <div className="flex flex-row">
                <img
                  src="/resources/Screenshot_2023-10-2.png"
                  alt="doctor doing a surgery"
                  className="object-contain h-28 w-28 mr-3 mb-2 rounded-xl"
                />
                <p className="w-full self-end">
                  Dr. Chacra believes that rhinoplasty,
                </p>
              </div>
              <p>
                plastic surgery and nose reconstruction are not just medical
                procedures but an art that requires passion and precision.
              </p>
            </BluryCard>
          </div>
          <div className="w-[100vw] lg:w-[55vw] px-10 text-primary-foreground font-semibold flex flex-col items-center justify-center lg:items-start lg:justify-start lg:px-10 z-10">
            <h1 className="fade-in-up opacity-0">OUR PHILOSOPHY</h1>
            <h2 className="w-full max-w-[600px] lg:max-w-[800px] mt-10 text-5xl md:text-7xl lg:text-[90px] flex flex-col">
              <span className="font-italic fade-in-left opacity-0">
                The art of
              </span>
              <span className="text-end font-general-sans fade-in-right opacity-0">
                Rhinoplasty
              </span>
            </h2>
            <p className="w-full md:w-[70%] lg:w-full max-w-[550px] mt-10 flex flex-col font-semibold lg:font-bold lg:text-lg text-white">
              <span className="text-end">
                DR. CHACRA&apos;S PHILOSOPHY IS THAT
              </span>
              <span>
                BEAUTIFUL NOSES ARE ACHIEVED THROUGH A THOUGHTFUL COMBINATION OF
                ART AND SCIENCE.
              </span>
            </p>
          </div>
          <BluryCard className="ml-5 flex flex-col lg:hidden p-4 w-[300px] md:w-[400px] md:text-lg font-medium z-10">
            <div className="flex flex-row">
              <img
                src="/resources/Screenshot_2023-10-2.png"
                alt="doctor doing a surgery"
                className="object-contain h-28 w-28 mr-3 mb-2 rounded-xl"
              />
              <p className="w-full self-end fade-in-up opacity-0">
                Dr. Chacra believes that rhinoplasty,
              </p>
            </div>
            <p className="fade-in-up opacity-0">
              plastic surgery and nose reconstruction are not just medical
              procedures but an art that requires passion and precision.
            </p>
          </BluryCard>
        </div>
      </div>
      <img
        src="/resources/unsplash_gKueoYuUvs8.jpg"
        alt="cover image"
        className="w-full h-[793px] object-cover object-left"
      />
      <div className="absolute w-full bg-fade-out-white h-96 mt-[409px]" />
    </div>
  );
}
