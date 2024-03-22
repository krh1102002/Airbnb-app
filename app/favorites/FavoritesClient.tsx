import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
<<<<<<< HEAD
import ListingCard from "@/app/components/listings/ListingCard";

interface FavoritesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
=======
import ListingCard from "../components/listings/listingCard";
interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
<<<<<<< HEAD
  currentUser
}) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you favorited!"
      />
      <div 
=======
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited!" />
      <div
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
<<<<<<< HEAD
   );
}
 
export default FavoritesClient;
=======
  );
};

export default FavoritesClient;
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
