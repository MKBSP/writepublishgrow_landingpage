"use client";

import { useState } from "react";
import Nav from "@/components/Nav";

const LINK_TOPICS = new Set([
  "Product question / pre-sales",
  "Channel integration request",
  "Feature request",
  "Something else",
]);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("Product question / pre-sales");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      topic: (form.elements.namedItem("topic") as HTMLSelectElement).value,
      link: (form.elements.namedItem("link") as HTMLInputElement)?.value || undefined,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Something went wrong.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Nav variant="aux" />

      {/* ============ HERO ============ */}
      <header className="aux-hero">
        <div className="wrap">
          <div className="eyebrow">Get in touch</div>
          <h1>
            Write to <em>us</em> too.
          </h1>
          <p className="lede">
            We read every message and reply within one business day. If
            something&rsquo;s on fire, mark it urgent and we&rsquo;ll move
            faster. Real humans, no autoresponders.
          </p>
        </div>
      </header>

      {/* ============ BODY ============ */}
      <section className="aux-body">
        <div className="wrap">
          <div className="aux-single">
            <div className="label section" style={{ marginBottom: 18 }}>
              Send a message
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="e.g. Mira Lindh"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@yourdomain.com"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="topic">What&rsquo;s this about?</label>
                  <select
                    id="topic"
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  >
                    <option>Product question / pre-sales</option>
                    <option>I&rsquo;m a paid user and need support</option>
                    <option>Channel integration request</option>
                    <option>Feature request</option>
                    <option>Press / podcast</option>
                    <option>Partnership or affiliate</option>
                    <option>Bug report</option>
                    <option>Something else</option>
                  </select>
                </div>

                {LINK_TOPICS.has(topic) && (
                  <div className="form-row">
                    <label htmlFor="link">
                      Link to your blog or newsletter{" "}
                      <span
                        style={{
                          color: "var(--muted)",
                          textTransform: "none",
                          letterSpacing: 0,
                          fontFamily: "'Geist', sans-serif",
                          fontSize: "11px",
                        }}
                      >
                        (optional, helps us understand your work)
                      </span>
                    </label>
                    <input
                      id="link"
                      type="url"
                      name="link"
                      placeholder="https://yourblog.com  or  yourname.substack.com"
                    />
                  </div>
                )}

                <div className="form-row">
                  <label htmlFor="msg">Message</label>
                  <textarea
                    id="msg"
                    name="message"
                    placeholder="Be as specific as you like. Links and screenshots help."
                    required
                  ></textarea>
                </div>

                {error && (
                  <p style={{ color: "var(--bad)", fontSize: 14, margin: "0 0 12px" }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="lp-btn primary"
                  disabled={loading}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "14px",
                    opacity: loading ? 0.6 : 1,
                  }}
                >
                  <span>{loading ? "Sending..." : "Send message"}</span>
                  <span className="arrow">&rarr;</span>
                </button>
              </form>
            ) : (
              <div
                style={{
                  border: "1.5px solid var(--ink)",
                  background: "var(--paper-2)",
                  padding: 24,
                  boxShadow: "4px 4px 0 var(--accent)",
                }}
              >
                <div className="label" style={{ marginBottom: 8 }}>
                  Message sent
                </div>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: "-0.012em",
                  }}
                >
                  Got it. We&rsquo;ll reply within one business day.
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "var(--ink-2)",
                  }}
                >
                  Replies come from a real person, usually{" "}
                  <b>hello@writepublishgrow.com</b>. Check spam if you
                  don&rsquo;t see us by Monday.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
