import { Heading, ParagraphWrapper } from "@/components/textContainers";
import Image from "next/image";
import Popup from "@/components/popup";
import { Button } from "@/components/ui/button";
import ServicesHeader from "../components/servicesHeader";
import ServicesImage from "../components/servicesImageContainer";
import ContactUs from "../components/contactUs";
import FooterImage from "../components/footerImage";

export default function PrimaryRhinoplasty() {
  return (
    <main className="flex flex-col items-center py-32 space-y-32 overflow-hidden">
      <ServicesHeader
        smallHeading="Our services"
        italicHeader="Primary Rhinoplasty"
        header="by Dr. Zahi Abou Chacra"
        smallText="Boutique experience. Breathtaking results."
      />
      <ServicesImage ImageUrl="/resources/iStock-1290658063.webp" />
      <div className="flex flex-col w-full items-center max-w-[1100px] px-5 space-y-20 lg:space-y-28">
        <div className="flex flex-col items-center space-y-2 max-w-[600px] lg:max-w-full">
          <h1 className="font-semibold-italic text-4xl lg:text-[2.5rem]">
            How It Works
          </h1>
          <h2 className="font-general-sans-semibold text-3xl sm:text-4xl lg:text-[2.5rem] text-center text-pretty">
            Dr. Zahi Abou Chacra’s SECE™ Philosophy | Surgery
          </h2>
        </div>
        <p className="font-semibold-italic text-2xl max-w-[560px] text-center text-pretty">
          As surgical horizons expand to welcome even the most complex and
          challenging Rhinoplasty cases, Dr. Chacra’s training and what he
          considers lifelong learning in his specialty allows for the idea that
          the following concepts deserve to be mastered, in order, when it comes
          to The Art of Rhinoplasty:
        </p>
        <div className="flex flex-col w-full sm:w-[600px] lg:w-[760px]">
          <div className="flex flex-row sm:flex-row-reverse h-[150px] lg:h-[200px] sm:w-[325px] lg:w-[405px] self-start">
            <div className="flex flex-col items-center h-full">
              <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium-italic text-off-white bg-primary">
                1
              </div>
              <div className="w-[1px] h-[100px] lg:h-[150px] bg-primary" />
            </div>
            <div className="flex flex-col mx-4 sm:mx-7 mb-5">
              <h1 className="font-medium-italic text-2xl mb-2 sm:self-end">
                S - Safty
              </h1>
              <p className="text-sm lg:text-base text-pretty sm:text-end">
                Of the Surgical Techniques being utilized, as well as the
                Surgical “moves” (manipulation) and ultimately, the utmost
                Respect of the Tissues.
              </p>
            </div>
          </div>
          <div className="flex flex-row h-[150px] lg:h-[200px] sm:w-[325px] lg:w-[405px] self-end">
            <div className="flex flex-col items-center h-full">
              <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium-italic text-off-white bg-primary">
                2
              </div>
              <div className="w-[1px] h-[100px] lg:h-[150px] bg-primary" />
            </div>
            <div className="flex flex-col mx-4 sm:mx-7 mb-5">
              <h1 className="font-medium-italic text-2xl mb-2">
                E – Efficiency
              </h1>
              <p className="text-sm text-pretty lg:text-base">
                Of the Operating Surgeon during the Rhinoplasty, as well as
                their Conscientiousness of Time.
              </p>
            </div>
          </div>
          <div className="flex flex-row sm:flex-row-reverse h-[250px] lg:h-[300px] sm:w-[325px] lg:w-[405px] self-start">
            <div className="flex flex-col items-center h-full">
              <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium-italic text-off-white bg-primary">
                3
              </div>
              <div className="w-[1px] h-[200px] lg:h-[250px] bg-primary" />
            </div>
            <div className="flex flex-col mx-4 sm:mx-7 mb-5">
              <h1 className="font-medium-italic text-2xl mb-2 sm:self-end">
                C - Confidence
              </h1>
              <p className="text-sm lg:text-base text-pretty sm:text-end">
                Of the Operating Surgeon in their Techniques, developed through
                years of experience and repetition. The establishment of
                patterns when performing surgery creates models that are
                implemented time, and time again, leading to more predictable
                results and increased assuredness.
              </p>
            </div>
          </div>
          <div className="flex flex-row h-[200px] lg:h-[200px] sm:w-[325px] lg:w-[405px] self-end">
            <div className="flex flex-col items-center h-full">
              <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium-italic text-off-white bg-primary">
                4
              </div>
            </div>
            <div className="flex flex-col mx-4 sm:mx-7 mb-5">
              <h1 className="font-medium-italic text-2xl mb-2">E - Elegance</h1>
              <p className="text-sm text-pretty lg:text-base">
                Of the “Touch” which is personal to the Surgeon in their
                Techniques. Of the “Movement” they exhibit during surgery; their
                dexterity and adroitness when handling surgical instruments.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="text-lg sm:text-[1.3rem] leading-7 max-w-[760px] text-center text-pretty">
            Achieving <b className="text-black font-semibold">Elegance</b>, in
            Dr. Zahi Abou Chacra’s definition of the word, is entirely
            contingent on the mastery of each concept that precedes it—and Dr
            Chacra’s reputation precedes
            <i> him</i>. He is renowned as a Functional Specialist with a
            penchant for Aesthetic Outcomes. The systematic demonstration of his
            unwavering commitment to his{" "}
            <b className="text-black font-semibold">SECE™ Philosophy</b> allows
            for not only his patients, but collaborating surgical staff, as
            well, to benefit from his years of devotion to the embodiment of
            these concepts and what they represent when it comes to the success
            of a Rhinoplasty surgery.
          </p>
          <div className="w-full h-[1px] radial-border" />
        </div>
        <ParagraphWrapper className="flex flex-col space-y-10">
          <h1 className="font-semibold-italic text-4xl lg:text-[2.5rem] mb-10">
            Primary Rhinoplasty
          </h1>
          <div className="flex flex-col w-full space-y-5">
            <Heading className="font-general-sans-medium text-xl md:text-2xl">
              WHAT IS PRIMARY RHINOPLASTY : MEANING{" "}
            </Heading>
            <p>
              Primary rhinoplasty, often referred to as a &quot;nose job&quot;
              is a surgical procedure aimed at reshaping the nose for aesthetic
              or functional purposes. This procedure is typically performed for
              individuals who are seeking to alter the size, shape, or overall
              appearance of their nose. <br />
              <br />
              During primary rhinoplasty, the surgeon may address various
              concerns such as a dorsal hump, wide nostrils, asymmetry, or a
              drooping nasal tip. Additionally, primary rhinoplasty can also
              correct structural issues that may impede breathing, such as a
              deviated septum. <br />
              <br />
              The goal of primary rhinoplasty is to achieve a harmonious balance
              between the nose and other facial features, resulting in a
              natural-looking outcome that enhances the patient&apos;s overall
              facial aesthetics and, in some cases, improves nasal function.
            </p>
          </div>
          <div className="flex flex-col w-full space-y-5">
            <Heading className="font-general-sans-medium text-xl md:text-2xl">
              CONSULTATION PROCESS
            </Heading>
            <p>
              First and foremost, we would like to gain an understanding of what
              you dislike about the appearance of your nose. It is helpful if
              you arrive at your Consultation with a list of 3 major aspects (in
              order of importance) that bother you about your nose. <br />
              <br />
              Our Consultation Process is highly private and personalized. You
              will meet with Dr. Chacra at our Outremont office for a one-on-one
              consultation in a calm environment. <br />
              <br />
              Patients can expect to have a detailed discussion about their
              desired Aesthetic and / or Functional Results in a comfortable,
              no-judgement space. Expectations, questions, and concerns will be
              discussed at this time. <br />
              <br />
              Dr. Chacra utilizes computer imaging and morphing technology to
              help you visualize your possible outcomes. <br />
              <br />
              Should you have screenshots of noses you like, please bring them
              with you to your consultation.
            </p>
          </div>
          <div className="flex flex-col w-full space-y-5">
            <Heading className="font-general-sans-medium text-xl md:text-2xl">
              CHOOSING YOUR SURGEON
            </Heading>
            <p>
              Choosing your Rhinoplasty Surgeon wisely is often the difference
              between a passable surgical outcome, and an excellent one. While
              many plastic surgeons offer Rhinoplasty, few specialize in this
              surgery–much less perform them exclusively. To ensure adequate
              expertise, it is important to select a board-certified Rhinoplasty
              surgeon with training specific to Facial Plastic Surgery who has a
              background in Face and Neck surgery.
            </p>
          </div>
          <div className="flex flex-col w-full space-y-5">
            <Heading className="font-general-sans-medium text-xl md:text-2xl">
              PREPARING FOR A RHINOPLASTY
            </Heading>
            <p>
              Healthy patients in both mind and body are the ideal candidates
              for any surgery. <br /> <br />
              Patients who are pregnant or breastfeeding, taking certain
              medications, or have certain illnesses are not candidates for
              Rhinoplasty.
            </p>
          </div>
        </ParagraphWrapper>
      </div>
      <ContactUs
        imageUrl="/resources/1-primary-thinoplasty.webp"
        header="Your nose is in"
        italicHeader="Skilled Hands"
      />
      <ParagraphWrapper className="self-center flex flex-col px-5 space-y-20">
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl font-semibold-italic">
            OPEN RHINOPLASTY VS CLOSED RHINOPLASTY
          </h1>
          <p>
            Our surgeries are performed at a Private Surgical Centre with the
            patient comfortably under General Anesthesia. <br />
            <br />
            Rhinoplasty can be performed using a variety of techniques,
            depending on the patient’s profile and concerns which are personal
            to them. <br />
            <br />
            Dr. Chacra may choose to perform Rhinoplasty using two types of
            approaches: <br />
            <br />
          </p>
          <ol className="list-decimal ml-5">
            <li>open</li>
            <li>Closed (Endonasal)</li>
          </ol>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl font-semibold-italic">OPEN RHINOPLASTY</h1>
          <div>
            <p>
              During an Open Rhinoplasty, Dr Chacra makes a small incision that
              is placed under the nose, between the two nostril openings
              (columella). This incision allows for the skin and soft tissue of
              the nose to be lifted from the cartilage and bone underneath,
              thereby “opening” the nose. This technique offers a comprehensive
              view of all the structures that can be modified during a
              Rhinoplasty. Generally, the more complex the surgery, the higher
              the chances of having an Open Rhinoplasty. However, surgeon
              preference also plays a role in the decision.
            </p>{" "}
            <br />
            <br />
            <p>
              At Clinique 7, we adapt to patients’ preferences, when possible,
              as well. While the Closed Approach may require less downtime, the
              Open Approach allows for another level of detailed results.
            </p>{" "}
            <br />
            <br />
            <p>
              Each Rhinoplasty is tailored to the individual. Dr. Chacra will
              discuss which approach will be more advantageous in your case
              during your consultation.
            </p>{" "}
            <br />
            <br />
            <p>
              The Open Approach offers the highest level of exposure for the
              most precise results, including lowering the risk for errors that
              could require correction later.
            </p>
            <br />
            <br />
            <h2 className="font-general-sans-medium text-xl uppercase">
              Advantages
            </h2>
            <br />
            <ul className="ml-5 list-disc">
              <li>
                Easier and better exposure of the anatomy and structures within
                the nose.
              </li>
              <li>
                Allows for increased access for the surgeon which is invaluable
                in cases where more work may be needed in specific areas, such
                as the tip of the nose.
              </li>
            </ul>
            <br />
            <h2 className="font-general-sans-medium text-xl uppercase">
              Disadvantages
            </h2>
            <br />
            <ul className="ml-5 list-disc">
              <li>Prolonged healing of the tip area.</li>
              <li>
                Some patients may experience temporarily decreased sensation of
                the skin of the tip of the nose post-operatively. This usually
                resolves within a few weeks.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl font-semibold-italic">
            EXPECTATIONS AND RECOVERY
          </h1>
          <div>
            <p>
              Rhinoplasty patients can expect to take some scheduled time off
              work and other activities (like going to the gym) for about 7-10
              days to rest and recuperate from surgery. After their bandages are
              removed, patients often feel comfortable enough attending classes
              or meetings, seeing friends, etc.
            </p>
            <br />
            <br />
            <p>
              Some minor swelling, light bruising and sensitivity may still be
              present at this time.
            </p>
            <br />
            <br />
            <p>
              It is asked of patients that they be extremely careful following
              their surgery to avoid accidentally having sudden contact of any
              kind with their nose.
            </p>
            <br />
            <br />
            <p>
              Dr. Chacra and the Team at 7 will be there to support you
              throughout each stage of your Recovery. Patients receive detailed
              aftercare instructions. We also offer a 24h concierge service by
              text message.{" "}
            </p>
            <br />
            <br />
            <p>
              Not only do we look forward to seeing our patients at their follow
              up appointments, but every inquiry and suggestion we receive
              allows us to better develop our aftercare protocols for future
              patients. We value your opinion and your experience.
            </p>
            <br />
            <br />
            <b className="text-black font-semibold">
              Recovery time varies from patient to patient based on factors such
              as:
            </b>
            <br />
            <br />
            <ul className="list-disc ml-5">
              <li>The complexity of the surgery.</li>
              <li>Adherence to post-operative instructions.</li>
              <li>The body’s natural healing process.</li>
            </ul>
            <br />
            <br />
            <p>
              Bruising is generally minimal, but can be variable, ranging from
              no bruising at all, to more pronounced bruising. When bruising
              does occur, it usually resolves within the first week following
              surgery.{" "}
            </p>
            <br />
            <br />
            <h2 className="font-general-sans-medium text-xl uppercase">
              GOALS PATIENTS LOOK TO ACHIEVE WITH RHINOPLASTY
            </h2>{" "}
            <br />
            <ul className="list-disc ml-5">
              <li>Improved facial symmetry and overall balance.</li>
              <li>
                Removal of humps, bumps, depressions and other irregularities.
              </li>
              <li>
                A nose that is more in harmony with the rest of the patient’s
                features.
              </li>
              <li>Enhanced breathing and optimized airflow.</li>
              <li>Increased self-confidence and self-image.</li>
              <li>Elevated quality of life.</li>
            </ul>
            <br />
            <br />
            <h2 className="font-general-sans-medium text-xl uppercase">
              RHINOPLASTY: WHAT IS THE SUCCESS RATE LIKE?
            </h2>
            <br />
            <p>
              Very high. During a Rhinoplasty Consultation with Dr Chacra, a
              detailed and personalized discussion with each patient takes
              place. A thorough examination is done to accurately assess the
              difficulty of each individual case and address different concerns.
              A surgical correction is rarely required once the healing period
              has passed.{" "}
            </p>
            <br />
            <br />
            <p>
              Dr. Chacra’s patients can expect very minimal scarring, if any,
              from this technique. Most of our patients do not display a scar
              once they have healed. We will give you tips on how to help ensure
              you experience the least amount of scarring (and bruising)
              possible post-operatively.
            </p>
            <br /> <br />
            <i>
              Dr. Chacra’s knowledge and talent for Rhinoplasty has attracted
              international attention, prompting out-of-town patients to travel
              to Montreal to undergo a wide variety of Rhinoplasty procedures
              with him.{" "}
            </i>{" "}
            <br />
            <br />
            <p>
              If you do not live in The Greater Montreal area, please consult
              our Out of Town tab, or click <a href="/out-of-town">here</a>.
            </p>
            <br />
            <br />
            <h2 className="font-general-sans-medium text-xl uppercase">
              How can we help
            </h2>{" "}
            <br />
            <p>
              The prospect of undergoing any surgery can be daunting. We believe
              that by virtue of being well-informed, our patients experience a
              higher level of satisfaction.
            </p>
            <br />
            <br />
            <b className="text-black font-semibold">
              Our practice is built on these fundamental principles:{" "}
            </b>
            <br />
            <br />
            <p>
              Managing expectations surrounding any cosmetic procedure is
              equally as important, especially today where social media and
              altered images are ever-present. Dr. Chacra has built his
              reputation on his ability to connect with patients beyond the
              consultation process and outside of the operating room.
            </p>
            <br />
            <br />
            <p>
              While his Rhinoplasty practice was very much word-of-mouth for the
              last ten years, the opening of Clinique 7 symbolizes the beginning
              of a new era in which more patients can access Dr. Chacra’s
              skillful artistry through Surgical and Non-surgical treatment
              options. His true mastery lies in his ability to cater to any
              patient who desires to improve the appearance or functionality of
              their nose.
            </p>
            <br />
            <br />
            <p>
              At Clinique 7, we are of the opinion that patients deserve the
              time and care to be heard, evaluated thoroughly, and be ethically
              informed. This is made possible through a methodical, in-depth
              consultation process. A consultation with Dr. Chacra will cover
              everything from a prospective patient’s medical history, to
              preconceived notions one may have about Rhinoplasty, as well as
              expectation management.
            </p>
          </div>
        </div>
      </ParagraphWrapper>
      <FooterImage imageUrl="/resources/primary_bottom_pic.jpg" />
    </main>
  );
}
