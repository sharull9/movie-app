"use client";

import Image from "next/image";
import { useState } from "react";
import MovieIcon from "@mui/icons-material/Movie";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface Props {
  title?: string;
  year?: string;
  image: string;
  category?: string;
  rated?: string;
}

function Card({ title, year, image, category, rated }: Props) {
  const [itemSaved, setItemSaved] = useState(false);

  return (
    <div className="relative w-full h-[250px] p-5 rounded-xl overflow-hidden flex flex-col-reverse">
      <div className="relative z-10 w-full">
        <div className="flex gap-3">
          <p>{year}</p>
          <div className="flex">
            <MovieIcon />
            <p>{category}</p>
          </div>
          <p>{rated}</p>
        </div>
        <h3 className="text-2xl">{title}</h3>
      </div>

      <button
        className="absolute right-5 top-5 z-10"
        onClick={() => {
          setItemSaved(!itemSaved);
        }}
      >
        {itemSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </button>

      <Image
        src={image}
        alt=""
        fill
        className="absolute inset-0 object-cover rounded-xl z-0"
      />
    </div>
  );
}

export default Card;
