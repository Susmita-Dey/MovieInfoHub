"use client";

import { nunito, opensans, roboto } from "@/context/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import supabase from "@/utils/supabase";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    async function getUserData() {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        setSignedIn(true);
      } else if (error) {
        setSignedIn(false);
      }
    }
    getUserData();
  }, []);

  // const { error } = await supabase.auth.signOut()
  const router = useRouter();
  async function handleSignOut() {
    try {
      const res = await supabase.auth.signOut();
      console.log(res);
      toast.success("Logged out successfully");
      setSignedIn(false);
      router.push("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  return (
    <>
      <nav
        className={`${opensans.className} filter drop-shadow-md lg:px-24 h-20 px-2 border-b-2 border-gray-400 relative flex flex-wrap items-center justify-between py-3 mb-3 z-50`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className={`w-full relative flex flex-row justify-center items-center ${nunito.className}`}
            >
              {signedIn === true ? (
                <Link
                  className="lg:text-2xl text-xl text-center font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                  href="/discover"
                >
                  MovieInfoHub
                </Link>
              ) : (
                <Link
                  className="lg:text-2xl text-xl text-center font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="/"
                >
                  MovieInfoHub
                </Link>
              )}
            </div>
            <button
              className="text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <FaTimes className="text-xl font-bold" />
              ) : (
                <FaBars className="text-xl font-bold" />
              )}
            </button>
          </div>
          {signedIn === true ? (
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? "flex bg-black w-full" : " hidden")
              }
            >
              <ul className="flex flex-col justify-center items-center lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="/discover"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="/popular"
                  >
                    Popular
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="/trending"
                  >
                    Trending
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="/top-rated"
                  >
                    Top Rated
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="/upcoming"
                  >
                    Upcoming
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="https://github.com/Susmita-Dey/MovieInfoHub"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub className="text-xl font-bold" />
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col  lg:flex-row list-none">
                {/* <Link href={"/"}> */}
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 rounded-md font-medium bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
                {/* </Link> */}
              </div>
            </div>
          ) : (
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? "flex bg-black w-full" : " hidden")
              }
            >
              <ul className="flex flex-col justify-center items-center  lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="/#popular"
                  >
                    Popular
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="/#trending"
                  >
                    Trending
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                    href="https://github.com/Susmita-Dey/MovieInfoHub"
                  >
                    <FaGithub className="text-xl font-bold" />
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col  lg:flex-row list-none">
                <Link href="/signup">
                  <button className="px-4 py-2 w-full rounded-md font-medium bg-red-600 hover:bg-red-700">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
