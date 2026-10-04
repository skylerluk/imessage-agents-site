import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  ArrowCounterClockwise,
  CaretLeft,
  CaretRight,
  Plus,
  Microphone,
  CellSignalFull,
  WifiHigh,
  BatteryFull,
  SquaresFour,
  GitBranch,
  Brain,
  BookOpen,
  Lightning,
  ChatCircle,
  X,
  Check,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";

// Deliberately unset until the owner provides a booking destination.
const BOOKING_URL = "";
const sections = [
  {
    name: "Flows",
    icon: GitBranch,
    color: "blue",
    text: "What the agent does in each situation.",
    detail: "Menu & ordering",
    description: "Help customers find their favorites and prepare an order.",
  },
  {
    name: "Memory",
    icon: Brain,
    color: "purple",
    text: "What the agent remembers about customers.",
    detail: "A little familiarity goes a long way.",
    description:
      "Remember a favorite order, a preference, or where the conversation left off.",
  },
  {
    name: "Knowledge",
    icon: BookOpen,
    color: "teal",
    text: "Information the agent can use.",
    detail: "Your business. Your information.",
    description:
      "Give your agent the menu, opening hours, and information customers need.",
  },
  {
    name: "Actions",
    icon: Lightning,
    color: "green",
    text: "Things the agent can do.",
    detail: "Turn a conversation into a next step.",
    description:
      "Connect the conversation to the tools and workflows your business uses.",
  },
];
const steps = ["Message", "Agent", "Reply"];
const benefits = [
  [
    "Live pilot in two weeks.",
    "Move from idea to a working iMessage pilot without months of in-house setup.",
  ],
  [
    "See what works. Improve it.",
    "Use observability and A/B testing to uncover revenue opportunities and improve your agent.",
  ],
  [
    "Built to fit your systems.",
    "We handle deployment and integration, tailored to your technical requirements.",
  ],
];
function DemoButton({ small = false }) {
  return (
    <button
      className={`button ${small ? "button-small" : ""}`}
      aria-disabled={!BOOKING_URL}
      title={!BOOKING_URL ? "Demo booking will be available soon." : undefined}
      onClick={() => {
        if (BOOKING_URL) window.location.assign(BOOKING_URL);
      }}
    >
      Book a demo{!small && <ArrowRight size={19} aria-hidden="true" />}
    </button>
  );
}
function Phone({ step }) {
  return (
    <div
      className="phone"
      aria-label="Illustrative iMessage conversation with John's Pizza Shop"
    >
      <div className="phone-paper" />
      <img
        className="phone-hardware"
        src="/assets/phone-frame.png"
        alt=""
        fetchPriority="high"
      />
      <div className="phone-status" aria-hidden="true">
        <b>9:41</b>
        <span>
          <CellSignalFull weight="fill" />
          <WifiHigh weight="bold" />
          <BatteryFull weight="fill" />
        </span>
      </div>
      <div className="phone-ui">
        <div className="contact">
          <CaretLeft className="back-icon" size={23} />
          <img src="/assets/pizza-avatar.png" alt="" />
          <div>
            John’s Pizza Shop <CaretRight size={10} />
          </div>
        </div>
        <div className="messages">
          <span className="message-label">iMessage</span>
          <p className="bubble outgoing">Can I get my usual for tonight?</p>
          <p className={`bubble incoming ${step === 1 ? "bubble-muted" : ""}`}>
            One large margherita?
            <br />
            Pickup or delivery?
          </p>
          <p className={`bubble outgoing ${step === 1 ? "bubble-muted" : ""}`}>
            Pickup, please.
          </p>
          {step === 1 ? (
            <div className="thinking">
              <span />
              <span />
              <span />
              <span className="sr-only">Preparing a reply</span>
            </div>
          ) : (
            <p
              className={`bubble incoming ${step === 2 ? "reply-reveal" : ""}`}
            >
              Ready around 7.
              <br />
              Want me to place the order?
            </p>
          )}
        </div>
        <div className="composer" aria-hidden="true">
          <Plus size={20} />
          <div>
            iMessage
            <Microphone size={17} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Builder({ step, selected, onSelect, onTest }) {
  return (
    <div className={`builder ${step === 1 ? "builder-focused" : ""}`}>
      <div className="builder-top">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>Ralley · Agent builder</span>
        <span className="builder-demo">Interactive demo</span>
      </div>
      <div className="builder-body">
        <aside className="builder-sidebar">
          <strong>
            Enterprise
            <br />
            Message Agents
          </strong>
          <span className="sidebar-label">BUILD</span>
          <button
            className={!selected ? "nav-active" : ""}
            onClick={() => onSelect(null)}
          >
            <SquaresFour />
            Map
          </button>
          {sections.slice(0, 2).map((s) => (
            <button key={s.name} onClick={() => onSelect(s.name)}>
              <s.icon />
              {s.name}
            </button>
          ))}
          <span className="sidebar-label">CONNECT</span>
          {sections.slice(2).map((s) => (
            <button key={s.name} onClick={() => onSelect(s.name)}>
              <s.icon />
              {s.name}
            </button>
          ))}
          <span className="sidebar-label">TEST</span>
          <button onClick={onTest}>
            <ChatCircle />
            Test agent
          </button>
          <div className="workspace">
            <img src="/assets/pizza-avatar.png" alt="" />
            <div>
              John’s Pizza Shop
              <small>
                <span className="status-dot" />
                Live
              </small>
            </div>
          </div>
        </aside>
        <div className="builder-main">
          <div className="map-toolbar">
            <span>Map</span>
            <div>
              <span className="live">Live</span>
              <button onClick={onTest}>
                Test <ArrowRight size={10} />
              </button>
            </div>
          </div>
          <div className="map-heading">
            <h3>John’s Pizza Shop</h3>
            <p>See and edit how your agent works.</p>
          </div>
          <div className="map-canvas">
            <div className="agent-node">
              <img src="/assets/pizza-avatar.png" alt="" />
              <div>
                <strong>John’s Pizza Shop</strong>
                <small>iMessage agent for your customers.</small>
              </div>
              <span className="live">Live</span>
            </div>
            <div className="node-connectors" aria-hidden="true" />
            <div className="node-grid">
              {sections.map((s) => (
                <button
                  key={s.name}
                  className={`node ${s.color} ${step === 1 && ["Memory", "Knowledge"].includes(s.name) ? "node-active" : ""}`}
                  onClick={() => onSelect(s.name)}
                >
                  <span className="node-title">
                    <span className="node-dot" />
                    {s.name}
                    <CaretRight size={10} />
                  </span>
                  <span>{s.text}</span>
                </button>
              ))}
            </div>
            <div className="map-hint">
              <MagnifyingGlass size={10} /> Select a part of your agent to
              explore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Smooth, reversible camera travel with a pause at each focal interface.
const focusProgress = (value, start, end) => {
  const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
  return t * t * (3 - 2 * t);
};
export function App() {
  const story = useRef(null),
    dialog = useRef(null);
  const [progress, setProgress] = useState(0),
    [reduced, setReduced] = useState(false),
    [compact, setCompact] = useState(false),
    [manualStep, setManualStep] = useState(0);
  const [selected, setSelected] = useState(null),
    [showTest, setShowTest] = useState(false),
    [testMessage, setTestMessage] = useState(""),
    [submitted, setSubmitted] = useState(""),
    [testReply, setTestReply] = useState("");
  const step =
    reduced || compact
      ? manualStep
      : progress < 0.3
        ? 0
        : progress < 0.72
          ? 1
          : 2;
  const sceneProgress =
    reduced || compact ? [0, 0.48, 0.88][manualStep] : progress;
  const agentFocus = focusProgress(sceneProgress, 0.08, 0.36);
  const replyFocus = focusProgress(sceneProgress, 0.58, 0.84);
  const activeSection = sections.find((s) => s.name === selected);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)"),
      mobile = matchMedia("(max-width: 760px)");
    const sync = () => {
      setReduced(motion.matches);
      setCompact(mobile.matches);
    };
    sync();
    motion.addEventListener("change", sync);
    mobile.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      mobile.removeEventListener("change", sync);
    };
  }, []);
  useEffect(() => {
    let frame;
    const measure = () => {
      const el = story.current;
      if (!el) return;
      const rect = el.getBoundingClientRect(),
        travel = el.offsetHeight - (innerHeight - 80);
      setProgress(
        travel > 0 ? Math.max(0, Math.min(1, (80 - rect.top) / travel)) : 0,
      );
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    measure();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);
  useEffect(() => {
    if (activeSection || showTest) dialog.current?.showModal();
    else dialog.current?.close();
  }, [activeSection, showTest]);
  const moveToStep = (index) => {
    if (compact || reduced) {
      setManualStep(index);
      return;
    }
    const el = story.current,
      top = el.getBoundingClientRect().top + scrollY - 80,
      travel = el.offsetHeight - (innerHeight - 80);
    window.scrollTo({
      top: top + travel * [0, 0.48, 0.88][index],
      behavior: "smooth",
    });
  };
  const closeDialog = () => {
    setSelected(null);
    setShowTest(false);
  };
  const sendTest = (e) => {
    e.preventDefault();
    const text = testMessage.trim();
    if (!text) return;
    setSubmitted(text);
    const lower = text.toLowerCase();
    setTestReply(
      /usual|pizza|order|margherita/.test(lower)
        ? "One large margherita? Would you like pickup or delivery?"
        : /hour|open|close/.test(lower)
          ? "In this demo, John’s Pizza Shop is open from 11 am to 9 pm. Thinking about dinner?"
          : /pickup|delivery/.test(lower)
            ? "Pickup sounds good. What would you like to order?"
            : "I can help with the menu, opening hours, or your usual order. What sounds good?",
    );
    setTestMessage("");
  };
  return (
    <>
      <a className="skip-link" href="#product">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-inner">
          <a className="wordmark" href="#top">
            Enterprise Message Agents
          </a>
          <nav aria-label="Main navigation">
            <a href="#product">Product</a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                moveToStep(1);
              }}
            >
              How it works
            </a>
          </nav>
          <DemoButton small />
        </div>
      </header>
      <main id="top">
        <section
          ref={story}
          id="how-it-works"
          className={`story ${reduced ? "reduced" : ""}`}
          aria-label="How Ralley connects your business to iMessage"
        >
          <div
            className={`story-sticky step-${step}`}
            style={{
              "--progress": sceneProgress,
              "--agent-focus": agentFocus,
              "--reply-focus": replyFocus,
              "--phone-opacity": 1 - agentFocus * (1 - replyFocus),
            }}
          >
            <img
              className="hero-gradient"
              src="/assets/hero-gradient.png"
              alt=""
              fetchPriority="high"
            />
            <div className="scene-content">
              <div className="hero-copy">
                <h1>
                  A new <span className="gradient-text">front door</span>
                  <br />
                  for your business.
                </h1>
                <p>
                  Build and manage AI agents your customers
                  <br className="desktop-break" /> can talk to in iMessage.
                </p>
                <DemoButton />
              </div>
              <div className="story-copy" aria-live="polite">
                <span className="eyebrow">
                  {step === 1
                    ? "CUSTOMIZE YOUR AGENTS"
                    : "A FAMILIAR WAY TO CONNECT"}
                </span>
                <h2>
                  {step === 1 ? (
                    <>
                      Your agents.
                      <br />
                      <span className="gradient-text">Your way.</span>
                    </>
                  ) : (
                    <>
                      Your business.
                      <br />
                      <span className="gradient-text">One text away.</span>
                    </>
                  )}
                </h2>
                <p>
                  {step === 1
                    ? "Customize your agents’ flows, memory, knowledge, and actions. Shape every conversation around your business."
                    : "A helpful conversation, right where your customers already are."}
                </p>
              </div>
              <div
                className="step-nav"
                role="group"
                aria-label="Conversation story"
              >
                <div className="step-track" />
                {steps.map((label, i) => (
                  <button
                    key={label}
                    aria-current={step === i ? "step" : undefined}
                    onClick={() => moveToStep(i)}
                  >
                    <span className="step-marker" />
                    <span>
                      <small>0{i + 1}</small>
                      {label}
                    </span>
                  </button>
                ))}
              </div>
              <div className="builder-position" inert={replyFocus > 0.8}>
                <Builder
                  step={step}
                  selected={selected}
                  onSelect={setSelected}
                  onTest={() => setShowTest(true)}
                />
              </div>
              <div
                className="phone-position"
                aria-hidden={agentFocus === 1 && replyFocus === 0}
              >
                <Phone step={step} />
                <p className="illustrative">Illustrative conversation</p>
              </div>
              <div className="story-bottom">
                <span>
                  <ArrowDown size={13} /> Scroll to see the connection
                </span>
                <button onClick={() => moveToStep(step === 2 ? 0 : step + 1)}>
                  {step === 2 ? (
                    <>
                      <ArrowCounterClockwise size={13} /> Replay the story
                    </>
                  ) : (
                    <>
                      Explore {steps[step + 1].toLowerCase()}{" "}
                      <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="product" className="benefits section-shell">
          <div className="section-heading">
            <span className="eyebrow">BUILT FOR YOUR BUSINESS</span>
            <h2>
              Launch faster.
              <br />
              <span className="gradient-text">Keep getting better.</span>
            </h2>
          </div>
          <div className="benefit-grid">
            {benefits.map(([title, copy], i) => (
              <article key={title}>
                <span className="benefit-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                {i === 0 && (
                  <small>Pilot timing depends on scope and access.</small>
                )}
              </article>
            ))}
          </div>
        </section>
        <section className="closing section-shell">
          <div>
            <span className="eyebrow">INTRODUCING RALLEY</span>
            <h2>
              Meet your customers
              <br />
              in their next message.
            </h2>
          </div>
          <DemoButton />
        </section>
      </main>
      <footer className="section-shell">
        <a className="footer-brand" href="#top">
          Enterprise Message Agents
        </a>
        <span>Ralley · Your business, in the conversation.</span>
        <small>© {new Date().getFullYear()} Enterprise Message Agents</small>
      </footer>
      <dialog
        ref={dialog}
        onCancel={closeDialog}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
        onClose={closeDialog}
        aria-labelledby="dialog-title"
      >
        <button
          className="dialog-close"
          aria-label="Close"
          onClick={closeDialog}
        >
          <X size={21} />
        </button>
        {activeSection ? (
          <>
            <span className={`dialog-icon ${activeSection.color}`}>
              <activeSection.icon size={27} />
            </span>
            <span className="eyebrow">
              EXPLORE RALLEY · {activeSection.name.toUpperCase()}
            </span>
            <h2 id="dialog-title">{activeSection.detail}</h2>
            <p>{activeSection.description}</p>
            <div className="detail-example">
              <span className="eyebrow">JOHN’S PIZZA SHOP · EXAMPLE</span>
              {selected === "Memory" ? (
                <>
                  <div>
                    <span>Favorite order</span>
                    <strong>Large margherita</strong>
                  </div>
                  <div>
                    <span>Preference</span>
                    <strong>Pickup</strong>
                  </div>
                </>
              ) : selected === "Knowledge" ? (
                <>
                  <div>
                    <span>Menu</span>
                    <strong>Connected</strong>
                  </div>
                  <div>
                    <span>Store information</span>
                    <strong>Opening hours & location</strong>
                  </div>
                </>
              ) : selected === "Flows" ? (
                <>
                  <div>
                    <span>Understand the request</span>
                    <Check />
                  </div>
                  <div>
                    <span>Find the right order</span>
                    <Check />
                  </div>
                  <div>
                    <span>Ask the customer to confirm</span>
                    <Check />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span>Prepare an order</span>
                    <strong>Example workflow</strong>
                  </div>
                  <p>
                    Actions are configured around your systems and technical
                    requirements.
                  </p>
                </>
              )}
            </div>
            <button
              className="button"
              onClick={() => {
                setSelected(null);
                setShowTest(true);
              }}
            >
              Try the conversation <ArrowRight size={17} />
            </button>
          </>
        ) : (
          <>
            <span className="eyebrow">RALLEY · INTERACTIVE DEMO</span>
            <h2 id="dialog-title">Text John’s Pizza Shop.</h2>
            <p>Try “Can I get my usual?” or ask about opening hours.</p>
            <div className="test-messages" aria-live="polite">
              {submitted ? (
                <>
                  <p className="bubble outgoing">{submitted}</p>
                  <p className="bubble incoming">{testReply}</p>
                </>
              ) : (
                <p className="test-empty">
                  Your next conversation starts here.
                </p>
              )}
            </div>
            <form onSubmit={sendTest}>
              <label className="sr-only" htmlFor="test-input">
                Your message
              </label>
              <input
                id="test-input"
                placeholder="Type your message…"
                value={testMessage}
                onChange={(e) => setTestMessage(e.target.value)}
                maxLength={250}
                required
              />
              <button type="submit" aria-label="Send message">
                <ArrowRight size={20} />
              </button>
            </form>
            <small className="demo-note">
              Illustrative demo with scripted replies. No messages or orders are
              sent.
            </small>
          </>
        )}
      </dialog>
    </>
  );
}
