"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div className={`${mont.className} flex-1 px-5 text-white`}>
      <div className="rounded-3xl border border-slate-400 py-3 px-5 flex items-center">
        <SearchIcon />
        <input
          type="search"
          placeholder="search"
          className="form-input flex-1 bg-transparent rounded-2xl text-white border-none focus:ring-0"
        />
      </div>
    </div>
  );
}
