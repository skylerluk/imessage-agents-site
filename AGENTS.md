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
- Booking destination: https://calendar.app.google/ymqk4oaTwvrGjepc9. Use accessible links for every demo CTA.
- This is a frontend prototype; do not silently add real message sending, checkout, backend services, or public deployment.

- Scroll feedback: no glowing connector across interfaces. Chapter 02 centers and enlarges the builder; chapter 03 centers the upright phone. Use continuous reversible scroll travel with a readable hold at each scene.

- Keep both interfaces upright and level in chapter 01. Omit “Meet Ralley” from the hero; chapter 02 focuses on customizing agents. Public deployment to imessageagents.org is now explicitly authorized.

- SaaS launch direction: managed pilot, explicit integration support, clear scope/access caveat, and truthful conversion measurement. User supplied Amazon and Amazon Prime logos and confirmed both the relationship and display authorization. Show the production trust strip. Public contact email: team@berkeleystrategygroup.org. The owner approved installing the Cloudflare Workers and Pages GitHub app for skylerluk/imessage-agents-site only.

- Sales homepage update: direct “Build and launch AI agents for iMessage” headline, prominent “Talk to an Expert” CTAs, high-contrast larger navigation, and approved customer logos inside the opening hero before any scrolling. Keep white/violet-blue styling and centered scroll chapters. Deliver this update as a PR and localhost preview.
