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

The Product Design starter emits the client to `dist/client` and a portable Sites worker to `dist/server`. No public deployment or domain configuration has been performed.

## Experience

- Desktop: a pinned, scroll-driven Message → Agent → Reply sequence. Step controls and replay also work by keyboard.
- Small screens: a normal scrolling layout with explicit step controls. No scroll trapping.
- Reduced motion: no pinned scroll choreography or animated transitions; use the step controls.
- Click Flows, Memory, Knowledge, or Actions to inspect a demo configuration.
- Test Agent opens a scripted local conversation. No real iMessages, orders, integrations, or data collection occur.
- Book a demo is deliberately disabled while `BOOKING_URL` in `src/App.jsx` is empty. Supply the URL to enable all demo buttons.

## Design

The approved target is `design/approved-design.png`. Generated gradient, phone, connection, and avatar assets live in `public/assets`. `design-qa.md` records the visual comparison and browser checks.

The animation borrows scroll-world's continuous story structure. This implementation uses native scroll progress, sticky positioning, and separate product layers; it does not use the original scroll-world video generation pipeline or library.

The three core value propositions are a scoped two-week pilot, observability and A/B testing, and deployment tailored to the client's technical requirements. Customer-facing claims should be reviewed before public launch.

### Scroll chapters
The live interfaces follow a reversible scroll camera: overview → centered agent builder → centered iMessage phone. The desktop journey includes reading pauses, while mobile and reduced-motion users can select chapters directly. This adapts scroll-world's scene progression with live DOM transforms rather than its generated-video pipeline.

### Production deployment
Live at https://imessageagents.org on Cloudflare Workers static assets. Worker: `imessage-agents-site`; fallback URL: https://imessage-agents-site.team-4b7.workers.dev. Published the production output from code commit `22f96fc` through the Cloudflare dashboard, then attached the root domain. Future updates require a fresh build and deployment; GitHub auto-deploy is not configured. Upload only `dist/client`, not the repository.
