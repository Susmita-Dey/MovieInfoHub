import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import EditProfile from "./EditProfile";

import supabaseConfig from "../supabase/supabase";

export default async function Account() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient(supabaseConfig, {
    cookieOptions: () => cookieStore,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <EditProfile session={session} />;
}
