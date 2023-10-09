"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Image from "next/image";
import { useState, useEffect } from "react";
import supabase from "@/utils/supabase";
import Loader from "@/components/Loader";
import NotLoggedIn from "@/components/NotLoggedIn";

const queryClient = new QueryClient();

export default function Trending() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieCard />
    </QueryClientProvider>
  );
}

function MovieCard() {
  const [signedIn, setSignedIn] = useState();

  useEffect(() => {
    async function getUserData() {
      const { data, error } = await supabase.auth.refreshSession();
      if (data.session) {
        setSignedIn(true);
      } else if (error) {
        setSignedIn(false);
      }
    }
    getUserData();
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetch(`/api/GetMovies`).then((resp) => resp.json()),
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
      <h2 className="text-3xl font-bold text-center my-5">Trending Movies</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 place-items-center gap-4">
        {data
          ? data.results.map((movie) => (
              <div
                key={movie.id}
                className="text-center flex flex-col items-center justify-center bg-slate-800 rounded-md px-3 py-5 min-h-full my-4 mx-2"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  width={100}
                  height={100}
                  className="rounded-md w-80 h-80"
                />
                <div className="mt-4 font-medium">{movie.title}</div>
              </div>
            ))
          : "No movies found"}
      </section>
    </main>
  );
}
