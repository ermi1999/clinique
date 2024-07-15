import { ParagraphWrapper } from "@/components/textContainers";
import ServicesHeader from "../components/servicesHeader";
import ServicesImage from "../components/servicesImageContainer";
import { ItalicHeader } from "../components/servicesTextContainers";
import ContactUs from "../components/contactUs";
import FooterImage from "../components/footerImage";

export default function LiuidRhinoplasty() {
  return (
    <main className="flex flex-col items-center py-32 space-y-28">
      <ServicesHeader
        smallHeading="Our services"
        italicHeader="Liquid Rhinoplasty"
        header="by Dr. Zahi Abou Chacra"
        smallText="Boutique experience. Breathtaking results."
      />
      <ServicesImage ImageUrl="/resources/iStock-1371802568.jpg.webp" />
      <ParagraphWrapper className="flex flex-col px-5">
        <ItalicHeader>LIQUID RHINOPLASTY AT A GLANCE</ItalicHeader>
        <p>
          <b className="text-black font-semibold">Liquid Rhinoplasty</b>, also
          known as{" "}
          <b className="font-semibold text-black">Non-Surgical Rhinoplasty</b>,
          is a same-day procedure, done in-office, without the use of general
          anesthesia. Using Hyaluronic Acid (Filler) injections, Dr. Chacra can
          correct asymmetries of the nose and soften the appearance of the face.
          <br />
          <br />
        </p>
        <p>
          Patients who present with certain nasal proportions (i.e., low bridge)
          have small humps or bumps on the bridge of their nose, minor asymmetry
          of their nose or uneven nostrils are typically good candidates for
          this procedure. Liquid Rhinoplasty can also make the nose appear
          smaller by camouflaging a dorsal hump.
          <br />
          <br />
        </p>
        <p>
          Dermal Fillers are used to sculpt a more aesthetic nose that perfectly
          suits the face. Liquid Rhinoplasty may be combined with other cosmetic
          treatments to achieve the overall look that patients desire.
        </p>
      </ParagraphWrapper>
      <ContactUs
        imageUrl="/resources/liquid-rhinoplasty-contactus.jpg"
        header="Your nose is in"
        italicHeader="Skilled Hands"
      />
      <ParagraphWrapper className="flex flex-col px-5">
        <p>
          Dr. Chacra is a Facial Balancing Specialist. During the consultation
          process, he may recommend complementary treatments that will enhance
          the results of a Liquid Rhinoplasty.
          <br />
          <br />
        </p>
        <p>
          This procedure is for cosmetic purposes only—its sole purpose is to
          harmonize the face using symmetry. Liquid Rhinoplasty is a good
          alternative to Surgical Rhinoplasty in selected patients.
          <br />
          <br />
        </p>
        <p>
          The cost of a Liquid Rhinoplasty is a fraction of that of a Surgical
          Rhinoplasty. The procedure can often be done on the same day as the
          Consultation.
          <br />
          <br />
        </p>
        <p>
          The results of Liquid Rhinoplasty typically last up to 12 months.{" "}
          <br />
          <br />
        </p>
        <p>
          Hyaluronic Acid Fillers are not permanent filling agents. However, in
          some patients, the results can last longer; up to 18 months and
          beyond. This procedure promotes collagen formation which allows for a
          more permanent result over time. Generally, the more times this
          treatment is performed, the less product is needed. After several
          sessions, some patients can have results that appear to have become
          permanent.
        </p>
      </ParagraphWrapper>
      <FooterImage
        imageUrl="/resources/liquid_rhino_page_bo.jpg"
        className="w-[284px] h-[284px] sm:w-[497px] sm:h-[372px] md:w-[568px] md:h-[426px]"
      />
    </main>
  );
}
