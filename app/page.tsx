import HeroText from "@/components/hero-text";
import WhatWeDo from "@/components/whatWeDoSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="h-[80vh] md:h-[100vh] w-full flex flex-col overflow-hidden">
        <video
          src="/resources/GFBImzqp.mp4"
          autoPlay={true}
          loop
          muted
          className="w-auto object-cover
            min-w-full min-h-full max-w-none"
        ></video>
        <HeroText />
      </section>
      <WhatWeDo />
    </main>
  );
}
