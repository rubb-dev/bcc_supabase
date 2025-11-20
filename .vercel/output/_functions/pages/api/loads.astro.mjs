import { s as supabase } from '../../chunks/supabase_DJTJtZWp.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const { data, error } = await supabase.from("loads").select(
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
  ).gte("valid_until", today).order("created_at", { ascending: false });
  if (error) {
    console.error("Supabase error en /api/loads:", error);
    return new Response(
      JSON.stringify({ error: error.message, details: error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  const normalized = (data ?? []).map((row) => ({
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
    vehicle_types: (row.load_vehicle_types ?? []).map((lvt) => lvt?.vehicle_types).filter(Boolean) ?? []
  })) ?? [];
  return new Response(JSON.stringify(normalized), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
