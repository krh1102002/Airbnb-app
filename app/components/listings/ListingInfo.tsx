"use client";

import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";
import useCountries from "../hooks/UseCountries";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser | null;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  category:
    | {
        label: string;
        icon: IconType;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const cordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div
          className="text-xl
    font-semibold
    flex
    flex-row
    items-center
    gap-2
    "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center text-neutral-500 gap-4 font-light">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />

      {category && (
        <ListingCategory
          label={category.label}
          description={category.description}
          icon={category.icon}
        />
      )}

      <hr />
      <div className="text-lg font-light text-neutral-500 ">{description}</div>
      <hr />
      <Map center={cordinates} />
    </div>
  );
};

export default ListingInfo;
