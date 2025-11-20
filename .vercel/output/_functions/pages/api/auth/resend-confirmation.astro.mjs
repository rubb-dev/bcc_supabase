import { s as supabase } from '../../../chunks/supabase_DJTJtZWp.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect, cookies }) => {
  const formData = await request.formData();
  let email = formData.get("email")?.toString();
  if (!email) {
    email = cookies.get("pending-email")?.value || "";
  }
  if (!email) {
    return redirect("/auth/check-email");
  }
  const origin = new URL(request.url).origin;
  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
    options: { emailRedirectTo: `${origin}/profile/create` }
  });
  if (error) {
    console.error("Error reenviando verificación:", error.message);
    return redirect("/auth/check-email");
  }
  return redirect("/auth/check-email?resent=1");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
