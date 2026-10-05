import test from "node:test";
import assert from "node:assert/strict";
import worker from "../worker/marketing.js";
const origin = "https://imessageagents.org";
const env = { ASSETS: { fetch: async () => new Response("asset") } };
function req(body, options = {}) {
  return new Request(origin + "/api/events", {
    method: "POST",
    headers: { Origin: origin, ...options.headers },
    body: JSON.stringify(body),
  });
}
test("records only an allowlisted intent and placement, never supplied personal data", async () => {
  const logs = [];
  const original = console.log;
  console.log = (value) => logs.push(value);
  try {
    const response = await worker.fetch(
      req({
        event: "demo_click",
        placement: "hero",
        email: "private@example.com",
      }),
      env,
    );
    assert.equal(response.status, 204);
    assert.deepEqual(logs, [
      JSON.stringify({ event: "demo_click", placement: "hero" }),
    ]);
  } finally {
    console.log = original;
  }
});
test("rejects foreign origins, arbitrary events, oversized bodies and GET", async () => {
  assert.equal(
    (
      await worker.fetch(
        req(
          { event: "demo_click", placement: "hero" },
          { headers: { Origin: "https://elsewhere.example" } },
        ),
        env,
      )
    ).status,
    403,
  );
  assert.equal(
    (
      await worker.fetch(
        req({ event: "demo_click", placement: "email@example.com" }),
        env,
      )
    ).status,
    400,
  );
  assert.equal(
    (
      await worker.fetch(
        req({ event: "booking_completed", placement: "hero" }),
        env,
      )
    ).status,
    400,
  );
  assert.equal(
    (await worker.fetch(req({ payload: "x".repeat(257) }), env)).status,
    413,
  );
  assert.equal(
    (await worker.fetch(new Request(origin + "/api/events"), env)).status,
    405,
  );
});
test("serves the existing website for non-event routes", async () =>
  assert.equal(
    await (await worker.fetch(new Request(origin), env)).text(),
    "asset",
  ));
test("respects GPC and DNT without logging a click", async () => {
  const original = console.log;
  const logs = [];
  console.log = (value) => logs.push(value);
  try {
    for (const header of ["DNT", "Sec-GPC"])
      assert.equal(
        (
          await worker.fetch(
            req(
              { event: "demo_click", placement: "hero" },
              { headers: { [header]: "1" } },
            ),
            env,
          )
        ).status,
        204,
      );
    assert.deepEqual(logs, []);
  } finally {
    console.log = original;
  }
});
