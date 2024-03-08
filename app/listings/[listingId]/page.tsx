import EmptyState from "@/app/EmptyState";
import getCurrentUser from "@/app/actions/getCurerentUser";
import getLisingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import ListingClient from "./ListingClient";

interface IParmas {
  listingId?: string;
}
const ListingPage = async ({ params }: { params: IParmas }) => {
  const listing = await getLisingById(params);
  const currentUser = await getCurrentUser();
  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
