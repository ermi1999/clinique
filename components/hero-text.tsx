export default function HeroText() {
  return (
    <div className="absolute w-full mt-32 px-3 md:px-7 overflow-hidden">
      <h1
        className="h-full w-full flex flex-col justify-center items-center md:items-start text-7xl sm:text-8xl md:text-[7.3rem] lg:text-9xl 2xl:text-[11rem] leading-none
z-10 font-general-sans space-y-5"
      >
        <p className="text-sm font-tanker text-off-dark">
          Premiere Destination for Designer Rhinoplasty
        </p>
        <span>The brand</span>
        <span>behind</span>
        <p className="text-sm font-tanker hidden md:flex text-off-dark">
          Entrust your face to a rhinoplasty specialist in Montreal.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center pb-5">
          <span className="font-bold-italic">beautiful</span>{" "}
          {/* <br className="md:hidden" /> */}
          <span className="ml-7">noses</span>
        </div>
        <p className="text-sm font-tanker md:hidden text-off-dark">
          Entrust your face to a rhinoplasty specialist in Montreal.
        </p>
      </h1>
    </div>
  );
}
