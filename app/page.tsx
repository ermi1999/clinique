import BeforeAndAfter from "@/components/beforeAndAfter";
import ContactUs from "@/components/contactUs";
import HeroText from "@/components/hero-text";
import OurApproach from "@/components/ourApproach";
import OurPhilosophy from "@/components/ourPhilosophy";
import WorkProcess from "@/components/process";
import Services from "@/components/services";
import WhatWeDo from "@/components/whatWeDoSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full">
      <section className="h-[80vh] md:h-[1200px] lg:h-auto w-full flex flex-col overflow-hidden">
        <video
          src="/resources/GFBImzqp.mp4"
          autoPlay={true}
          loop
          muted
          className="w-[50vw] h-[384px] md:w-[70vw] md:h-[700px] lg:w-full object-cover mt-72 md:mt-[28rem] lg:mt-0 lg:ml-40 lg:h-auto"
        ></video>
        <HeroText />
      </section>
      <WhatWeDo />
      <OurPhilosophy />
      <BeforeAndAfter />
      <ContactUs
        imageUrl="/resources/Clinique_Zahi_vue_1_.jpg"
        message="Let us know how we can support you in loving yours even more
"
      />
      <Services />
      <OurApproach />
      <WorkProcess />
    </main>
  );
}
