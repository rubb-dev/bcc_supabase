import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BoSdno3s.mjs';
import { $ as $$Layout, a as $$Container, b as $$Badge } from '../chunks/Badge_BUvmdSu7.mjs';
import { a as $$Button, $ as $$Card } from '../chunks/Button_zlY48CSi.mjs';
import { $ as $$Input } from '../chunks/Input_BtXvxqmC.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let loads = [];
  let loadsError = false;
  try {
    const res = await fetch(`${Astro2.url.origin}/api/loads`);
    if (!res.ok) {
      loadsError = true;
      console.error("Error al obtener loads desde /api/loads:", await res.text());
    } else {
      loads = await res.json();
    }
  } catch (err) {
    loadsError = true;
    console.error("Fallo al llamar /api/loads:", err);
  }
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("es-ES");
  }
  function formatRelative(dateStr) {
    const date = new Date(dateStr);
    const diffMs = Date.now() - date.getTime();
    const diffMinutes = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    if (diffMinutes < 1) return "hace unos segundos";
    if (diffMinutes < 60) return `hace ${diffMinutes} min`;
    if (diffHours < 24) return `hace ${diffHours} h`;
    return `hace ${diffDays} d`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CargoMarket \u2014 Bolsa de cargas simple", "description": "Conecta cargadores y transportistas verificados. Publica cargas, encuentra camiones y gestiona tu log\xEDstica f\xE1cilmente." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative overflow-hidden py-16 lg:py-24"> <div class="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-slate-50"></div> ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` <div class="grid gap-12 lg:grid-cols-2 lg:items-center"> <div> <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
Una <span class="text-sky-600">bolsa de cargas</span> simple y de confianza
</h1> <p class="mt-6 text-lg text-slate-600">
Conecta cargadores y transportistas verificados. Publica cargas,
            encuentra camiones y cierra acuerdos en minutos.
</p> <div class="mt-8 flex flex-wrap gap-4"> ${renderComponent($$result3, "Button", $$Button, { "as": "a", "href": "/auth/register", "size": "lg" }, { "default": async ($$result4) => renderTemplate`
Crear cuenta gratis
` })} ${renderComponent($$result3, "Button", $$Button, { "as": "a", "href": "/auth/signin", "variant": "outline", "size": "lg" }, { "default": async ($$result4) => renderTemplate`
Iniciar sesión
` })} </div> <dl class="mt-12 grid grid-cols-3 gap-6"> <div class="flex flex-col gap-1"> <dt class="text-sm font-medium text-slate-500">
Cargas publicadas
</dt> <dd class="text-2xl font-bold text-slate-900">1.5M+</dd> </div> <div class="flex flex-col gap-1"> <dt class="text-sm font-medium text-slate-500">Camiones</dt> <dd class="text-2xl font-bold text-slate-900">100k+</dd> </div> <div class="flex flex-col gap-1"> <dt class="text-sm font-medium text-slate-500">Miembros</dt> <dd class="text-2xl font-bold text-slate-900">25k</dd> </div> </dl> </div> <!-- Tarjeta lateral tipo buscador --> <div class="lg:pl-8"> ${renderComponent($$result3, "Card", $$Card, { "class": "backdrop-blur-sm bg-white/90 p-6 shadow-xl ring-1 ring-slate-900/5" }, { "default": async ($$result4) => renderTemplate` <div class="mb-6 flex gap-2 border-b border-slate-200 pb-4"> <button class="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white">Cargas</button> <button class="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100">Camiones</button> <button class="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100">Incidentes</button> </div> <div class="grid gap-4"> <div class="grid gap-4 sm:grid-cols-3"> ${renderComponent($$result4, "Input", $$Input, { "placeholder": "Origen" })} ${renderComponent($$result4, "Input", $$Input, { "placeholder": "Destino" })} <div class="flex flex-col gap-1.5"> <select class="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"> <option>Camión lona</option> <option>Frigorífico</option> <option>Plataforma</option> </select> </div> </div> ${renderComponent($$result4, "Button", $$Button, { "class": "w-full" }, { "default": async ($$result5) => renderTemplate`Buscar cargas` })} </div> ` })} </div> </div> ` })} </section>  <section class="bg-white py-16"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` <div class="mb-8 flex items-center justify-between"> <h2 class="text-2xl font-bold text-slate-900">
Últimas cargas publicadas
</h2> <a href="/auth/register" class="text-sm font-medium text-sky-600 hover:text-sky-700">
Publica tu primera carga &rarr;
</a> </div> ${loadsError && renderTemplate`<div class="rounded-lg bg-red-50 p-4 text-sm text-red-700">
Ha habido un problema al cargar las cargas.
</div>`}${!loadsError && loads.length === 0 && renderTemplate`<div class="text-center py-12 text-slate-500"> <p>
Todavía no hay cargas publicadas. Sé el primero en publicar una.
</p> </div>`}${!loadsError && loads.length > 0 && renderTemplate`<div class="space-y-4"> ${loads.map((load) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "class": "overflow-hidden transition-shadow hover:shadow-md" }, { "default": async ($$result4) => renderTemplate` <div class="flex flex-col md:flex-row"> <div class="flex-1 p-6"> <div class="flex flex-wrap items-start justify-between gap-4"> <div class="flex flex-wrap items-center gap-3 text-base"> <div class="flex items-center gap-2"> <span class="font-bold text-slate-900"> ${load.origin_city_name} </span> <span class="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-600"> ${load.origin_country_code} </span> </div> <span class="text-slate-400">&rarr;</span> <div class="flex items-center gap-2"> <span class="font-bold text-slate-900"> ${load.destination_city_name} </span> <span class="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-600"> ${load.destination_country_code} </span> </div> </div> <span class="text-xs text-slate-500"> ${formatRelative(load.created_at)} </span> </div> <div class="mt-4 flex flex-wrap items-center gap-2"> ${renderComponent($$result4, "Badge", $$Badge, { "variant": "secondary", "class": "text-sky-700 bg-sky-50" }, { "default": async ($$result5) => renderTemplate`${formatDate(load.valid_from)} –${" "}${formatDate(load.valid_until)}` })} ${renderComponent($$result4, "Badge", $$Badge, { "variant": load.is_palletized ? "success" : "secondary" }, { "default": async ($$result5) => renderTemplate`${load.is_palletized ? "Paletizada" : "Sin paletizar"}` })} ${load.vehicle_types?.map((vt) => renderTemplate`${renderComponent($$result4, "Badge", $$Badge, { "variant": "warning" }, { "default": async ($$result5) => renderTemplate`🚚 ${vt.name}` })}`)} </div> ${load.description && renderTemplate`<p class="mt-3 text-sm text-slate-600 line-clamp-2"> ${load.description} </p>`} </div> <div class="flex w-full flex-row items-center justify-between border-t border-slate-100 bg-slate-50/50 p-6 md:w-auto md:flex-col md:border-t-0 md:border-l md:justify-center md:gap-4"> <div class="text-right md:text-center"> <div class="text-xs font-medium uppercase tracking-wider text-slate-500">
Peso total
</div> <div class="mt-1 text-lg font-bold text-slate-900"> ${Number(load.weight_t).toLocaleString("es-ES", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })} <span class="text-sm font-normal text-slate-500">
t
</span> </div> </div> ${renderComponent($$result4, "Button", $$Button, { "size": "sm", "class": "w-full md:w-auto" }, { "default": async ($$result5) => renderTemplate`
Ver detalles
` })} </div> </div> ` })}`)} </div>`}` })} </section>  <section class="py-16"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` <div class="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 shadow-2xl sm:px-12 lg:px-16"> <div class="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row"> <div class="max-w-xl"> <h3 class="text-3xl font-bold text-white">
Empieza gratis en minutos
</h3> <p class="mt-4 text-lg text-slate-300">
Publica tu primera carga o encuentra camión ahora. Sin tarjetas de
              crédito para empezar.
</p> </div> <div class="flex flex-wrap gap-4"> ${renderComponent($$result3, "Button", $$Button, { "as": "a", "href": "/auth/register", "class": "bg-white text-slate-900 hover:bg-slate-100" }, { "default": async ($$result4) => renderTemplate`
Crear cuenta
` })} ${renderComponent($$result3, "Button", $$Button, { "as": "a", "href": "/auth/signin", "variant": "outline", "class": "border-white/20 text-white hover:bg-white/10" }, { "default": async ($$result4) => renderTemplate`
Iniciar sesión
` })} </div> </div> </div> ` })} </section> ` })}`;
}, "/home/ruben/proyectos/bcc_supabase/src/pages/index.astro", void 0);

const $$file = "/home/ruben/proyectos/bcc_supabase/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
