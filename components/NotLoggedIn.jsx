import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loader from "./Loader";

export default function NotLoggedIn() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-2xl lg:text-5xl font-bold gap-4 my-5">
      <Image
        src="/primeval-becker.gif"
        alt="primeval-becker-gif"
        width={0}
        height={0}
        className="h-1/2 w-1/2"
      />
      <p> Please login to access this page</p>
      <div className="flex flex-col lg:flex-row gap-2 my-2">
        <p className="text-lg italic">
          P.S. Checking the current session in the background.
        </p>
        <Loader width="w-12" height="h-8" />
      </div>
      <Link href="/login">
        <span className="bg-red-600 text-2xl px-4 py-2 cursor-pointer  rounded-md">
          Login
        </span>
      </Link>
    </div>
  );
}
