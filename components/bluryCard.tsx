import { cn } from "@/lib/utils";
import React from "react";

interface bluryCardInterface {
  children: React.ReactNode;
  className?: string;
}

export default function BluryCard({ children, className }: bluryCardInterface) {
  return (
    <div
      className={cn(
        "backdrop-blur-3xl rounded-3xl text-white bg-black/25",
        className
      )}
    >
      {children}
    </div>
  );
}
