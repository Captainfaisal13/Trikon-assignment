"use client";
import Image from "next/image";
import { Montserrat, Righteous } from "next/font/google";
import localfont from "next/font/local";
import { useState } from "react";
import CarouselPage from "./components/carouselPage";
import GameCategories from "./components/gameCategories";
import GameInfo from "./components/gameInfo";
import CallToAction from "./components/callToAction";

const galactus = localfont({
  src: [
    {
      path: "./fonts/Galactus-Medium.ttf",
      weight: "400",
    },
  ],
  variable: "--font-galactus",
});

const helvetica = localfont({
  src: [
    {
      path: "./fonts/Helvetica Neue LT Std 65 Medium.ttf",
      weight: "400",
    },
  ],
  variable: "--font-helvetica",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "600"],
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
  display: "swap",
});

export default function Home() {
  return (
    <main className={`bg-[#141414]`}>
      <CarouselPage
        galactus={galactus}
        montserrat={montserrat}
        righteous={righteous}
      />
      <GameCategories montserrat={montserrat} helvetica={helvetica} />
      <GameInfo montserrat={montserrat} righteous={righteous} />
      <CallToAction
        galactus={galactus}
        montserrat={montserrat}
        righteous={righteous}
      />
    </main>
  );
}
