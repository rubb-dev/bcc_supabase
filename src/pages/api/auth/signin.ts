import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return redirect("/auth/signin?error=missing");
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session) {
    return redirect("/auth/signin?error=invalid");
  }

  const user = data.user;
  const { access_token, refresh_token } = data.session;

  cookies.set("sb-access-token", access_token, { path: "/", httpOnly: true });
  cookies.set("sb-refresh-token", refresh_token, { path: "/", httpOnly: true });

  if (!user.email_confirmed_at) return redirect("/auth/check-email");

  const { data: profile } = await supabase
    .from("profiles")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile) return redirect("/profile/create");

  return redirect("/dashboard");
};
