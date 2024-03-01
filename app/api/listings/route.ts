import getCurrentUser from "@/app/actions/getCurerentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  console.log("===currentUser", currentUser);

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  console.log("===body", body);

  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  try {
    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });
    return NextResponse.json(listing);
  } catch (error) {
    console.error("Prisma Error:", error);
    return NextResponse.error();
  }
}
