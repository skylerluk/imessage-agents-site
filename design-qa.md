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
