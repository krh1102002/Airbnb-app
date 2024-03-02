"use client";
import React from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  listingId: string;
  currentUser: SafeUser | null | undefined;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const hasFavourite = false;
  const toggleFavourite = () => {};

  return (
    <div
      onClick={toggleFavourite}
      className="
  relative
  hover:opacity-80
  transition
  cursor:pointer
  "
    >
      <AiOutlineHeart
        size={28}
        className="
fill-white
absolute
-top-[2px]
-right-[2px]
"
      />
      <AiFillHeart
        size={24}
        className={hasFavourite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
