import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BoSdno3s.mjs';
import { $ as $$AuthLayout } from '../../chunks/AuthLayout_PqUrqSyp.mjs';
import { s as supabase } from '../../chunks/supabase_DJTJtZWp.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
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
    return Astro2.redirect("/check-email");
  }
  const { data: existingProfile } = await supabase.from("profiles").select("user_id").eq("user_id", user.id).maybeSingle();
  if (existingProfile) {
    return Astro2.redirect("/dashboard");
  }
  const url = new URL(Astro2.request.url);
  const error = url.searchParams.get("error");
  const errorMessage = error === "profile" ? "No se pudo guardar tu perfil. Int\xE9ntalo de nuevo." : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$AuthLayout, { "title": "Completa tu perfil | CargoMarket" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="relative min-h-screen flex items-center justify-center px-6 py-20" style="background: linear-gradient(to bottom right, #eff6ff, #ffffff, #f8fafc);"> <div class="relative w-full max-w-md bg-white/85 backdrop-blur-md border border-white/60 rounded-2xl shadow-xl p-8"> <div class="text-center mb-6"> <div class="mx-auto w-12 h-12 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xl font-bold">\nC\n</div> <h1 class="text-2xl font-semibold mt-3 text-gray-800">Completa tu perfil</h1> <p class="text-sm text-gray-600 mt-2">\nHola, <span class="font-medium">', "</span>. A\xF1ade tus datos para continuar.\n</p> </div> ", ` <form id="create-profile-form" action="/api/profile/create" method="post" class="space-y-5" novalidate> <!-- Empresa --> <div> <label for="company_name" class="block text-sm font-medium text-gray-700">
Nombre de empresa *
</label> <input type="text" name="company_name" id="company_name" required placeholder="Ej: Vetonek" class="w-full mt-1 rounded-lg border-gray-300 focus:border-sky-500 focus:ring-sky-500"> </div> <!-- Rol --> <div> <label for="role" class="block text-sm font-medium text-gray-700">Rol *</label> <select name="role" id="role" required class="w-full mt-1 rounded-lg border-gray-300 focus:border-sky-500 focus:ring-sky-500"> <option value="" disabled selected>Selecciona tu rol</option> <option value="cargador">Cargador</option> <option value="transportista">Transportista</option> </select> </div> <!-- Guardar --> <button type="submit" class="w-full py-2.5 px-4 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors">
Guardar y continuar
</button> <p class="text-xs text-gray-500 text-center mt-2">
Todos los campos son obligatorios.
</p> </form> </div> </section>  <script>
    const form = document.getElementById('create-profile-form');
    const company = document.getElementById('company_name');
    const role = document.getElementById('role');

    form.addEventListener('submit', (e) => {
      if (!company.value.trim()) {
        e.preventDefault();
        alert('El nombre de empresa es obligatorio.');
        company.focus();
        return;
      }
      if (!role.value) {
        e.preventDefault();
        alert('Selecciona un rol.');
        role.focus();
        return;
      }
    });
  <\/script> `])), maybeRenderHead(), user.email, errorMessage && renderTemplate`<p class="text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4 text-sm" role="alert"> ${errorMessage} </p>`) })}`;
}, "/home/ruben/proyectos/bcc_supabase/src/pages/profile/create.astro", void 0);

const $$file = "/home/ruben/proyectos/bcc_supabase/src/pages/profile/create.astro";
const $$url = "/profile/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Create,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
