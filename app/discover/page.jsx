"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieCard from "@/components/MovieCard";

const queryClient = new QueryClient();

export default function Discover() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieCard
        apiName={""}
        heading={"Discover"}
        showVotes={true}
        showDate={true}
      />
    </QueryClientProvider>
  );
}
