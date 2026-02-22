import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ marginBottom: 8 }}>RX Bridge Production 🚀</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        Deployed with Cloudflare Pages
      </p>

      <section
       Ss
 style={{
          marginTop: 24,
          padding: 16,
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 12,
        }}
      >
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Count: {count}
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            marginLeft: 12,
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </section>
    </main>
  );
}