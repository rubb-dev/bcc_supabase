import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BoSdno3s.mjs';
import { $ as $$AuthLayout } from '../../chunks/AuthLayout_PqUrqSyp.mjs';
import { s as supabase } from '../../chunks/supabase_DJTJtZWp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$CheckEmail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CheckEmail;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  let userEmail = null;
  let verified = false;
  if (accessToken?.value && refreshToken?.value) {
    const { data: sessData } = await supabase.auth.setSession({
      access_token: accessToken.value,
      refresh_token: refreshToken.value
    });
    const user = sessData?.user;
    if (user) {
      userEmail = user.email ?? null;
      if (user.email_confirmed_at) verified = true;
    }
  }
  if (!userEmail) {
    userEmail = Astro2.cookies.get("pending-email")?.value ?? null;
  }
  if (verified) {
    Astro2.cookies.delete("pending-email", { path: "/" });
    return Astro2.redirect("/profile/create");
  }
  const url = new URL(Astro2.request.url);
  const resent = url.searchParams.get("resent") === "1";
  return renderTemplate`${renderComponent($$result, "Layout", $$AuthLayout, { "title": "Revisa tu correo | CargoMarket" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center px-6 py-20" style="background: linear-gradient(to bottom right, #eff6ff, #ffffff, #f8fafc);"> <div class="relative w-full max-w-md bg-white/85 backdrop-blur-md border border-white/60 rounded-2xl shadow-xl p-8 text-center"> <div class="mx-auto w-12 h-12 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xl font-bold">C</div> <h1 class="text-2xl font-semibold mt-4 text-gray-800">Confirma tu cuenta</h1> <p class="text-gray-600 mt-3">Te hemos enviado un correo de confirmación${userEmail ? " a:" : ""}</p> ${userEmail && renderTemplate`<p class="text-sky-700 font-medium mt-1">${userEmail}</p>`} <p class="text-gray-600 mt-3">
Revisa tu bandeja de entrada (y spam) y haz clic en el enlace para activar tu cuenta.
</p> <div class="flex justify-center my-6"> <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> ${resent && renderTemplate`<p class="text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 mb-4 text-sm" role="status">
Correo reenviado. Revisa tu bandeja de entrada.
</p>`} ${userEmail ? renderTemplate`<form action="/api/auth/resend-confirmation" method="post" class="inline-block"> <input type="hidden" name="email"${addAttribute(userEmail, "value")}> <button type="submit" class="inline-flex items-center px-4 py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition-colors">
Reenviar correo de verificación
</button> </form>` : renderTemplate`<p class="text-gray-500 text-sm italic">No se pudo determinar tu email. Vuelve al registro.</p>`} <p class="text-xs text-gray-400 mt-6">
Si ya has confirmado el correo, <a href="/auth/signin" class="text-sky-600 hover:underline">inicia sesión aquí</a>.
</p> </div> </section> ` })}`;
}, "/home/ruben/proyectos/bcc_supabase/src/pages/auth/check-email.astro", void 0);

const $$file = "/home/ruben/proyectos/bcc_supabase/src/pages/auth/check-email.astro";
const $$url = "/auth/check-email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CheckEmail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
