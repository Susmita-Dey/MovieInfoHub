"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieCard from "@/components/MovieCard";

const queryClient = new QueryClient();

export default function Trending() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieCard
        apiName={"Trending"}
        heading={"Trending"}
        showVotes={false}
        showDate={true}
      />
    </QueryClientProvider>
  );
}
