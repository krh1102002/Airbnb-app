"use client";

import { SafeUser } from "@/app/types";
import React from "react";
import useCountries from "../hooks/UseCountries";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  currentUser?: SafeUser | null;
  id: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  locationValue,
  currentUser,
  id,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subTitle={` ${location?.region}, ${location?.label}`}
      />
      <div
        className="w-full
      h-[60vh]
      overflow-hidden
      rounded-xl
      relative
      
      
      "
      >
        <Image
          className="object-cover w-full"
          fill
          alt="Image"
          src={imageSrc}
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
