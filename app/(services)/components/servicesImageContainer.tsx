import Image from "next/image";

export default function ServicesImage({ ImageUrl }: { ImageUrl: string }) {
  return (
    <div className="relative w-[299px] h-[224px] sm:w-[452px] sm:h-[339px] md:w-[501px] md:h-[375px] lg:w-[801px] lg:h-[601px] self-center">
      <Image
        alt="beautiful women"
        src={ImageUrl}
        className="object-cover rounded-3xl"
        fill
        unoptimized
      />
    </div>
  );
}
