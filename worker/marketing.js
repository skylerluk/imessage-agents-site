import site from "./index.js";

const placements = new Set(["header", "hero", "pilot", "closing", "contact"]);
const headers = { "Cache-Control": "no-store" };
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/events") return site.fetch(request, env);
    if (request.method !== "POST")
      return new Response(null, {
        status: 405,
        headers: { ...headers, Allow: "POST" },
      });
    if (request.headers.get("Origin") !== url.origin)
      return new Response(null, { status: 403, headers });
    if (Number(request.headers.get("Content-Length")) > 256)
      return new Response(null, { status: 413, headers });
    // Read at most 256 bytes, including when no Content-Length is supplied.
    const reader = request.body?.getReader();
    if (!reader) return new Response(null, { status: 400, headers });
    let size = 0,
      chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 256) {
        await reader.cancel();
        return new Response(null, { status: 413, headers });
      }
      chunks.push(value);
    }
    let data;
    try {
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.length;
      }
      data = JSON.parse(new TextDecoder().decode(bytes));
    } catch {
      return new Response(null, { status: 400, headers });
    }
    if (data?.event !== "demo_click" || !placements.has(data.placement))
      return new Response(null, { status: 400, headers });
    if (
      request.headers.get("Sec-GPC") === "1" ||
      request.headers.get("DNT") === "1"
    )
      return new Response(null, { status: 204, headers });
    // Never persist request bodies, IPs, referrers, emails, or identifiers.
    console.log(
      JSON.stringify({ event: "demo_click", placement: data.placement }),
    );
    return new Response(null, { status: 204, headers });
  },
};
