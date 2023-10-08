"use client";
import { Auth } from "@supabase/auth-ui-react";
import React from "react";
import supabaseConfig from "../../supabase/supabase";

export default function MagicLink() {
  return (
    <div>
      <Auth
        supabaseClient={supabaseConfig.supabase}
        view="magic_link"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
        providers={[]}
        redirectTo="http://localhost:3000/auth/callback"
      />
    </div>
  );
}
