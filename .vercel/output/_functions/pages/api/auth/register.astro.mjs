import { s as supabase } from '../../../chunks/supabase_DJTJtZWp.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString()?.trim();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return redirect("/auth/register?error=missing");
  }
  const origin = new URL(request.url).origin;
  const { error: signUpErr } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${origin}/profile/create` }
  });
  if (signUpErr) {
    if (signUpErr.message?.toLowerCase().includes("already registered")) {
      return redirect("/auth/register?error=exists");
    }
    console.error("Error registrando:", signUpErr.message);
    return redirect("/auth/register?error=server");
  }
  cookies.set("pending-email", email, {
    path: "/",
    maxAge: 60 * 30,
    sameSite: "lax",
    httpOnly: false,
    secure: true
  });
  return redirect("/auth/check-email");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
