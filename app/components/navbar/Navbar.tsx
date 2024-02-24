"use client";
import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import React from "react";
import { SafeUser } from "@/app/types";

interface NavbarUser {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarUser> = ({ currentUser }) => {
  return (
    <div className="sticky w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
