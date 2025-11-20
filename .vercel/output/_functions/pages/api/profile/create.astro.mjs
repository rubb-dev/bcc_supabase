import { s as supabase } from '../../../chunks/supabase_DJTJtZWp.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async () => {
  const { data: userRes, error: userError } = await supabase.auth.getUser();
  const user = userRes?.user;
  if (userError || !user) {
    return new Response(
      JSON.stringify({ error: "Not authenticated" }),
      { status: 401 }
    );
  }
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
      description
    `
  ).eq("created_by", user.id).gte("valid_until", today).order("created_at", { ascending: false });
  if (error) {
    console.error("Error obteniendo cargas:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching loads" }),
      { status: 500 }
    );
  }
  const loads = data ?? [];
  return new Response(JSON.stringify(loads), {
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
