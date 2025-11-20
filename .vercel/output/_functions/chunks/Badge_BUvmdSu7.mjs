import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate, m as maybeRenderHead } from './astro/server_BoSdno3s.mjs';
import 'clsx';
/* empty css                               */
/* empty css                             */

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "CargoMarket \u2014 Bolsa de cargas simple",
    description = "Conecta cargadores y transportistas verificados. Publica cargas y encuentra camiones f\xE1cilmente."
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="h-full bg-slate-50 antialiased" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Fuente Inter --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="flex min-h-full flex-col text-slate-900" data-astro-cid-sckkx6r4> <main class="flex-1" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-slate-200 bg-white py-8" data-astro-cid-sckkx6r4> <div class="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8" data-astro-cid-sckkx6r4> <p data-astro-cid-sckkx6r4>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} CargoMarket. Todos los derechos
					reservados.
</p> </div> </footer> </body></html>`;
}, "/home/ruben/proyectos/bcc_supabase/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/ruben/proyectos/bcc_supabase/src/components/ui/Container.astro", void 0);

const $$Astro = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "default", class: className } = Astro2.props;
  const variants = {
    default: "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80",
    secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
    outline: "text-slate-950 border-slate-200",
    success: "border-transparent bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
    warning: "border-transparent bg-amber-50 text-amber-700 hover:bg-amber-100",
    danger: "border-transparent bg-red-50 text-red-700 hover:bg-red-100"
  };
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
    variants[variant],
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/home/ruben/proyectos/bcc_supabase/src/components/ui/Badge.astro", void 0);

export { $$Layout as $, $$Container as a, $$Badge as b };
