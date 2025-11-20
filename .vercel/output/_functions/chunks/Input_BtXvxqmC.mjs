import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, r as renderTemplate } from './astro/server_BoSdno3s.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    label,
    error,
    containerClass,
    class: className,
    id,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-1.5", containerClass], "class:list")}> ${label && renderTemplate`<label${addAttribute(id, "for")} class="text-sm font-medium text-slate-700"> ${label} </label>`} <input${addAttribute(id, "id")}${addAttribute([
    "flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all",
    error && "border-red-500 focus:ring-red-500",
    className
  ], "class:list")}${spreadAttributes(rest)}> ${error && renderTemplate`<p class="text-xs text-red-600">${error}</p>`} </div>`;
}, "/home/ruben/proyectos/bcc_supabase/src/components/ui/Input.astro", void 0);

export { $$Input as $ };
