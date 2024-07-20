import { Heading, ParagraphWrapper } from "@/components/textContainers";
import ServicesHeader from "../components/servicesHeader";
import ServicesImage from "../components/servicesImageContainer";
import { ItalicHeader } from "../components/servicesTextContainers";
import ContactUs from "../components/contactUs";
import FooterImage from "../components/footerImage";

export default function FunctionalRhinoplasty() {
  return (
    <main className="flex flex-col items-center py-32 space-y-28 overflow-hidden">
      <ServicesHeader
        smallHeading="Our services"
        italicHeader="Functional Rhinoplasty"
        header="by Dr. Zahi Abou Chacra"
        smallText="Boutique experience. Breathtaking results."
      />
      <ServicesImage ImageUrl="/resources/functional-hero.jpg" />
      <ParagraphWrapper className="flex flex-col px-5">
        <ItalicHeader>FUNCTIONAL RHINOPLASTY AT A GLANCE</ItalicHeader>
        <p>
          Functional Rhinoplasty differs from Cosmetic Rhinoplasty. The goal of
          this surgery is to alleviate nasal obstruction. While changes in the
          appearance of the nose is not the objective of this procedure,
          Functional Rhinoplasty can be combined with a Cosmetic Rhinoplasty, as
          often is the case. The goal of this combined surgery is then to
          improve upon both breathing, as well as aesthetics.
          <br />
          <br />
        </p>
        <p>
          During a Functional Rhinoplasty, Dr. Chacra corrects nasal passages to
          improve his patients’ breathing by utilizing only the safest
          techniques.
          <br />
          <br />
        </p>
        <ItalicHeader>SEPTOPLASTY AT A GLANCE</ItalicHeader>
        <p>
          <b className="font-semibold text-black">Septoplasty </b>
          is a surgical procedure designed to improve the patient’s breathing by
          straightening the wall inside the nose that divides the nasal passages
          into a right and a left side (nasal septum).
          <br />
          <br />
        </p>
        <p>
          The nasal septum is a thin wall of hyaline cartilage and bone, which
          divides the nostrils. When the septum is not straight, airflow to the
          nose becomes disrupted and breathing difficulties may arise.
          <br />
          <br />
        </p>
        <p>
          Septoplasty is often combined with Rhinoplasty. This maximizes the
          nasal airway after surgery and allows for improved breathing.
          <br />
          <br />
        </p>
        <p>
          It is not uncommon for patients with deviations to choose to improve
          the look of their nose while undergoing Septoplasty. The result of
          Septo-Rhinoplasty is twofold: Patients experience enhanced breathing,
          as well as a softened, more balanced appearance.
        </p>
      </ParagraphWrapper>
      <ContactUs
        imageUrl="/resources/functional-contactus.jpg"
        header="Your nose is in"
        italicHeader="Skilled Hands"
        imageClassName="h-[163px] w-[217px] md:w-[234px] md:h-[312px] lg:w-[319px] lg:h-[425px]"
      />
      <ParagraphWrapper className="flex flex-col px-5">
        <ItalicHeader>
          COSMETIC AND FUNCTIONAL RHINOPLASTY: WHAT’S THE DIFFERENCE?
        </ItalicHeader>
        <p>
          Rhinoplasty is the name for a surgical procedure that changes the
          shape of the nose to achieve more balance and symmetry of the facial
          features. Rhinoplasty can also be performed using procedures to
          improve and treat the function of the nose by correcting obstructed
          breathing. <br />
          <br />
        </p>
        <p>
          Dr. Chacra is a Functional Rhinoplasty Specialist, as well as a
          Cosmetic Rhinoplasty Specialist. Restoring patients’ breathing,
          correcting deviated a septum, and softening or creating a more
          structured nose are some of the reasons why patients choose Clinique 7
          as their Premiere Destination for Rhinoplasty in Montreal.
          <br />
          <br />
        </p>
        <p>
          The surgical techniques used during Rhinoplasty are among the most
          complex and detailed out of all facial procedures. Rhinoplasty is
          often regarded as one of the most difficult cosmetic procedures to
          perform. This is why it is important to choose a surgeon with the
          highest level of training, experience, and skill.
          <br />
          <br />
        </p>
        <p>
          Dr Chacra is a renowned, double-board-certified Rhinoplasty Surgeon
          who is familiar with even the subtlest variations in his patients’
          facial structures.
          <br />
          <br />
        </p>
        <p>
          While some patients seek to undergo Rhinoplasty for reasons related to
          their appearance, others’ main goal is to improve the quality of their
          breathing.
          <br />
          <br />
        </p>
        <p>
          Changes to appearance fall under the Cosmetic category, while
          adjustments to one’s breathing are considered Functional
          modifications. Dr. Chacra has extensive knowledge and experience in
          performing both types of surgeries, making him a true expert in
          Rhinoplasty. He has worked on incredibly complex and difficult cases,
          including trauma reconstruction. Due to his expertise, Dr. Chacra is
          often one of, if not the first choice for referring physicians in
          Montreal.
          <br />
          <br />
        </p>
        <p>
          Someone from our team is available to discuss which of these
          procedures may be right for you. We also offer a nonsurgical option,
          known as Liquid Rhinoplasty.
          <br />
          <br />
        </p>
        <ItalicHeader>
          SEPTOPLASTY AND FUNCTIONAL RHINOPLASTY: WHAT’S THE DIFFERENCE?
        </ItalicHeader>
        <p>
          Both of these surgeries aim to improve breathing function. During a
          Septoplasty, Dr. Chacra will only address the septum, whereas during a
          Functional Rhinoplasty, he sees to all other areas of the nose, as
          well.
          <br />
          <br />
        </p>
        <p>
          The tendency is for Septoplasty to be performed over a Functional
          Rhinoplasty, as the latter is a more extensive surgery, usually only
          required for more complex cases involving complicated nasal
          obstruction.
          <br />
          <br />
        </p>
        <p>
          When a Functional Rhinoplasty is performed, a Septoplasty is often
          combined. Thus, becoming what is known as Functional
          Septo-Rhinoplasty.
          <br />
          <br />
        </p>
        <ItalicHeader>
          NASAL OBSTRUCTION: WHAT ARE SOME COMMON CAUSES?
        </ItalicHeader>
        <Heading className="underline">Anatomical variations</Heading>
        <p>
          One or a combination of the following: Turbinate hypertrophy, septal
          deviation, and nasal valve incompetence (either external or internal
          nasal valve). Anatomical variations can be congenital (born with
          them), developmental (change as the nose grows), traumatic (from an
          accident) or iatrogenic (caused by another surgery).
          <br />
          <br />
        </p>
        <Heading className="underline">Medical causes</Heading>
        <p>
          However, there is a long list of medical causes of nasal obstruction
          that need to be ruled out during examination:
          <br />
          <br />
        </p>
        <ul className="list-disc ml-5">
          <li>Nasal allergies</li>
          <li>Sinusitis</li>
          <li>Nasal polyps</li>
          <li>Benign or malignant masses</li>
        </ul>
        <strong className="text-black font-semibold">
          <br />
          <br />
          NASAL OBSTRUCTION: WHAT CAN BE CORRECTED SURGICALLY?
          <br />
          <br />
        </strong>
        <ul className="list-disc ml-5">
          <li>
            Hypertrophied turbinates on the internal sides of the nose
            (Turbinectomy)
          </li>
          <li>Deviated nasal septum (Septoplasty)</li>
          <li>Internal nasal valve (Functional Rhinoplasty)</li>
          <li>External nasal valve (Functional Rhinoplasty)</li>
        </ul>
        <strong className="font-semibold text-black">
          <br />
          <br />
          SEPTOPLASTY, FUNCTIONAL RHINOPLASTY OR TURBINATE REDUCTION: WHICH IS
          RIGHT FOR ME?
          <br />
          <br />
        </strong>
        <p>
          A thorough consultation, as well as a combination of various
          examination techniques are essential to pose an accurate anatomical
          diagnosis when it comes to nasal obstruction. Once the precise
          anatomical cause or causes are identified, Dr. Chacra will tailor
          either a combination of a Septoplasty, Functional Rhinoplasty and / or
          Turbinate Reduction.{" "}
          <i>
            A standard static nasal exam is never sufficient to pose an accurate
            diagnosis.
          </i>
          <br />
          <br />
        </p>
        <p>
          Nasal Endoscopy (done in-office, on the day of your consultation) can
          help reveal regions of the nasal airway that are not visible with a
          standard nasal speculum exam.
          <br />
          <br />
        </p>
        <p>
          Dynamic observation of the nasal valves while the patient is breathing
          (inspiration) is equally important, as this hints to the potential
          specific location and extent of a nasal valve’s incompetence.
          <br />
          <br />
        </p>
        <p>
          Manipulation and analysis of the nasal valves during inspiration
          allows Dr. Chacra to evaluate the potential success of a Functional
          surgery.
        </p>
      </ParagraphWrapper>
      <FooterImage
        imageUrl="/resources/functional_page_bott.jpg"
        className="w-[284px] h-[284px] sm:w-[497px] sm:h-[372px] md:w-[568px] md:h-[426px]"
      />
    </main>
  );
}
