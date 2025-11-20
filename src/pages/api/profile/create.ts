import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

type Load = {
  id: string;
  created_at: string;
  created_by: string;

  origin_city_name: string;
  origin_postal_code: string;
  origin_country_code: string;
  origin_lat: number;
  origin_lon: number;

  destination_city_name: string;
  destination_postal_code: string;
  destination_country_code: string;
  destination_lat: number;
  destination_lon: number;

  valid_from: string;   // date
  valid_until: string;  // date

  weight_t: number;       // en toneladas

  length_m: number | null;
  width_m: number | null;
  height_m: number | null;
  volume_m3: number | null;

  is_palletized: boolean;
  description: string;
};

// GET /api/loads
export const GET: APIRoute = async () => {
  // 1) Obtener usuario autenticado
  const { data: userRes, error: userError } = await supabase.auth.getUser();
  const user = userRes?.user;

  if (userError || !user) {
    return new Response(
      JSON.stringify({ error: "Not authenticated" }),
      { status: 401 }
    );
  }

  // 2) Hoy (para filtrar cargas aún válidas, opcional)
  const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

  // 3) Consultar las cargas de ese usuario
  const { data, error } = await supabase
    .from("loads")
    .select(
      `
      id,
      created_at,
      created_by,
      origin_city_name,
      origin_postal_code,
      origin_country_code,
      origin_lat,
      origin_lon,
      destination_city_name,
      destination_postal_code,
      destination_country_code,
      destination_lat,
      destination_lon,
      valid_from,
      valid_until,
      weight_t,
      length_m,
      width_m,
      height_m,
      volume_m3,
      is_palletized,
      description
    `
    )
    .eq("created_by", user.id)   // solo sus cargas
    .gte("valid_until", today)   // solo cargas aún activas (puedes quitarlo si no quieres)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error obteniendo cargas:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching loads" }),
      { status: 500 }
    );
  }

  const loads = (data ?? []) as Load[];

  // 4) Devolver JSON
  return new Response(JSON.stringify(loads), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
