import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString()?.trim();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return redirect("/auth/register?error=missing");
  }

  const origin = new URL(request.url).origin;

  const { error: signUpErr } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${origin}/profile/create` },
  });

  if (signUpErr) {
    // si el correo ya existe, puedes mapearlo a ?error=exists si quieres
    if (signUpErr.message?.toLowerCase().includes("already registered")) {
      return redirect("/auth/register?error=exists");
    }
    console.error("Error registrando:", signUpErr.message);
    return redirect("/auth/register?error=server");
  }

  // Soft session: recordar email mientras confirma
  cookies.set("pending-email", email, {
    path: "/",
    maxAge: 60 * 30,
    sameSite: "lax",
    httpOnly: false,
    secure: true,
  });

  return redirect("/auth/check-email");
};
