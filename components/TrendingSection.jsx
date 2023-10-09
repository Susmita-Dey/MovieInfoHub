"use client";
import React, { useState, useEffect } from "react";
import { montserrat } from "@/context/fonts";
import Image from "next/image";

function TrendingSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slideUpClass = scrollY > 200 ? "translate-y-0" : "translate-y-10";
  const slideFromBottomClass =
    scrollY > 200 ? "translate-y-0" : "translate-y-10";

  return (
    <section
      className="min-h-full flex flex-col py-12 sm:px-6 lg:px-8 overflow-hidden"
      id="trending"
    >
      <div
        className={`flex flex-col md:flex-row justify-between items-center gap-8 md:px-16 px-5 transform ${slideUpClass} transition duration-1000 ease-in-out`}
      >
        <div className="flex flex-col lg:w-1/2 space-y-5 lg:text-start text-center">
          <h2
            className={`${montserrat.className} text-2xl md:text-5xl font-bold tracking-wide leading-relaxed`}
          >
            Enjoy Trending Movies With Friends & Family
          </h2>
          <p className="text-lg font-normal leading-relaxed">
            Explore the most trending movies on the platform. Find information
            about your favorite movies, actors, and directors. 🍿
          </p>
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-4 transform ${slideFromBottomClass} transition duration-1000 ease-in-out`}
        >
          <Image
            src="/oppenheimer.jpeg"
            width={400}
            height={400}
            className="rounded-md w-full h-full"
            alt="popular-movie"
          />
        </div>
      </div>
    </section>
  );
}

export default TrendingSection;
