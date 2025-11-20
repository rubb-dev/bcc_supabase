import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, n as renderSlot } from './astro/server_BoSdno3s.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className, as: Tag = "div", ...rest } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm",
    className
  ], ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/ruben/proyectos/bcc_supabase/src/components/ui/Card.astro", void 0);

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    as: Tag = "button",
    variant = "primary",
    size = "md",
    class: className,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-500",
    outline: "border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700 focus-visible:ring-slate-500",
    ghost: "hover:bg-slate-100 text-slate-700 focus-visible:ring-slate-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600"
  };
  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base"
  };
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [baseStyles, variants[variant], sizes[size], className], ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/ruben/proyectos/bcc_supabase/src/components/ui/Button.astro", void 0);

export { $$Card as $, $$Button as a };
