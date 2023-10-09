"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieCard from "@/components/MovieCard";

const queryClient = new QueryClient();

export default function TopRated() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieCard
        apiName={"TopRated"}
        heading={"Top Rated"}
        showVotes={true}
        showDate={false}
      />
    </QueryClientProvider>
  );
}
