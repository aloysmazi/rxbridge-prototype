
import { useMemo, useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="page">
      <header className="header">
        <div className="container headerRow">
          <div className="brand">
            <div className="logo">RX</div>
            <div className="brandText">
              <div className="brandName">RX Bridge</div>
              <div className="brandTag">Production • Cloudflare Pages</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#contact" className="btnSmall">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <h1>RX Bridge</h1>
              <p className="lead">
                A simple, fast, production-ready web app deployed globally with Cloudflare Pages.
                This page is your “full content” landing experience.
              </p>

              <div className="ctaRow">
                <a className="btn" href="#contact">Get started</a>
                <a className="btnOutline" href="#features">See features</a>
              </div>

              <div className="miniPanel">
                <div className="miniTitle">Live demo component</div>
                <div className="counterRow">
                  <span className="pill">Count: {count}</span>
                  <button className="btnSmall" onClick={() => setCount((c) => c + 1)}>
                    +1
                  </button>
                  <button className="btnSmall btnGhost" onClick={() => setCount(0)}>
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="heroCard">
              <div className="cardTitle">What you have now</div>
              <ul className="checklist">
                <li>✅ GitHub repo connected</li>
                <li>✅ Build + Deploy working</li>
                <li>✅ Global CDN delivery</li>
                <li>✅ Ready for real pages & features</li>
              </ul>

              <div className="cardNote">
                Next: add pages, routing, auth, API, and a proper UI.
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About RX Bridge</h2>
            <p className="text">
              RX Bridge is your starting production platform. From here we can expand into:
              patient workflows, staffing flows, dashboards, integrations, secure login, and
              real data services.
            </p>

            <div className="grid3">
              <div className="card">
                <div className="cardTitle">Purpose</div>
                <p className="text">Move from prototype → production cleanly and quickly.</p>
              </div>
              <div className="card">
                <div className="cardTitle">Architecture</div>
                <p className="text">Vite + React frontend deployed on Cloudflare Pages.</p>
              </div>
              <div className="card">
                <div className="cardTitle">Scalability</div>
                <p className="text">Global edge delivery with simple CI/CD via Git push.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section alt">
          <div className="container">
            <h2>Key Features (ready to build)</h2>
            <div className="grid3">
              <Feature title="Fast UI" desc="React components, clean structure, easy to extend." />
              <Feature title="Global Deploy" desc="Cloudflare Pages = CDN + fast load everywhere." />
              <Feature title="Secure by Design" desc="Add auth, roles, and audit trails when ready." />
              <Feature title="API Ready" desc="Connect to REST/GraphQL or Cloudflare Workers." />
              <Feature title="Observability" desc="Add logs/analytics and error tracking." />
              <Feature title="Custom Domain" desc="Point a domain and enable HTTPS in minutes." />
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <h2>How it works</h2>
            <ol className="steps">
              <li>Edit code in <code>src/App.jsx</code> (and CSS).</li>
              <li>Commit & push to <code>main</code>.</li>
              <li>Cloudflare automatically builds and deploys.</li>
              <li>Refresh your URL — changes are live.</li>
            </ol>

            <div className="miniPanel">
              <div className="miniTitle">Quick deploy commands</div>
              <pre className="code">
{`git add .
git commit -m "Update RX Bridge content"
git push origin main`}
              </pre>
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container">
            <h2>Contact</h2>
            <p className="text">
              Put your real contact details here (email / WhatsApp / form).
            </p>

            <div className="contactRow">
              <div className="card">
                <div className="cardTitle">Email</div>
                <p className="text">hello@rxbridge.com</p>
              </div>
              <div className="card">
                <div className="cardTitle">WhatsApp</div>
                <p className="text">+44 / +250 (add your number)</p>
              </div>
              <div className="card">
                <div className="cardTitle">Next step</div>
                <p className="text">Tell me the sections you want and I’ll tailor the page.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerRow">
          <span>© {year} RX Bridge</span>
          <span className="muted">Deployed with Cloudflare Pages</span>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <p className="text">{desc}</p>
    </div>
  );
}
:root {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Arial, sans-serif;
  line-height: 1.4;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: #0b0f17;
  color: #e7eefc;
}

a { color: inherit; text-decoration: none; opacity: 0.9; }
a:hover { opacity: 1; }

.page { min-height: 100vh; }

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(11, 15, 23, 0.7);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.headerRow {
  display: flex;
  align-items