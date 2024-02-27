"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import { MdOutlineVilla } from "react-icons/md";
import {
  GiBarn,
  GiBoatFishing,
  GiCastle,
  GiCaveEntrance,
  GiDesert,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },

  {
    label: "CountrySide",
    icon: TbMountain,
    description: "This property is in countryside",
  },

  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },

  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on a isLand",
  },

  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to lake",
  },

  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities",
  },

  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is modern",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property has camping activities",
  },
  {
    label: "Desert",
    icon: GiDesert,
    description: "This property is in desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in the barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is Luxirious",
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) return null;
  return (
    <Container>
      <div
        className="
      pt-2 flex flex-row items-center justify-between overflow-x-auto"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
