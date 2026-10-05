# Design QA

final result: passed

## Evidence and comparison setup

- Source visual truth: `design/approved-design.png` (1190 × 1322 pixels).
- Desktop implementation: `design/qa/desktop.png` (1440 × 1040 pixels, CSS viewport 1440 × 1040, devicePixelRatio 1).
- Full hero comparison: `design/qa/comparison.png`, approved hero crop (0,0–1190,864) normalized to 1440 × 1040 alongside the browser capture. The source's lower value-proposition section is compared separately; a static mock cannot represent the additional scroll travel of a pinned story.
- Focused builder and conversation comparison: `design/qa/detail-comparison.png`.
- Product-section evidence: `design/qa/benefits.png`.
- Responsive evidence: `design/qa/mobile.png`, viewport 390 × 844, devicePixelRatio 1. Laptop viewport 1280 × 720 also inspected.
- Initial screenshot: `design/qa/desktop-before.png`.
- State: initial Message stage; additional Agent and Reply states exercised interactively in the Codex in-app browser.

## Comparison history

1. P2: The initial fixed minimum scene height clipped the phone and builder on a 1280 × 720 laptop. Removed the minimum height and added compact-height rules. Verified that the full pinned scene and stage controls remain visible.
2. P2: Using a pale region of the hero background to fill headline letters produced muted teal/gray text. Replaced it with a separate generated saturated violet-blue text-fill asset. Post-fix desktop and mobile captures show the intended colors.
3. P2: Builder details and headline hierarchy were undersized at desktop design width. Increased desktop typography, builder height, node labels, and conversation text; adjusted placement and phone angle. The final paired hero and detail comparisons contain the corrected state.
4. P2: The phone asset's blank-screen shading was visible between the status bar and conversation. Raised the real conversation surface beneath the preserved hardware island. Confirmed in the final desktop and mobile captures.

No actionable P0, P1, or P2 findings remain for the scoped interactive prototype.

## Required fidelity surfaces

- Typography: locally hosted Inter, consistent 400/500/600/700 weights, strong two-line hero and section headings, responsive wrapping. Real interface text replaces rasterized UI so states remain readable and interactive.
- Spacing and layout: company-first navigation, left hero copy, right iMessage phone, lower-left builder, three-stage rail, three editorial benefit columns, restrained closing CTA. Smaller screens use a single column without horizontal overflow. Native screen-reader labels and focus states are present.
- Colors: white-dominant surface, original generated violet/blue grain texture, saturated headline gradient, blue outgoing and gray incoming messages. Small builder metadata remains intentionally subdued, as in the visual target.
- Image quality: generated raster gradient, titanium phone hardware, pizza avatar, and luminous connection artwork; Phosphor library icons. The real flow map and Messages UI are interactive application components. Slight differences in hardware reflections and curve geometry are accepted asset-level variations, not a change in art direction.
- Copy: company, Ralley, fictional John's Pizza Shop, approved three benefits, scoped pilot footnote, and illustrative labels preserved. No real customer logo, unlimited-scale, compliance, or guaranteed revenue claims added.

## Interaction checks

- Message → Agent → Reply navigation and replay: passed on desktop.
- Native scroll activates the same stages; no wheel interception.
- Mobile explicit Agent/Reply step controls update aria-current: passed.
- Product navigation reaches the benefit section: passed.
- Memory detail opens, then transitions into Test Agent: passed.
- Scripted order message returns the example margherita reply: passed.
- Mobile Knowledge dialog opens and Escape closes it, restoring focus: passed.
- Booking buttons expose aria-disabled and perform no navigation while the URL is unset: intentional user constraint.
- Browser warning/error logs checked after the final asset update: empty.
- Horizontal overflow at 390 px: document width equals viewport width.
- Reduced-motion CSS and matchMedia handling reviewed. OS-level reduced-motion emulation was not available in this browser tool and is not claimed as a browser-tested setting.

## Intentional implementation differences / follow-up polish

- Native sticky positioning and scroll progress replace the original scroll-world generated-video pipeline. This was the agreed simpler approach.
- The approved static scene becomes three changing scenes. Explicit stage buttons provide keyboard access and mobile controls.
- A scripted test conversation is labeled as illustrative; it is not connected to a model, real iMessage, or order processing.
- P3: Generated hardware and connection artwork may receive further micro-polish. Additional raster compression can be done before a production launch.
- Cross-browser/device-lab coverage and a full accessibility audit remain outside this prototype pass.

## Implementation checklist

- [x] Selected design and generated assets implemented.
- [x] Desktop/laptop/mobile views inspected.
- [x] Primary prototype interactions exercised.
- [x] Full and focused visual comparison completed after corrections.
- [x] Booking destination left unset.


## Scroll focus revision — passed

User feedback supersedes the original connector treatment: removed the glowing cable. Continuous smoothstep scroll progress now centers and enlarges the desktop for 02 Agent, then centers the upright phone for 03 Reply. Each chapter has a hold interval; scrolling backward reverses the same camera path. Inactive builder controls are inert. Mobile uses direct chapter selection; reduced motion selects scenes without animation.

Verified in the browser at 1440×1040 and 1280×800: centered interfaces, unobstructed headings, builder Knowledge dialog, and intermediate scroll values (both interfaces partially visible in transit). Phone center measured at x=720 in the 1440px viewport. Mobile 390×844: Agent chapter isolates the builder with no horizontal overflow. Evidence: design/qa/agent-focus.png and design/qa/reply-focus.png.

Implementation uses live DOM camera transforms inspired by scroll-world; it does not import scroll-world's generated-video pipeline.


## Launch copy and alignment revision — passed

Removed tilt/perspective from the opening builder and phone, including mobile, and leveled the illustration caption. Removed “Meet Ralley” from hero and metadata. Chapter 02 now reads “Customize your agents” / “Your agents. Your way.” and describes flows, memory, knowledge, and actions. Visually verified both desktop chapters in the local browser. Production build passes. Screenshot: design/qa/customize-agent.png.

Cloudflare deployment completed after browser upload permission was granted. Published build from code commit 22f96fc to Worker imessage-agents-site and connected imessageagents.org. Verified the HTTPS production page, all images loaded, revised hero and customization copy, and both scroll focus scenes. Reply phone center measured at x=640 in a 1280px viewport. No browser console errors. Booking destination remains unset.


## Enterprise launch update — 2026-10-04

Source visual truth: current approved production page, captured in `design/qa/saas-before.png`. Implementation: `design/qa/saas-after.png`; both 1280×720 CSS pixels and PNG pixels (1×). Full-view comparison source: `design/saas-comparison.html`; screenshots compared side by side. Initial comparison used differing viewport sizes and was replaced with normalized captures. Additional evidence: `design/qa/saas-mobile.png`, `saas-trust-mobile.png` at 390×844, and `saas-pilot.png`.

Typography: original Inter weights and hero hierarchy retained; longer approved positioning wraps without overflow. Layout rhythm: original centered scroll sequence retained, new trust strip and two-column pilot follow section widths; mobile stacks into one column. Colors: white/violet/blue art direction preserved. Assets: original gradient/device assets unchanged; supplied Amazon logos used directly with contain sizing. Copy: owner-requested CTA and managed-pilot messaging implemented; logo claim remains gated for production pending confirmation. New standalone pages use a system sans-serif and a restrained version of the same palette. This is an intentional simplification.

Findings and fixes:
- P1 contact/privacy dev routes initially fell back to the home page. Converted to explicit Vite HTML entry points; both now render correctly in local Worker production mode.
- P2 short-desktop phone contents overflowed the frame at 1200×630. Scaled phone UI with container units and adjusted short-screen builder spacing; verified composer remains inside frame.
- Final side-by-side comparison preserves the source’s principal geometry and assets; new copy/navigation and proportional phone text are intentional changes. No remaining P0/P1/P2 visual issues found.

Interaction checks: mobile chapters and navigation, booking URL resolves to Enterprise Message Agents Demo, actual contact CTA navigation generated HTTP 204 from the local event endpoint and one `demo_click` with placement `contact`; no appointment was booked. Contact/privacy routes and metadata render in the built app. Build and eight tests pass. Cloudflare dry run accepts the Worker configuration. Cloudflare traffic analytics is already active, verified in dashboard.

Release status: not published. Cloudflare GitHub app authorization is staged for only skylerluk/imessage-agents-site and awaiting confirmation. Amazon relationship/logo approval and business contact email remain pending. Google’s booking form currently collects name/email; company/use-case fields and calendar branding need owner input. Conversion code is verified locally; production log delivery is pending deployment.

final result: passed

## Sales hero PR verification

- Direct iMessage headline, larger expert CTA, and high-contrast navigation implemented.
- Customer logos visible in the opening viewport at 1280×720 and 390×844; mobile has no horizontal overflow.
- Chapter 02 centers the builder and chapter 03 centers the phone.
- Booking URL retained; all existing 8 tests and production build pass.
- Browser console reports no errors. Evidence: `design/qa/sales-hero-desktop.png` and `design/qa/sales-hero-mobile.png`.
