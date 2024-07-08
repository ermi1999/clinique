import BluryCard from "./bluryCard";

export default function WorkProcess() {
  return (
    <section className="w-full">
      <div className="absolute z-30 w-full px-2">
        <div className="w-full bg-white rounded-3xl flex flex-col font-general-sans-medium items-center justify-center space-y-10 p-10">
          <p className="w-full text-center text-balance text-3xl max-w-[300px] leading-none">
            As great work is often the culmination{" "}
            <span className="font-bold-italic text-[2rem] leading-none">
              of
            </span>{" "}
            both applied skill and wonder, so is{" "}
            <span className="font-bold-italic text-[2rem] leading-none">
              The Art
            </span>{" "}
            of Rhinoplasty
          </p>
          <img
            src="/resources/cb05547e-6381-4fac-b.webp"
            alt="beautiful women"
            className="w-[250px] h-[300px] object-cover object-center rounded-3xl"
          />
        </div>
      </div>
      <div className="absolute mt-[700px] z-30 bg-[url(/resources/Frame_198_2.webp)] h-[764px] w-full bg-cover">
        {/* <BluryCard className="h-full w-full">Something</BluryCard> */}
      </div>
      {/* <div className="absolute w-full h-[793px] mt-96 object-cover object-center z-20 bg-black" /> */}
    </section>
  );
}
