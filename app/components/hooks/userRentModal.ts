import { create } from "zustand";

interface UserRentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const UserRentModal = create<UserRentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false });
  },
}));

export default UserRentModal;
