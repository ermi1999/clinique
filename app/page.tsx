import HeroText from "@/components/hero-text";

export default function Home() {
  return (
    <main className="h-[100vh] w-full flex flex-col overflow-hidden">
      <video
        src="/resources/GFBImzqp.mp4"
        autoPlay={true}
        loop
        muted
        className="w-auto object-cover
            min-w-full min-h-full max-w-none"
      ></video>
      <HeroText />
    </main>
  );
}
