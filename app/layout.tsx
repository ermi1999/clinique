import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const cabinetRegular = localFont({
  src: "../public/fonts/cabinet/CabinetGrotesk-Regular.otf",
  variable: "--cabinet-regular",
});
const cabinetBold = localFont({
  src: "../public/fonts/cabinet/CabinetGrotesk-Bold.otf",
  variable: "--cabinet-bold",
});
const cabinetLight = localFont({
  src: "../public/fonts/cabinet/CabinetGrotesk-Light.otf",
  variable: "--cabinet-light",
});
const cabinetMedium = localFont({
  src: "../public/fonts/cabinet/CabinetGrotesk-Medium.otf",
  variable: "--cabinet-medium",
});
const cabinetThin = localFont({
  src: "../public/fonts/cabinet/CabinetGrotesk-Thin.otf",
  variable: "--cabinet-thin",
});
const generalSansRegular = localFont({
  src: "../public/fonts/general_sans/GeneralSans-Regular.otf",
  variable: "--generalsans-regular",
});
const generalSansBold = localFont({
  src: "../public/fonts/general_sans/GeneralSans-Bold.otf",
  variable: "--generalsans-bold",
});
const generalSansSemiBold = localFont({
  src: "../public/fonts/general_sans/GeneralSans-Semibold.otf",
  variable: "--generalsans-semibold",
});
const generalSansMedium = localFont({
  src: "../public/fonts/general_sans/GeneralSans-Medium.otf",
  variable: "--generalsans-medium",
});
const generalSansLight = localFont({
  src: "../public/fonts/general_sans/GeneralSans-Light.otf",
  variable: "--generalsans-light",
});

const italic = localFont({
  src: "../public/fonts/Cormorant-Italic.ttf",
  variable: "--italic",
});

const mediumItalic = localFont({
  src: "../public/fonts/Cormorant-MediumItalic.ttf",
  variable: "--medium-italic",
});
const semiboldItalic = localFont({
  src: "../public/fonts/Cormorant-SemiBoldItalic.ttf",
  variable: "--semibold-italic",
});
const boldItalic = localFont({
  src: "../public/fonts/Cormorant-BoldItalic.ttf",
  variable: "--bold-italic",
});

export const metadata: Metadata = {
  title: "Clinique7",
  description: "Rhinoplasty Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabinetRegular.className} ${cabinetThin.variable}
         ${cabinetBold.variable} ${cabinetMedium.variable} ${generalSansRegular.variable}
         ${generalSansBold.variable} ${cabinetLight.variable} ${generalSansSemiBold.variable} 
         ${generalSansMedium.variable} ${generalSansLight.variable} 
        ${italic.variable} ${mediumItalic.variable} ${semiboldItalic.variable} ${boldItalic.variable}
         overflow-hidden overflow-y-auto bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
