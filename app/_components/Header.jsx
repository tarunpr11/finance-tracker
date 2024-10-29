"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center shadow-sm rounded-bl-lg rounded-br-lg">
      <div className="flex flex-row items-center">
        <span
          className="font-bold text-3xl"
          style={{ color: "rgb(79, 104, 181)" }}
        >
          BetaSid Finance
        </span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <button
              class="rounded-full py-3 px-3"
              style={{ backgroundColor: "rgb(173, 186, 218)" }}
            >
              Get Started
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
