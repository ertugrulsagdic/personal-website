// Runs only for paths with no static file in out/ (wrangler.jsonc). Everything else is a static
// file and never starts this Worker.
const LOCALES = ["en", "tr"];

function pickLocale(acceptLanguage) {
  // Same rule as the old middleware: the first Accept-Language entry that is exactly a locale.
  return (acceptLanguage || "").split(",").find((l) => LOCALES.includes(l)) || "en";
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const first = url.pathname.split("/")[1] ?? "";

    if (LOCALES.includes(first) || url.pathname.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(url.pathname)) {
      const page = await env.ASSETS.fetch(new Request(new URL("/404", url), { headers: request.headers }));
      return new Response(page.body, { status: 404, headers: page.headers });
    }

    url.pathname = `/${pickLocale(request.headers.get("accept-language"))}${url.pathname === "/" ? "" : url.pathname}`;
    return Response.redirect(url.toString(), 307);
  },
};
