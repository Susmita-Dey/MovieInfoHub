"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieCard from "@/components/MovieCard";

const queryClient = new QueryClient();

export default function Popular() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieCard
        apiName={"getPopularMovies"}
        heading={"Popular"}
        showVotes={false}
        showDate={true}
      />
    </QueryClientProvider>
  );
}
