"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieCard from "@/components/MovieCard";

const queryClient = new QueryClient();

export default function Upcoming() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieCard
        apiName={"getUpcomingMovies"}
        heading={"Upcoming"}
        showVotes={false}
        showDate={false}
      />
    </QueryClientProvider>
  );
}
