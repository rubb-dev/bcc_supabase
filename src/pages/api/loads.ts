import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

type VehicleType = {
  id: string;
  name: string;
  slug: string;
};

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

  valid_from: string;
  valid_until: string;

  weight_t: number;
  length_m: number | null;
  width_m: number | null;
  height_m: number | null;
  volume_m3: number | null;

  is_palletized: boolean;
  description: string | null;

  vehicle_types: VehicleType[];
};

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  // 2) Consulta a Supabase
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
      description,
      load_vehicle_types (
        vehicle_types (
          id,
          name,
          slug
        )
      )
    `
    )
    .gte("valid_until", today)
    .order("created_at", { ascending: false });

  if (error) {
    // Muy útil mientras desarrollas para ver el mensaje real de Postgres
    console.error("Supabase error en /api/loads:", error);
    return new Response(
      JSON.stringify({ error: error.message, details: error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // 3) Aplanar load_vehicle_types -> vehicle_types[]
  const normalized: Load[] =
    (data ?? []).map((row: any) => ({
      id: row.id,
      created_at: row.created_at,
      created_by: row.created_by,

      origin_city_name: row.origin_city_name,
      origin_postal_code: row.origin_postal_code,
      origin_country_code: row.origin_country_code,
      origin_lat: row.origin_lat,
      origin_lon: row.origin_lon,

      destination_city_name: row.destination_city_name,
      destination_postal_code: row.destination_postal_code,
      destination_country_code: row.destination_country_code,
      destination_lat: row.destination_lat,
      destination_lon: row.destination_lon,

      valid_from: row.valid_from,
      valid_until: row.valid_until,

      weight_t: row.weight_t,
      length_m: row.length_m,
      width_m: row.width_m,
      height_m: row.height_m,
      volume_m3: row.volume_m3,

      is_palletized: row.is_palletized,
      description: row.description,

      vehicle_types:
        (row.load_vehicle_types ?? [])
          .map((lvt: any) => lvt?.vehicle_types)
          .filter(Boolean) ?? [],
    })) ?? [];

  // 4) Devolver respuesta normalizada
  return new Response(JSON.stringify(normalized), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request, redirect }) => {
  // 1) Autenticación
  const { data: userRes, error: userError } = await supabase.auth.getUser();
  const user = userRes?.user;

  if (userError || !user) {
    return redirect("/auth/signin");
  }

  // 2) Leer datos
  const formData = await request.formData();

  const getString = (key: string) => formData.get(key)?.toString() || "";
  const getNumber = (key: string) => {
    const val = formData.get(key);
    return val ? parseFloat(val.toString()) : null;
  };
  const getBool = (key: string) => formData.get(key) === "true";

  const loadData = {
    created_by: user.id,
    
    origin_city_name: getString("origin_city_name"),
    origin_postal_code: getString("origin_postal_code"),
    origin_country_code: getString("origin_country_code"),
    origin_lat: getNumber("origin_lat") || 0,
    origin_lon: getNumber("origin_lon") || 0,

    destination_city_name: getString("destination_city_name"),
    destination_postal_code: getString("destination_postal_code"),
    destination_country_code: getString("destination_country_code"),
    destination_lat: getNumber("destination_lat") || 0,
    destination_lon: getNumber("destination_lon") || 0,

    valid_from: getString("valid_from"),
    valid_until: getString("valid_until"),

    weight_t: getNumber("weight_t") || 0,
    volume_m3: getNumber("volume_m3"),
    
    length_m: getNumber("length_m"),
    width_m: getNumber("width_m"),
    height_m: getNumber("height_m"),

    is_palletized: getBool("is_palletized"),
    description: getString("description"),
  };

  // Validación mínima
  if (
    !loadData.origin_city_name ||
    !loadData.destination_city_name ||
    !loadData.valid_from ||
    !loadData.valid_until ||
    !loadData.weight_t
  ) {
    return redirect("/market/loads/new?error=missing");
  }

  // 3) Insertar
  const { data: insertedLoad, error } = await supabase
    .from("loads")
    .insert(loadData)
    .select()
    .single();

  if (error) {
    console.error("Error creando carga:", error);
    return redirect("/market/loads/new?error=insert");
  }

  // 4) Insertar tipos de vehículo
  const vehicleTypeIds = formData.getAll("vehicle_types").map((v) => v.toString());
  if (vehicleTypeIds.length > 0) {
    const vehicleTypeInserts = vehicleTypeIds.map((vtId) => ({
      load_id: insertedLoad.id,
      vehicle_type_id: vtId,
    }));
    const { error: vtError } = await supabase
      .from("load_vehicle_types")
      .insert(vehicleTypeInserts);

    if (vtError) {
      console.error("Error asociando tipos de vehículo:", vtError);
      // No fallamos la request entera, pero logueamos el error
    }
  }

  return redirect("/dashboard");
};
