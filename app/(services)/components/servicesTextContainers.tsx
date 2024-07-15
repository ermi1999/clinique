import { cn } from "@/lib/utils";

export function ItalicHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        "font-semibold-italic text-4xl lg:text-[2.5rem] mb-5",
        className
      )}
    >
      {children}
    </h1>
  );
}
