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
    <header className="bg-secondary rounded-3xl p-5">
      <div className="text-red-700 flex justify-center items-center">
        <MovieIcon className="text-5xl" />
      </div>
      <nav className="flex flex-col items-center gap-4 text-2xl list-none mt-4">
        <li>
          <Link href={"/"}>
            <WidgetsIcon
              className={`text-3xl ${
                usePathname() == "/" ? "text-white" : "text-superlight"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link href={"/movies"}>
            <LocalMoviesIcon
              className={`text-3xl ${
                usePathname() == "/movies" ? "text-white" : "text-superlight"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link href={"/tv"}>
            <LiveTvIcon
              className={`text-3xl ${
                usePathname() == "/tv" ? "text-white" : "text-superlight"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link href={"/saved"}>
            <BookmarkIcon
              className={`text-3xl ${
                usePathname() == "/saved" ? "text-white" : "text-superlight"
              }`}
            />
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default Nav;
