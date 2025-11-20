import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const formData = await request.formData();
  let email = formData.get("email")?.toString();

  // fallback a la cookie si no viene en el form
  if (!email) {
    email = cookies.get("pending-email")?.value || "";
  }

  if (!email) {
    return redirect("/auth/check-email");
  }

  const origin = new URL(request.url).origin;

  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
    options: { emailRedirectTo: `${origin}/profile/create` },
  });

  if (error) {
    console.error("Error reenviando verificación:", error.message);
    return redirect("/auth/check-email"); // podrías añadir ?error=server si quieres mostrar aviso
  }

  return redirect("/auth/check-email?resent=1");
};
