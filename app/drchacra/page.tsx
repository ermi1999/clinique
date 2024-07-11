import Image from "next/image";

export default function DrChacra() {
  return (
    <main className="w-full h-full pt-32 flex flex-col items-center space-y-20">
      <section className="flex flex-col-reverse sm:flex-col lg:flex-row px-5 items-center lg:items-start justify-center lg:justify-start w-full space-y-10 max-w-[1100px]">
        <div className="flex flex-col space-y-10 items-center justify-center w-full lg:self-center lg:items-start">
          <h1
            className="flex flex-col text-[3rem] sm:text-6xl lg:text-8xl font-general-sans-medium
          -space-y-5 sm:-space-y-7 leading-none w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]"
          >
            <span className="self-start">Rhinoplasty </span>
            <span className="self-end">
              as a{" "}
              <span className="font-bold-italic text-7xl sm:text-8xl lg:text-9xl">
                craft
              </span>
            </span>
          </h1>
          <p className="text-pretty text-center sm:text-start text-off-dark font-medium leading-none flex flex-col space-y-3 w-[300px] sm:w-[400px] lg:w-[300px] lg:self-center">
            <span>
              Dr. Chacra’s craft as a surgeon reflects a distinct penchant for
              excellence which comes to life through mastery and talent. <br />
            </span>
            <span>
              Each patient’s case is an opportunity for him to design a tailored
              treatment plan to suit their individual needs and desires while
              creating a custom result.
            </span>
          </p>
        </div>
        <div className="w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[500px] relative mb-10">
          <Image
            src="/resources/drchacra.jpg"
            alt="Dr. chacra"
            fill
            className="rounded-xl sm:rounded-2xl object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col bg-white rounded-2xl sm:rounded-4xl w-full items-center py-10 px-4 space-y-10">
        <h1
          className="flex flex-col text-4xl sm:text-6xl lg:text-8xl font-general-sans-medium
          -space-y-5 lg:-space-y-10 leading-none w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[750px]"
        >
          <span className="self-start">A renowned</span>
          <span className="self-end">
            nasal{" "}
            <span className="font-bold-italic text-5xl sm:text-7xl lg:text-9xl">
              specialist
            </span>
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between w-full space-y-10 items-center lg:items-start lg:space-y-0 max-w-[1100px]">
          <div className="w-full h-[501px] lg:h-[689px] max-w-[400px] relative">
            <Image
              alt="Dr. chacra"
              src="/resources/About_DR_CHACRA_39.webp"
              fill
              className="rounded-xl sm:rounded-2xl lg:rounded-4xl object-cover object-top"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <strong className="text-pretty leading-5 max-w-[400px] lg:max-w-[500px] mb-10">
              Dr. Zahi Abou Chacra is renowned as the best rhinoplasty surgeon
              in Montreal, dedicating his entire medical career to mastering the
              art and science of rhinoplasty.
              <br /> <br /> His craft as a surgeon reflects a distinct penchant
              for excellence, blending mastery and talent to create tailored
              treatment plans that meet individual needs and desires for a
              custom result.
              <br /> <br /> A specialist in nasal surgery, Dr. Chacra&apos;s
              unique prowess and proficiency have been developed through
              extensive studies, both at home and abroad, and significant
              collaboration with other leading surgeons from Montreal and around
              the world.
              <br /> <br />
              His reputation as the best plastic surgeon for rhinoplasty is not
              only a testament to his skill but also to his commitment to his
              patients well-being and aesthetic desires.
              <br /> <br />
              As the best nose surgeon in Montreal, Dr. Chacra considers
              rhinoplasty to be more than just a medical procedure—it&apos;s an
              art.
              <br /> <br />
              His passion for perfecting surgical techniques ensures easier,
              pain-free recovery for his patients, making him the rhinoplasty
              specialist Montreal turns to for both aesthetic and functional
              rhinoplasty, as well as revision rhinoplasty.
            </strong>
            <div className="relative w-[200px] h-[215px] self-end">
              <Image
                alt="Dr. chacra"
                src="/resources/IMG_8533_1.webp"
                fill
                className="rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
