"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import TailwindToaster from "@/components/TailwindToaster";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import supabase from "@/utils/supabase";

function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      if (error) {
        console.error(error);
        toast.error(error.message);
        // Handle error (show error message to the user, etc.)
      } else {
        console.log("Successfully logged in!");
        toast.success("Successfully logged in!");
        router.replace("/discover");
      }
    } catch (error) {
      if (error.code === 400) {
        console.log("Incorrect password");
        toast.error("Incorrect password");
      } else {
        console.log("Login failed:", error);
        toast.error(error.message);
      }
    }
  };

  return (
    <section className="text-gray-900 min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col text-center gap-2">
        <h2 className="text-3xl font-bold ">Welcome back!</h2>
        <p className="text-lg text-gray-500">
          Please enter your credentials to login
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full max-w-md">
        <div className="bg-gray-200 py-8 shadow rounded-lg px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-base font-medium">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base"
                  placeholder="example@gmail.com"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="block text-base font-medium">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base"
                  placeholder="abc@123#"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="text-red-500 absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                >
                  {showPassword ? (
                    <BsEyeFill className="text-2xl text-rose-600" />
                  ) : (
                    <BsEyeSlashFill className="text-2xl text-rose-600" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium  bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={loginUser}
              >
                Sign In
              </button>
            </div>

            <div className="flex items-center justify-center">
              <Link
                href="/signup"
                className="text-base font-medium text-red-600 hover:text-red-800 hover:underline hover:underline-offset-4"
              >
                Don&apos;t have an account? Sign Up
              </Link>
            </div>
          </form>
        </div>
        <TailwindToaster />
      </div>
    </section>
  );
}

export default Login;
