import { montserrat } from "@/context/fonts";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full h-[100vh]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 50, 0.7), rgba(0, 0, 50, 0.7)), url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter:
          "blur(4px) brightness(0.8) contrast(1.2) grayscale(0.5)",
      }}
    >
      <div className="flex flex-col items-center gap-4 justify-center w-full h-full">
        <h2
          className={`${montserrat.className} lg:text-6xl text-4xl font-bold`}
        >
          Discover the Magic of Movies
        </h2>
        <p className="text-2xl font-medium">
          Explore a world of entertainment. Find information about your favorite
          movies, actors, and directors.
        </p>
        <Link
          href={"/login"}
          className="bg-red-600 hover:bg-red-800  text-lg font-bold py-4 px-6 rounded-md mt-4"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
