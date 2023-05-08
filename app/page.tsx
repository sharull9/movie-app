"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Montserrat } from "next/font/google";
import Card from "./components/Card";
import { data } from "../app/data/apiData";
import { useState } from "react";

const mont = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const list = data;
  return (
    <div
      className={`${mont.className} flex-1 lg:px-5 text-white overflow-x-hidden overflow-y-scroll`}
    >
      <div className="lg:flex rounded-3xl w-full border mt-2 border-slate-400 lg:py-3 px-3 items-center">
        <SearchIcon />
        <input
          type="search"
          placeholder="search"
          className="form-input flex-1 bg-transparent rounded-2xl text-white border-none focus:ring-0"
        />
      </div>
      <section className="overflow-hidden">
        <div className="flex gap-3 flex-col py-5 lg:flex-row lg:overflow-x-scroll">
          {list.map(({ title, year, image, category, rated }, id) => {
            id + 1;
            return (
              <div key={id} className="min-w-[400px]">
                <Card
                  title={title}
                  year={year}
                  image={image}
                  category={category}
                  rated={rated}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
