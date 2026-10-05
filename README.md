# Enterprise Message Agents · Ralley

An interactive marketing prototype based on the approved white, violet, and blue design. Businesses build agents for their customers; John's Pizza Shop is a fictional demonstration.

## Local development

Requires Node.js 20.19+ (or 22.12+) and npm.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4173
```

## Checks

```sh
npm run build
npm run test:sites
```

The Product Design starter emits the client to `dist/client` and a portable Sites worker to `dist/server`. The site is deployed to imessageagents.org through Cloudflare.

## Experience

- Desktop: a pinned, scroll-driven Message → Agent → Reply sequence. Step controls and replay also work by keyboard.
- Small screens: a normal scrolling layout with explicit step controls. No scroll trapping.
- Reduced motion: no pinned scroll choreography or animated transitions; use the step controls.
- Click Flows, Memory, Knowledge, or Actions to inspect a demo configuration.
- Test Agent opens a scripted local conversation. No real iMessages or orders are sent by the example. Production demo-link clicks are measured as described below.
- Book a demo links to the approved Google Calendar booking page.

## Design

The approved target is `design/approved-design.png`. Generated gradient, phone, connection, and avatar assets live in `public/assets`. `design-qa.md` records the visual comparison and browser checks.

The animation borrows scroll-world's continuous story structure. This implementation uses native scroll progress, sticky positioning, and separate product layers; it does not use the original scroll-world video generation pipeline or library.

The three core value propositions are a scoped two-week pilot, observability and A/B testing, and deployment tailored to the client's technical requirements. Customer-facing claims should be reviewed before public launch.

### Scroll chapters
The live interfaces follow a reversible scroll camera: overview → centered agent builder → centered iMessage phone. The desktop journey includes reading pauses, while mobile and reduced-motion users can select chapters directly. This adapts scroll-world's scene progression with live DOM transforms rather than its generated-video pipeline.

### Production deployment
Live at https://imessageagents.org on Cloudflare Workers static assets. Worker: `imessage-agents-site`; fallback URL: https://imessage-agents-site.team-4b7.workers.dev. Published the production output from code commit `22f96fc` through the Cloudflare dashboard, then attached the root domain. Future updates require a fresh build and deployment; GitHub auto-deploy is not configured. Upload only `dist/client`, not the repository.

## Enterprise launch update

- All demo CTAs open the owner’s Google Calendar booking page. Google collects name/email. Company and use-case questions should be added to the calendar’s booking form once the owner confirms its settings; no duplicate form or unsaved lead capture is used.
- Contact and website privacy pages are HTML entry points in `contact/` and `privacy/`. Public contact email: team@berkeleystrategygroup.org. Calendar and appointment replies are also available.
- The Amazon and Amazon Prime trust strip is enabled for production after the owner confirmed the relationship and logo authorization.
- `wrangler.jsonc` targets the existing Cloudflare Worker `imessage-agents-site`, serves `dist/client`, and invokes `worker/marketing.js` only for `/api/*`. Existing Sites starter files are preserved.
- Automatic deployment setup: connect only `skylerluk/imessage-agents-site` in Cloudflare Builds, production branch `main`, build `npm run build && npm test`, deploy `npx wrangler deploy`, root `/`. Disable non-production deployments unless requested. GitHub app installation is owner-authorized; GitHub reauthentication is in progress. No tokens are stored in this repository.
- GitHub Actions runs build/tests on PRs and main pushes.
- Cloudflare Web Analytics is already enabled automatically for imessageagents.org (verified in the dashboard). Avoid adding a second beacon.
- The new conversion endpoint records only `demo_click` and a fixed CTA placement in Cloudflare Workers Logs. View the Worker’s Observability logs and filter the message event `demo_click`; group/count by placement. Logs are a short-term, best-effort measure, not a count of unique people or completed bookings. DNT/GPC signals suppress events. The endpoint rejects cross-origin requests, unexpected events, arbitrary placements, and bodies larger than 256 bytes. Bots can still imitate public clicks.
- Confirmed appointments remain in Google Calendar; do not label clicks as bookings.
- Deploy using `npm run deploy` with authorized Cloudflare access, or the configured Cloudflare Builds workflow. Static ZIP upload alone will not deploy the new event endpoint.
- Social card source: `design/social-card.html`; exported 1200×630 PNG: `public/assets/social-preview.png`.
