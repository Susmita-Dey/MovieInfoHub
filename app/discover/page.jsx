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

export default function Discover() {
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
      const { data, error } = await supabase.auth.getSession();
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
      <div className="text-2xl text-white w-full h-screen flex flex-row items-center justify-center">
        <Loader /> Loading...
      </div>
    );
  }

  if (signedIn === false) {
    return (
      <div className="text-white w-full min-h-full flex items-center justify-center">
        <NotLoggedIn />
      </div>
    );
  }

  return (
    <main className="w-full text-white flex flex-col gap-4">
      <section className="grid grid-cols-4 place-items-center gap-4">
        {data
          ? data.results.map((movie) => (
              <div
                key={movie.id}
                className="text-center flex flex-col items-center justify-center"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  width={100}
                  height={100}
                />
                <div className="text-white max-w-[20ch]">{movie.title}</div>
              </div>
            ))
          : null}
      </section>
    </main>
  );
}
