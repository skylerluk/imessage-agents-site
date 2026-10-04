# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved project direction

- Company: Enterprise Message Agents. First product: Ralley. Domain planned: imessageagents.org.
- Buyers are businesses building iMessage agents for their customers.
- Follow `design/approved-design.png`: white background, bespoke violet-blue grain-textured gradient, iMessage phone plus interactive builder, and a three-stage scroll story.
- Use fictional John's Pizza Shop. Do not include AARP or imply DoorDash is a customer.
- Retain the three approved value props. Avoid infinite-scale, guaranteed revenue, or compliance claims.
- Booking destination remains unset until the owner supplies it.
- This is a frontend prototype; do not silently add real message sending, checkout, backend services, or public deployment.
