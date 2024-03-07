import { SafeUser } from "./../../types/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import userLoginModal from "./userLoginModal";
import toast from "react-hot-toast";

interface IUseFavourite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavourite) => {
  const router = useRouter();
  const loginModal = userLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavourite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!currentUser) {
        return loginModal.onOpen();
      }
      try {
        let request;
        if (hasFavorited) {
          request = () => axios.delete(`/api/favourites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favourites/${listingId}`);
        }
        await request();
        router.refresh();
        toast.success("Success");
      } catch (err) {
        toast.error("Something went wrong");
      }
    },
    [currentUser, hasFavorited, listingId, router, loginModal]
  );
  return { hasFavorited, toggleFavourite };
};

export default useFavorite;
