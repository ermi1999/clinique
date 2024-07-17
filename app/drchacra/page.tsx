import ContactUs from "@/components/contactUs";
import { SmallHeadingContainer } from "@/components/textContainers";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DrChacra() {
  const images = [];
  for (let i = 1; i < 11; i++) {
    images.push(`/resources/${i}.webp`);
  }
  return (
    <main className="w-full h-full py-32 flex flex-col items-center space-y-32">
      <section className="flex flex-col-reverse sm:flex-col lg:flex-row px-5 items-center lg:items-start justify-center lg:justify-start w-full space-y-10 max-w-[1100px]">
        <div className="flex flex-col space-y-10 items-center justify-center w-full lg:self-center lg:items-start">
          <h1
            className="flex flex-col text-[3rem] sm:text-6xl lg:text-8xl font-general-sans-medium
          -space-y-5 sm:-space-y-7 leading-none w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]"
          >
            <span className="self-start animate-fadeinleft">Rhinoplasty </span>
            <span className="self-end">
              as a{" "}
              <span className="font-bold-italic text-7xl sm:text-8xl lg:text-9xl animate-fadeinright">
                craft
              </span>
            </span>
          </h1>
          <p className="text-pretty text-center sm:text-start text-off-dark font-medium leading-none flex flex-col space-y-3 w-[300px] sm:w-[400px] lg:w-[300px] lg:self-center animate-fadeinleft">
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
        <div className="w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[500px] relative mb-10 animate-fadeindown">
          <Image
            src="/resources/drchacra.jpg"
            alt="Dr. chacra"
            fill
            className="rounded-xl sm:rounded-2xl object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col bg-white rounded-2xl sm:rounded-4xl w-full items-center py-10 px-4">
        <div className="flex flex-col w-full max-w-[1100px] space-y-10">
          <h1
            className="flex flex-col text-4xl sm:text-6xl lg:text-8xl font-general-sans-medium
          -space-y-5 lg:-space-y-10 leading-none w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[750px] self-center lg:self-start"
          >
            <span className="self-start fade-in-left opacity-0">
              A renowned
            </span>
            <span className="self-end fade-in-right opacity-0">
              nasal{" "}
              <span className="font-bold-italic text-5xl sm:text-7xl lg:text-9xl">
                specialist
              </span>
            </span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full space-y-10 items-center lg:items-start lg:space-y-0">
            <div className="w-full h-[501px] lg:h-[689px] max-w-[500px] relative">
              <Image
                alt="Dr. chacra"
                src="/resources/About_DR_CHACRA_39.webp"
                fill
                unoptimized
                className="rounded-xl sm:rounded-2xl lg:rounded-4xl object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <strong className="text-pretty leading-5 max-w-[400px] sm:max-w-[500px] mb-10">
                Dr. Zahi Abou Chacra is renowned as the best rhinoplasty surgeon
                in Montreal, dedicating his entire medical career to mastering
                the art and science of rhinoplasty.
                <br /> <br /> His craft as a surgeon reflects a distinct
                penchant for excellence, blending mastery and talent to create
                tailored treatment plans that meet individual needs and desires
                for a custom result.
                <br /> <br /> A specialist in nasal surgery, Dr. Chacra&apos;s
                unique prowess and proficiency have been developed through
                extensive studies, both at home and abroad, and significant
                collaboration with other leading surgeons from Montreal and
                around the world.
                <br /> <br />
                His reputation as the best plastic surgeon for rhinoplasty is
                not only a testament to his skill but also to his commitment to
                his patients well-being and aesthetic desires.
                <br /> <br />
                As the best nose surgeon in Montreal, Dr. Chacra considers
                rhinoplasty to be more than just a medical procedure—it&apos;s
                an art.
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
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col rounded-2xl sm:rounded-4xl w-full items-center py-10 px-4">
        <div className="flex flex-col w-full max-w-[1100px] space-y-10">
          <h1
            className="flex flex-col text-4xl sm:text-6xl lg:text-8xl font-general-sans-medium
          -space-y-3 lg:-space-y-10 leading-none w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[750px] self-center lg:self-start"
          >
            <span className="self-start fade-in-left opacity-0">
              <span className="font-bold-italic text-5xl sm:text-7xl lg:text-9xl">
                Education
              </span>{" "}
              and
            </span>
            <span className="self-end fade-in-right opacity-0">background</span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full space-y-10 items-center lg:items-start lg:space-y-0">
            <div className="flex flex-col items-start">
              <strong className="text-pretty leading-5 max-w-[400px] sm:max-w-[500px] fade-in-up opacity-0">
                <strong className="uppercase">Education and background</strong>
                <br />
                <br />
                Dr. Chacra&apos;s educational background is equally impressive.
                Graduating from McGill University School of Medicine and the
                University of Montreal in Otolaryngology – Head and Neck
                Surgery, he further honed his skills in rhinoplasty and facial
                plastic surgery in Houston, Texas.
                <br /> <br /> Holding double board certification by the Royal
                College of Physicians and Surgeons of Canada, as well as the
                American Board of Facial Plastic and Reconstructive Surgery, Dr.
                Chacra is not just the best rhinoplasty surgeon; he&apos;s also
                regarded as the best plastic surgeon Montreal has for
                rhinoplasty.
                <br /> <br /> Patients seeking the best plastic surgeon for
                rhinoplasty find assurance in Dr. Chacra&apos;s approach, which
                meticulously combines art and science to achieve the
                highest-quality results in nasal surgery. His role as an
                Assistant Professor in the Department of Surgery at the
                University of Montreal further underscores his expertise and
                dedication to advancing the field.
                <br /> <br />
                <br />
                <strong className="uppercase">Special interests</strong>
                <br />
                <br />
                With over a decade of experience, Dr. Zahi Abou Chacra&apos;s
                success rate speaks volumes about his skill and commitment to
                excellence.
                <br /> <br />
                His leadership roles, including Chief of Service at the Centre
                Intégré Universitaire de Santé et de Services Sociaux du Nord de
                l’Île de Montréal, position him at the forefront of rhinoplasty
                and facial plastic surgery.
                <br /> <br />
                For those contemplating changes to the appearance of their nose,
                choosing Dr. Zahi Abou Chacra, the best rhinoplasty surgeon in
                Montreal, means entrusting your face to a master of the craft.
                Contact us to book a consultation and take the first step
                towards achieving your ideal aesthetic outcome with
                Montreal&apos;s premier rhinoplasty specialist.
              </strong>
            </div>
            <div className="w-full h-[501px] lg:h-[689px] max-w-[500px] relative">
              <Image
                alt="Dr. chacra"
                src="/resources/DrChacra2.webp"
                fill
                unoptimized
                className="rounded-xl sm:rounded-2xl lg:rounded-4xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full items-center space-y-10 max-w-[1100px] px-4 lg:px-10 xl:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[50%] lg:self-end items-center">
          <SmallHeadingContainer className="uppercase lg:self-center fade-in-up opacity-0">
            Our story
          </SmallHeadingContainer>
          <div className="w-[300px] h-[200px] md:w-[500px] md:h-[400px] lg:w-[262px] lg:h-[262px] lg:self-end relative">
            <Image
              alt="Dr chacra with a client"
              fill
              src="/resources/IMG_8558.webp"
              className="rounded-3xl object-cover object-top"
              unoptimized
            />
          </div>
        </div>
        <h1
          className="flex flex-col text-4xl sm:text-6xl lg:text-8xl font-general-sans-medium
          -space-y-5 lg:-space-y-10 leading-none w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[750px] self-center lg:self-start"
        >
          <span className="self-start fade-in-left opacity-0">
            Over a decade
          </span>
          <span className="self-end fade-in-right opacity-0">
            of{" "}
            <span className="font-bold-italic text-5xl sm:text-7xl lg:text-9xl">
              experience
            </span>
          </span>
        </h1>
        <div className="lg:w-full flex flex-col lg:flex-row lg:justify-between items-center space-y-5">
          <div className="hidden relative lg:block w-[160px] h-[160px]">
            <Image
              alt="a women doing a surgery"
              src="/resources/IMG_8523.webp"
              fill
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="uppercase font-medium self-center sm:self-end">
              What is the success rate like?
            </p>
            <p className="text-pretty text-center sm:text-start font-medium leading-none flex flex-col w-[300px] sm:w-[400px] lg:self-center">
              <span>
                Very high. During a Rhinoplasty Consultation with <br />
              </span>
              <span>
                Dr. Chacra, a detailed and personalized discussion with each
                patient takes place. A thorough examination is done to
                accurately assess the difficulty of each individual case and
                address different concerns. A surgical correction is rarely
                required once the healing period has passed.
              </span>
            </p>
          </div>
          <div className="flex flex-wrap"></div>
          <a
            href="/services"
            className="self-center sm:self-start lg:self-center"
          >
            <Button className="uppercase rounded-3xl bg-black">
              Our solutions
            </Button>
          </a>
        </div>
      </section>
      <section className="flex flex-col space-y-10 sm:space-y-20">
        <h1 className="flex flex-col text-center text-balance text-4xl sm:text-6xl lg:text-8xl font-general-sans-medium leading-none w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[850px] self-center">
          Past and Present Positions
        </h1>
        <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between font-semibold text-lg text-center lg:text-balance text-pretty space-y-10 lg:space-y-0 lg:space-x-10 leading-none w-[300px] sm:w-[400px] max-w-[1100px] self-center fade-in-up opacity-0">
          <p>
            Chief of Service at the Centre Intégré Universitaire de Santé et de
            Services Sociaux du Nord de l’Ile de Montréal
          </p>
          <p>
            The Board of Directors of his CIUSSS (Centre Intégré Universitaire
            de Santé et de Services Sociaux
          </p>
          <p>
            The Association des Conseils de Médecins, Dentistes et Pharmaciens
            du Québec (ACMDPQ)
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center max-w-[1200px]">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative w-[147px] h-[80px] sm:w-[193px] sm:h-[105px] lg:w-[200px] lg:h-[109px] m-3 fade-in-up opacity-0"
            >
              <Image
                alt="logo"
                src={image}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <ContactUs
        imageUrl="/resources/Page_2_-_Comment_21.webp"
        message="Send us a message through the portal and we will get back to you within 1 business day"
      />
    </main>
  );
}
