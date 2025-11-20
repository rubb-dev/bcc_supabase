import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  // 1) Obtener usuario autenticado
  const { data: userRes, error: userError } = await supabase.auth.getUser();
  const user = userRes?.user;

  if (userError || !user) {
    return redirect("/auth/signin");
  }

  // 2) Leer datos del formulario
  const formData = await request.formData();
  const companyName = formData.get("company_name")?.toString();
  const role = formData.get("role")?.toString();

  // Validación básica
  if (!companyName || !role) {
    return redirect("/profile/create?error=profile");
  }

  // 3) Insertar en la tabla 'profiles'
  const { error } = await supabase.from("profiles").insert({
    user_id: user.id,
    company_name: companyName,
    role: role,
  });

  if (error) {
    console.error("Error creando perfil:", error);
    return redirect("/profile/create?error=profile");
  }

  // 4) Redirigir al dashboard
  return redirect("/dashboard");
};
