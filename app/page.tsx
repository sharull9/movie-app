"use client";

import { Montserrat } from "next/font/google";


const mont = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return <div className={`${mont.className} col-span-9`}></div>;
}
