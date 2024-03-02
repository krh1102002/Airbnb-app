import prisma from "@/app/libs/prismadb";

export default async function getListing() {
  try {
    const listing = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return listing;
  } catch (err: any) {
    throw new Error(err);
  }
}
