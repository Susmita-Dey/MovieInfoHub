"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabaseConfig from "../../supabase/supabase";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center my-10 mx-5">
      <div className=" border border-white rounded-md w-80 min-h-full my-10 px-12 py-10 flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl text-start">Create an account</h2>
        <Auth
          supabaseClient={supabaseConfig.supabase}
          view="sign_up"
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          showLinks={false}
          providers={[]}
          redirectTo="http://localhost:3000/auth/callback"
        />
        <Link href={"/MagicLink"} className="text-green-300 text-sm my-5">
          Sign Up with Magic link in one click
        </Link>
      </div>
      <p className="flex flex-row gap-2 my-4">
        Already have an account?{" "}
        <Link href={"../login"} className="text-green-400">
          Login
        </Link>
      </p>
    </div>
  );
}
