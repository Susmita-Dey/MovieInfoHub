"use client";

import truncateText from "@/utils/truncateText";
import Image from "next/image";
import NotLoggedIn from "./NotLoggedIn";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";
import supabase from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function MovieCard({ heading, apiName, showDate, showVotes }) {
  const [signedIn, setSignedIn] = useState();

  useEffect(() => {
    async function getUserData() {
      const { data, error } = await supabase.auth.getUser();
      if (data.session) {
        window.location.reload();
        setSignedIn(true);
      } else if (error) {
        setSignedIn(false);
        toast.error("Please sign in to continue.");
      }
    }
    getUserData();
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetch(`/api/${apiName}`).then((resp) => resp.json()),
  });

  if (isLoading) {
    return (
      <div className="text-2xl  w-full h-screen flex flex-row items-center justify-center">
        <Loader /> Loading...
      </div>
    );
  }

  if (signedIn === false) {
    return (
      <div className=" w-full min-h-full flex items-center justify-center">
        <NotLoggedIn />
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-center my-5">{heading} Movies</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 place-items-center gap-4">
        {data
          ? data.results.map((movie) => (
              <div
                key={movie.id}
                className="text-center flex flex-col items-center justify-center bg-slate-800 rounded-md px-5 py-3 w-80 min-h-full my-4 mx-2 transform translate-y-4  transition-transform duration-500 ease-in-out delay-150 hover:opacity-100 hover:translate-y-0"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  width={200}
                  height={200}
                  className="rounded-md w-full h-full"
                />
                <h3 className="mt-4 text-lg font-semibold cursor-pointer">
                  {movie.title}
                </h3>
                <p className="mt-4 text-base font-mono font-normal">
                  {truncateText(movie.overview, 20)}
                </p>
                <hr className="border w-full border-white my-4 text-base font-normal gap-2" />
                {showDate && (
                  <p className="flex flex-row my-2 text-base font-normal">
                    <span className="font-semibold">Release Date:&nbsp;</span>{" "}
                    {movie.release_date}
                  </p>
                )}
                <div className="flex flex-row text-base font-normal gap-2">
                  <p className="flex flex-row text-base font-normal">
                    <span className="font-semibold">Ratings:&nbsp;</span>{" "}
                    {movie.vote_average}/10
                  </p>
                  {showVotes && (
                    <p className="flex flex-row text-base font-normal">
                      <span className="font-semibold">Vote Count:&nbsp;</span>{" "}
                      {movie.vote_count}
                    </p>
                  )}
                </div>
              </div>
            ))
          : "No movies found"}
      </section>
    </main>
  );
}

export default MovieCard;
