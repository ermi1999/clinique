"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Button from "./button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import PopupContent from "./popupContent";
import { cn } from "@/lib/utils";

interface PopupInterface {
  className?: string;
}

export default function Popup({ className }: PopupInterface) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className={cn("text-xs md:text-base shadow-sm", className)}>
            Book a consultation
          </Button>
        </DialogTrigger>
        <DialogContent className="dialog flex items-center justify-center flex-col w-[75vw] xl:w-[55vw] space-y-5">
          <DialogHeader className="text-5xl font-general-sans-medium flex flex-row">
            <span className="animate-fadeinleft">We love</span>{" "}
            <span className="font-bold-italic ml-4 text-7xl animate-fadeinright">
              your face
            </span>
          </DialogHeader>
          <PopupContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className={cn("text-xs md:text-base shadow-sm", className)}>
          Book a consultation
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex items-center space-y-1 px-5 h-full max-h-[95vh] pb-3">
        <DrawerHeader className="text-5xl font-general-sans-medium flex flex-col w-80">
          <span className="w-full text-left -my-7 animate-fadeinleft">
            We love
          </span>
          <span className="font-bold-italic text-5xl w-full text-end leading-none animate-fadeinright">
            your face
          </span>
        </DrawerHeader>
        <PopupContent />
      </DrawerContent>
    </Drawer>
  );
}
