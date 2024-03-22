<<<<<<< HEAD
'use client';
=======
"use client";
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
<<<<<<< HEAD
import ListingCard from "@/app/components/listings/ListingCard";

interface TripsClientProps {
  reservations: SafeReservation[],
  currentUser?: SafeUser | null,
=======
import ListingCard from "../components/listings/listingCard";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
<<<<<<< HEAD
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/reservations/${id}`)
    .then(() => {
      toast.success('Reservation cancelled');
      router.refresh();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);
=======
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
<<<<<<< HEAD
      <div 
=======
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
        {reservations.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
<<<<<<< HEAD
   );
}
 
export default TripsClient;
=======
  );
};

export default TripsClient;
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
