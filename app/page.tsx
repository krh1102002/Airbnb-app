import EmptyState from "./EmptyState";
import getCurrentUser from "./actions/getCurerentUser";
import getListing from "./actions/getListing";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import ListingCard from "./components/listings/listingCard";

export default async function Home() {
  const isEmpty = true;
  const currentUser = await getCurrentUser();
  const listing = await getListing();
  if (listing.length === 0) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState showReset />
        </Container>
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="
    pt-8
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
    gap:8
    "
        >
          {listing.map((list) => {
            return (
              <ListingCard
                data={list}
                currentUser={currentUser}
                key={list.id}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
