import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function PopupContent() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:space-x-10 space-y-5 lg:space-y-0 justify-center items-center lg:items-start">
      <p className="font-semibold w-80 lg:w-48 text-base md:text-lg leading-none text-center lg:text-start">
        Send us a message through the portal and we will get back to you within
        1 business day
      </p>
      <div className="flex flex-col space-y-3 lg:space-y-5 justify-center items-center w-80">
        <Input type="text" placeholder="Full Name" className="h-14" />
        <Input placeholder="Phone Number" className="h-14" />
        <Input type="email" placeholder="Email" className="h-14" />
        <p className="font-semibold leading-5">
          How long have you been thinking about making changes to the appearance
          of your nose?
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
  );
}
