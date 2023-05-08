"use client";

import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

function Nav({}: Props) {
  usePathname();
  return (
    <header className="w-full lg:w-[5%] bg-secondary rounded-3xl p-5 flex flex-row lg:flex-col">
      <div className="text-red-700 flex justify-center items-center">
        <MovieIcon className="text-2xl lg:text-5xl" />
      </div>
      <nav className="flex flex-row lg:flex-col items-center gap-4 text-2xl list-none ml-5 lg:ml-0 lg:mt-4">
        <li>
          <Link href={"/"} className="flex justify-center items-center">
            <WidgetsIcon
              className={`text-xl lg:text-3xl ${
                usePathname() == "/"
                  ? "text-white"
                  : "text-superlight hover:text-white"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link href={"/movies"} className="flex justify-center items-center">
            <LocalMoviesIcon
              className={`text-xl lg:text-3xl ${
                usePathname() == "/movies"
                  ? "text-white"
                  : "text-superlight hover:text-white"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link href={"/tv"} className="flex justify-center items-center">
            <LiveTvIcon
              className={`text-xl lg:text-3xl ${
                usePathname() == "/tv"
                  ? "text-white"
                  : "text-superlight hover:text-white"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link href={"/saved"} className="flex justify-center items-center">
            <BookmarkIcon
              className={`text-xl lg:text-3xl ${
                usePathname() == "/saved"
                  ? "text-white"
                  : "text-superlight hover:text-white"
              }`}
            />
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default Nav;
