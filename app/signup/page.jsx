"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import TailwindToaster from "@/components/TailwindToaster";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import supabase from "@/utils/supabase";

function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup users
  const signupUser = async (e) => {
    e.preventDefault();

    // Check email format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Check password length
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    // Check password strength using a regular expression
    const passwordStrengthRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$/;

    if (!passwordStrengthRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    } else {
      toast.success("Woah!! Your password is strong. 💪");
    }

    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.error(error);
        // Handle error (show error message to the user, etc.)
      } else {
        console.log("Signup successful:", user);
        toast.success("Signup successful. 🎉");
        // Redirect the user to discover page
        router.push("/discover");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error(error.message);
    }
  };
  return (
    <section className="text-gray-900 min-h-full flex flex-col justify-center items-center py-12 px-6 lg:px-8">
      <div className="text-center text-3xl font-bold text-white">Sign Up</div>
      <div className="mt-8 sm:mx-auto sm:w-full max-w-md">
        <div className="bg-gray-300 py-8 shadow rounded-lg px-8">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  placeholder="example@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  placeholder="abc@123#"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
              <span className="text-sm font-medium text-red-950 mt-1">
                * Password must be atleast 8 characters long
              </span>
            </div>

            <div>
              <button
                type="submit"
                className="w-full text-white flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 "
                onClick={signupUser}
              >
                Create account
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <Link
                  href="/login"
                  className="font-medium text-red-600 hover:text-red-800 hover:underline hover:underline-offset-4"
                >
                  Already have an account, Sign In
                </Link>
              </div>
            </div>
          </form>

          {/* <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-red-500" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-300 text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
        <TailwindToaster />
      </div>
    </section>
  );
}

export default Signup;
