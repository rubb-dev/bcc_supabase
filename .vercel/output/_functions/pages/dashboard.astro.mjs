import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BoSdno3s.mjs';
import { $ as $$Layout, a as $$Container, b as $$Badge } from '../chunks/Badge_BUvmdSu7.mjs';
import { s as supabase } from '../chunks/supabase_DJTJtZWp.mjs';
import { a as $$Button, $ as $$Card } from '../chunks/Button_zlY48CSi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/auth/signin");
  }
  const { data: sessData, error: sessErr } = await supabase.auth.setSession({
    access_token: accessToken.value,
    refresh_token: refreshToken.value
  });
  if (sessErr || !sessData?.user) {
    Astro2.cookies.delete("sb-access-token", { path: "/" });
    Astro2.cookies.delete("sb-refresh-token", { path: "/" });
    return Astro2.redirect("/auth/signin");
  }
  const user = sessData.user;
  if (!user.email_confirmed_at) {
    return Astro2.redirect("/auth/check-email");
  }
  const { data: profile, error: profileErr } = await supabase.from("profiles").select("role, company_name, created_at, updated_at").eq("user_id", user.id).maybeSingle();
  if (!profile || profileErr) {
    return Astro2.redirect("/profile/create");
  }
  const email = user.email;
  const role = profile.role ?? "\u2014";
  const companyName = profile.company_name ?? "\u2014";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel de control | CargoMarket" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-full bg-slate-50 pb-12"> <!-- Topbar --> <header class="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` <div class="flex h-16 items-center justify-between"> <div class="flex items-center gap-4"> <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white font-bold">
C
</div> <div class="flex flex-col"> <span class="font-semibold text-slate-900 leading-none">CargoMarket</span> <span class="text-xs text-slate-500">Panel de control</span> </div> </div> <nav class="hidden md:flex items-center gap-1"> ${renderComponent($$result3, "Button", $$Button, { "variant": "ghost", "size": "sm", "as": "a", "href": "/dashboard" }, { "default": async ($$result4) => renderTemplate`Inicio` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "ghost", "size": "sm", "as": "a", "href": "/market/loads" }, { "default": async ($$result4) => renderTemplate`Cargas` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "ghost", "size": "sm", "as": "a", "href": "/market/trucks" }, { "default": async ($$result4) => renderTemplate`Camiones` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "ghost", "size": "sm", "as": "a", "href": "/account" }, { "default": async ($$result4) => renderTemplate`Cuenta` })} </nav> <div class="flex items-center gap-4"> <span class="hidden sm:block text-sm text-slate-600">${email}</span> <form action="/api/auth/signout" method="post"> ${renderComponent($$result3, "Button", $$Button, { "type": "submit", "size": "sm", "variant": "outline" }, { "default": async ($$result4) => renderTemplate`Salir` })} </form> </div> </div> ` })} </header> <!-- Contenido --> <main class="py-10"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate`  <div class="grid gap-6 lg:grid-cols-3"> <!-- Saludo + CTA --> ${renderComponent($$result3, "Card", $$Card, { "class": "lg:col-span-2 p-8 bg-white shadow-sm border-slate-200" }, { "default": async ($$result4) => renderTemplate` <h1 class="text-3xl font-bold text-slate-900">
¡Hola, <span class="text-sky-700">${companyName}</span>!
</h1> <p class="mt-2 text-slate-600 max-w-2xl">
Bienvenido/a a tu panel. Revisa tu resumen y accede a las acciones
              rápidas para empezar a gestionar tu logística.
</p>  <div class="mt-8 flex flex-wrap gap-3"> ${renderComponent($$result4, "Button", $$Button, { "as": "a", "href": "/market/loads/new" }, { "default": async ($$result5) => renderTemplate`Publicar carga` })} ${renderComponent($$result4, "Button", $$Button, { "as": "a", "href": "/market/trucks", "variant": "outline" }, { "default": async ($$result5) => renderTemplate`Buscar camiones` })} ${renderComponent($$result4, "Button", $$Button, { "as": "a", "href": "/profile/edit", "variant": "ghost" }, { "default": async ($$result5) => renderTemplate`Editar perfil` })} </div> ` })} <!-- Tarjeta de perfil --> ${renderComponent($$result3, "Card", $$Card, { "class": "p-6 bg-white shadow-sm border-slate-200" }, { "default": async ($$result4) => renderTemplate` <div class="flex items-center justify-between mb-4"> <h2 class="text-lg font-semibold text-slate-900">Tu perfil</h2> ${renderComponent($$result4, "Badge", $$Badge, { "variant": "success" }, { "default": async ($$result5) => renderTemplate`Verificado` })} </div> <dl class="space-y-4"> <div class="flex items-center justify-between py-2 border-b border-slate-100"> <dt class="text-slate-500 text-sm">Empresa</dt> <dd class="text-sm font-medium text-slate-900"> ${companyName} </dd> </div> <div class="flex items-center justify-between py-2 border-b border-slate-100"> <dt class="text-slate-500 text-sm">Rol</dt> <dd class="text-sm font-medium capitalize text-slate-900"> ${role} </dd> </div> <div class="flex items-center justify-between py-2"> <dt class="text-slate-500 text-sm">Email</dt> <dd class="text-sm font-medium text-slate-900 truncate max-w-[180px]"${addAttribute(email, "title")}> ${email} </dd> </div> </dl> <div class="mt-6"> ${renderComponent($$result4, "Button", $$Button, { "as": "a", "href": "/profile/edit", "variant": "outline", "size": "sm", "class": "w-full" }, { "default": async ($$result5) => renderTemplate`
Completar perfil
` })} </div> ` })} </div>  <section class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> ${renderComponent($$result3, "Card", $$Card, { "class": "p-5" }, { "default": async ($$result4) => renderTemplate` <p class="text-xs font-medium uppercase tracking-wider text-slate-500">
Cargas activas
</p> <p class="mt-2 text-3xl font-bold text-slate-900">—</p> <p class="mt-1 text-xs text-slate-400">Publicadas por tu empresa</p> ` })} ${renderComponent($$result3, "Card", $$Card, { "class": "p-5" }, { "default": async ($$result4) => renderTemplate` <p class="text-xs font-medium uppercase tracking-wider text-slate-500">
Ofertas recibidas
</p> <p class="mt-2 text-3xl font-bold text-slate-900">—</p> <p class="mt-1 text-xs text-slate-400">Últimos 7 días</p> ` })} ${renderComponent($$result3, "Card", $$Card, { "class": "p-5" }, { "default": async ($$result4) => renderTemplate` <p class="text-xs font-medium uppercase tracking-wider text-slate-500">
Camiones disponibles
</p> <p class="mt-2 text-3xl font-bold text-slate-900">—</p> <p class="mt-1 text-xs text-slate-400">Zona preferente</p> ` })} ${renderComponent($$result3, "Card", $$Card, { "class": "p-5" }, { "default": async ($$result4) => renderTemplate` <p class="text-xs font-medium uppercase tracking-wider text-slate-500">
Valoración
</p> <p class="mt-2 text-3xl font-bold text-slate-900">—</p> <p class="mt-1 text-xs text-slate-400">Reputación media</p> ` })} </section>  <section class="mt-8 grid gap-6 lg:grid-cols-3"> <!-- Actividad reciente --> ${renderComponent($$result3, "Card", $$Card, { "class": "lg:col-span-2 overflow-hidden" }, { "default": async ($$result4) => renderTemplate` <div class="flex items-center justify-between p-6 border-b border-slate-100"> <h3 class="text-lg font-semibold text-slate-900">
Actividad reciente
</h3> <a href="/activity" class="text-sm font-medium text-sky-600 hover:text-sky-700">Ver todo</a> </div> <ul class="divide-y divide-slate-100"> <li class="p-6 hover:bg-slate-50 transition-colors"> <div class="flex items-start gap-4"> <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path> </svg> </div> <div class="flex-1"> <p class="text-sm font-medium text-slate-900">
Has publicado una nueva carga
</p> <p class="text-sm text-slate-500">Pamplona → Zaragoza</p> <p class="mt-1 text-xs text-slate-400">hace 2 h</p> </div> </div> </li> <li class="p-6 hover:bg-slate-50 transition-colors"> <div class="flex items-start gap-4"> <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="flex-1"> <p class="text-sm font-medium text-slate-900">
Oferta aceptada
</p> <p class="text-sm text-slate-500">
Transportes García ha aceptado la carga #1234
</p> <p class="mt-1 text-xs text-slate-400">hace 5 h</p> </div> </div> </li> </ul> ` })} <!-- Checklist / Onboarding --> ${renderComponent($$result3, "Card", $$Card, { "class": "p-6" }, { "default": async ($$result4) => renderTemplate` <h3 class="text-lg font-semibold text-slate-900">Primeros pasos</h3> <div class="mt-4 space-y-4"> <div class="flex items-start gap-3"> <div class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg> </div> <span class="text-sm text-slate-600 line-through">Verifica tu email</span> </div> <div class="flex items-start gap-3"> <div class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg> </div> <span class="text-sm text-slate-600 line-through">Completa tu perfil</span> </div> <div class="flex items-start gap-3"> <div class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white"></div> <span class="text-sm text-slate-900">Publica tu primera carga</span> </div> <div class="flex items-start gap-3"> <div class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white"></div> <span class="text-sm text-slate-900">Conecta facturación</span> </div> </div> <div class="mt-6"> ${renderComponent($$result4, "Button", $$Button, { "as": "a", "href": "/market/loads/new", "class": "w-full" }, { "default": async ($$result5) => renderTemplate`
Publicar carga ahora
` })} </div> ` })} </section>  <section class="mt-10"> <div class="rounded-2xl bg-slate-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"> <div> <h3 class="text-2xl font-bold">Optimiza tu operativa</h3> <p class="text-slate-300 mt-2">
Activa alertas por ruta y recibe ofertas automáticas en tu
                email.
</p> </div> <div class="flex gap-3"> ${renderComponent($$result3, "Button", $$Button, { "as": "a", "href": "/alerts", "class": "bg-white text-slate-900 hover:bg-slate-100" }, { "default": async ($$result4) => renderTemplate`Configurar alertas` })} ${renderComponent($$result3, "Button", $$Button, { "as": "a", "href": "/settings", "variant": "outline", "class": "border-white/20 text-white hover:bg-white/10" }, { "default": async ($$result4) => renderTemplate`Ajustes` })} </div> </div> </section> ` })} </main> </div> ` })}`;
}, "/home/ruben/proyectos/bcc_supabase/src/pages/dashboard.astro", void 0);

const $$file = "/home/ruben/proyectos/bcc_supabase/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
