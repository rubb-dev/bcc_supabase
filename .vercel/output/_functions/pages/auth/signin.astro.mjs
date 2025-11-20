import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BoSdno3s.mjs';
import { $ as $$AuthLayout } from '../../chunks/AuthLayout_PqUrqSyp.mjs';
import { $ as $$Card, a as $$Button } from '../../chunks/Button_zlY48CSi.mjs';
import { $ as $$Input } from '../../chunks/Input_BtXvxqmC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  const url = new URL(Astro2.request.url);
  const error = url.searchParams.get("error");
  let errorMessage = "";
  if (error === "invalid") errorMessage = "Correo o contrase\xF1a incorrectos.";
  if (error === "missing")
    errorMessage = "Por favor introduce email y contrase\xF1a.";
  return renderTemplate`${renderComponent($$result, "Layout", $$AuthLayout, { "title": "Iniciar sesi\xF3n | CargoMarket" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-md"> <div class="text-center mb-10"> <div class="mx-auto w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-slate-900/20">
C
</div> <h1 class="text-2xl font-bold mt-6 text-slate-900">
Bienvenido de nuevo
</h1> <p class="text-slate-600 mt-2">
¿No tienes cuenta?
<a href="/auth/register" class="text-slate-900 hover:underline font-medium">Regístrate gratis</a> </p> </div> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 shadow-xl border-slate-200/60" }, { "default": ($$result3) => renderTemplate`${errorMessage && renderTemplate`<div class="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100"> ${errorMessage} </div>`}<form action="/api/auth/signin" method="post" class="space-y-5"> ${renderComponent($$result3, "Input", $$Input, { "label": "Email", "type": "email", "name": "email", "id": "email", "required": true, "placeholder": "tucorreo@ejemplo.com" })} <div> <div class="flex items-center justify-between mb-1.5"> <label for="password" class="text-sm font-medium text-slate-700">Contraseña</label> <a href="/forgot-password" class="text-xs text-slate-500 hover:text-slate-900 hover:underline">
¿Olvidaste tu contraseña?
</a> </div> ${renderComponent($$result3, "Input", $$Input, { "type": "password", "name": "password", "id": "password", "required": true, "minlength": "6", "placeholder": "********", "containerClass": "!gap-0" })} </div> ${renderComponent($$result3, "Button", $$Button, { "type": "submit", "class": "w-full", "size": "lg" }, { "default": ($$result4) => renderTemplate` Iniciar sesión ` })} </form> ` })} <p class="mt-8 text-center text-xs text-slate-400">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} CargoMarket. Todos los derechos reservados.
</p> </div> ` })}`;
}, "/home/ruben/proyectos/bcc_supabase/src/pages/auth/signin.astro", void 0);

const $$file = "/home/ruben/proyectos/bcc_supabase/src/pages/auth/signin.astro";
const $$url = "/auth/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
