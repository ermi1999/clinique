import { cn } from "@/lib/utils";

interface TextContainerInterface {
  className?: string;
  children: React.ReactNode;
}
export function LargeTextContainer({
  className,
  children,
}: TextContainerInterface) {
  return (
    <p
      className={cn(
        "w-full text-[2.50rem] max-w-[320px] sm:text-[4.7rem] text-nowrap sm:max-w-[600px] md:text-5xl md:max-w-[670px] lg:text-[4.2rem] lg:max-w-[940px] xl:text-[4.7rem] xl:max-w-[1100px] flex flex-col self-center font-general-sans-medium leading-none -space-y-2 sm:-space-y-4",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SmallHeadingContainer({
  className,
  children,
}: TextContainerInterface) {
  return (
    <h1
      className={cn(
        "text-sm sm:text-base mt-6 font-medium self-center py-5 md:py-10 uppercase",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Heading({ className, children }: TextContainerInterface) {
  return (
    <h2
      className={cn("font-general-sans-medium text-xl md:text-2xl", className)}
    >
      {children}
    </h2>
  );
}

export function LargeItalicText({
  className,
  children,
}: TextContainerInterface) {
  return (
    <span
      className={cn(
        "font-bold-italic text-[2.80rem] sm:text-[5.2rem] md:text-[3.7rem] lg:text-[4.7rem] xl:text-[5.2rem]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function ParagraphWrapper({
  className,
  children,
}: TextContainerInterface) {
  return (
    <div
      className={cn(
        "max-w-[760px] text-lg md:text-[1.3rem] text-pretty",
        className
      )}
    >
      {children}
    </div>
  );
}
