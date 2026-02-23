import { useMemo, useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <div className="logo">Rx</div>
          <div className="brandText">
            <div className="brandName">RxBridge</div>
            <div className="brandTag">Connect • Verify • Deliver</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#features" className="navLink">Features</a>
          <a href="#how" className="navLink">How it works</a>
          <a href="#status" className="navLink">Status</a>
          <a href="#contact" className="navLink navCta">Request access</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="main">
        <section className="hero">
          <div className="heroLeft">
            <div className="badge">Production • Cloudflare Pages</div>

            <h1 className="heroTitle">
              RxBridge
              <span className="heroTitleAccent"> — Prescription flow, simplified.</span>
            </h1>

            <p className="heroSubtitle">
              A clean, reliable bridge between patients, prescribers, pharmacies and delivery.
              Built for speed, auditability, and trust.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="#contact">Request access</a>
              <a className="btnSecondary" href="#features">See features</a>
            </div>

            <div className="heroStats">
              <div className="stat">
                <div className="statValue">Fast</div>
                <div className="statLabel">Vite + React</div>
              </div>
              <div className="stat">
                <div className="statValue">Secure</div>
                <div className="statLabel">Cloudflare edge</div>
              </div>
              <div className="stat">
                <div className="statValue">Traceable</div>
                <div className="statLabel">End-to-end records</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="card">
              <div className="cardTitle">Quick demo</div>
              <div className="cardRow">
                <span className="muted">Count</span>
                <span className="count">{count}</span>
              </div>
              <div className="cardButtons">
                <button className="btnSmall" onClick={() => setCount((c) => c + 1)}>
                  +1
                </button>
                <button className="btnSmallGhost" onClick={() => setCount(0)}>
                  Reset
                </button>
              </div>
              <div className="cardHint muted">
                This is just a placeholder widget — we’ll replace it with real RxBridge modules next.
              </div>
            </div>

            <div className="card subtle">
              <div className="cardTitle">What’s next</div>
              <ul className="list">
                <li>Patient onboarding</li>
                <li>Prescription verification</li>
                <li>Pharmacy dispatch & delivery status</li>
                <li>Audit log & reporting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="section">
          <h2 className="sectionTitle">Key features</h2>
          <p className="sectionSub">
            Everything you need to run a clean prescription-to-delivery workflow.
          </p>

          <div className="grid">
            <Feature
              title="Verification first"
              desc="Validate prescriber, patient, and medication rules before anything moves."
            />
            <Feature
              title="Status timeline"
              desc="Track every step: submitted → verified → dispensed → shipped → delivered."
            />
            <Feature
              title="Audit-ready"
              desc="Structured logs for compliance, reconciliation, and operational review."
            />
            <Feature
              title="Edge performance"
              desc="Low latency global delivery via Cloudflare Pages and Workers."
            />
            <Feature
              title="Simple admin"
              desc="Manage pharmacies, service areas, roles, and permissions in one place."
            />
            <Feature
              title="Integrations"
              desc="Hook into EHR/EMR, pharmacy systems, delivery partners, and payments."
            />
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="section">
          <h2 className="sectionTitle">How it works</h2>

          <div className="steps">
            <Step
              num="1"
              title="Capture"
              desc="Patient / clinician submits prescription request with essentials."
            />
            <Step
              num="2"
              title="Verify"
              desc="Rules + identity checks run, exceptions routed for review."
            />
            <Step
              num="3"
              title="Fulfil"
              desc="Pharmacy confirms stock, dispenses, packages, and dispatches."
            />
            <Step
              num="4"
              title="Deliver"
              desc="Courier updates status, patient receives and confirms delivery."
            />
          </div>
        </section>

        {/* Status */}
        <section id="status" className="section">
          <h2 className="sectionTitle">Project status</h2>
          <div className="status">
            <div>
              <div className="statusPill">Live</div>
              <div className="statusText">
                You are viewing the production environment on Cloudflare Pages.
              </div>
            </div>

            <div className="statusMeta">
              <div className="metaRow">
                <span className="muted">App</span>
                <span>RxBridge</span>
              </div>
              <div className="metaRow">
                <span className="muted">Frontend</span>
                <span>React + Vite</span>
              </div>
              <div className="metaRow">
                <span className="muted">Deploy</span>
                <span>GitHub → Cloudflare</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h2 className="sectionTitle">Request access</h2>
          <p className="sectionSub">
            Tell us who you are and what workflow you want to run. (This is a simple placeholder form.)
          </p>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — request received (demo).");
            }}
          >
            <div className="formRow">
              <label>
                Name
                <input placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@company.com" required />
              </label>
            </div>
            <label>
              Message
              <textarea placeholder="What do you want RxBridge to handle?" rows={4} required />
            </label>

            <button className="btnPrimary" type="submit">Send request</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footerRow">
          <span className="muted">© {year} RxBridge</span>
          <span className="muted">Deployed with Cloudflare Pages</span>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="feature">
      <div className="featureTitle">{title}</div>
      <div className="featureDesc">{desc}</div>
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="step">
      <div className="stepNum">{num}</div>
      <div>
        <div className="stepTitle">{title}</div>
        <div className="stepDesc">{desc}</div>
      </div>
    </div>
  );
}