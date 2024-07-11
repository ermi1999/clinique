import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ContactUsInterface {
  imageUrl: string;
  message: string;
  className?: string;
}

export default function ContactUs({
  imageUrl,
  message,
  className,
}: ContactUsInterface) {
  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row h-full w-full md:w-[85%] lg:w-full px-1 md:px-7 my-14 md:my-20",
        className
      )}
    >
      <img
        alt="beautiful women"
        className="rounded-2xl sm:rounded-3xl md:rounded-5xl w-full lg:w-[800px] h-[600px] md:h-[800px] lg:h-auto object-cover object-center"
        src={imageUrl}
      />
      <div className="items-center justify-center bg-white rounded-2xl sm:rounded-3xl md:rounded-5xl flex flex-col w-full pt-4 pb-20 xl:pb-0">
        <h1 className="text-5xl md:text-7xl xl:text-[5.5rem] font-general-sans flex flex-col w-full max-w-[300px] md:max-w-[450px] md:w-[60%] leading-none py-10 xl:py-10">
          <span className="w-full text-left -mb-5 md:-mb-8">We love</span>
          <span className="font-semibold-italic text-6xl md:text-8xl xl:text-8xl w-full text-end leading-none">
            your face
          </span>
        </h1>
        <div className="w-full flex flex-col xl:flex-row xl:space-x-10 space-y-5 xl:space-y-0 justify-center items-center xl:items-start">
          <p className="font-semibold w-80 xl:w-48 text-base md:text-xl leading-none text-center xl:text-start">
            {message}
          </p>
          <div className="flex flex-col space-y-3 justify-center items-center w-80">
            <Input type="text" placeholder="Full Name" className="h-14" />
            <Input placeholder="Phone Number" className="h-14" />
            <Input type="email" placeholder="Email" className="h-14" />
            <p className="font-semibold leading-5">
              How long have you been thinking about making changes to the
              appearance of your nose?
            </p>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-row w-full space-x-5 items-center">
                <Input
                  type="radio"
                  id="radio_1"
                  value="Less than a month"
                  className="h-4 w-4"
                />
                <label htmlFor="radio_1">Less than a month</label>
              </div>
              <div className="flex flex-row w-full space-x-5 items-center">
                <Input
                  type="radio"
                  id="radio_2"
                  value="1 - 3 month"
                  className="h-4 w-4"
                />
                <label htmlFor="radio_2">1 - 3 month (space)</label>
              </div>
              <div className="flex flex-row w-full space-x-5 items-center">
                <Input
                  type="radio"
                  id="radio_3"
                  value="3 - 6 month"
                  className="h-4 w-4"
                />
                <label htmlFor="radio_3">3 - 6 month (space)</label>
              </div>
              <div className="flex flex-row w-full space-x-5 items-center">
                <Input
                  type="radio"
                  id="radio_4"
                  value="6 month to one year"
                  className="h-4 w-4"
                />
                <label htmlFor="radio_4">6 month to one year</label>
              </div>
              <div className="flex flex-row w-full space-x-5 items-center">
                <Input
                  type="radio"
                  id="radio_5"
                  value="1 year +"
                  className="h-4 w-4"
                />
                <label htmlFor="radio_4">1 year +</label>
              </div>
            </div>
            <div className="flex flex-row w-full space-x-5 items-center cursor-pointer">
              <Input type="checkbox" id="checkbox" className="h-4 w-4" />
              <label htmlFor="checkbox">
                I agree to the processing of personal data
              </label>
            </div>
            <div className="w-full flex justify-center items-center lg:justify-start">
              <Button type="submit" className="rounded-full">
                Book a consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
