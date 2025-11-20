import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_BoSdno3s.mjs';
import 'clsx';
/* empty css                               */
/* empty css                               */

const $$Astro = createAstro();
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const {
    title = "Autenticaci\xF3n | CargoMarket",
    description = "Accede o crea tu cuenta en CargoMarket"
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="h-full bg-slate-50 antialiased" data-astro-cid-3qlrnpww> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Fuente Inter --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="flex min-h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8" data-astro-cid-3qlrnpww> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/ruben/proyectos/bcc_supabase/src/layouts/AuthLayout.astro", void 0);

export { $$AuthLayout as $ };
