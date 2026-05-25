"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      newsletterName: (form.elements.namedItem("newsletterName") as HTMLInputElement).value,
      subscriberRange: (form.elements.namedItem("subscriberRange") as HTMLSelectElement).value,
      newsletterLink: (form.elements.namedItem("newsletterLink") as HTMLInputElement).value || undefined,
      updatesConsent: (form.elements.namedItem("updatesConsent") as HTMLInputElement).checked,
    };

    try {
      const res = await fetch("/api/waitlist", {
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
          <div className="eyebrow">Waitlist &middot; spots opening weekly</div>
          <h1>
            Join the waitlist.
            <br />
            <em>We&rsquo;ll come find you.</em>
          </h1>
          <p className="lede">
            We&rsquo;re letting writers in by hand, in small batches, so we can
            keep the manual touch that made the first 43 writers grow 3&ndash;6&times;.
            Drop your email and a link to your work&mdash;we&rsquo;ll reach out
            when your slot opens.
          </p>
        </div>
      </header>

      {/* ============ BODY ============ */}
      <section className="aux-body">
        <div className="wrap">
          <div className="aux-single" id="wl-card">
            <div className="label section" style={{ marginBottom: 18, fontSize: 18, fontWeight: 600 }}>
              Tell us about your work
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="email">
                    Email{" "}
                    <span
                      style={{
                        color: "var(--bad)",
                        fontFamily: "inherit",
                        textTransform: "none",
                        letterSpacing: 0,
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@yourdomain.com"
                    required
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="newsletter-name">
                    Newsletter name{" "}
                    <span
                      style={{
                        color: "var(--bad)",
                        fontFamily: "inherit",
                        textTransform: "none",
                        letterSpacing: 0,
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input
                    id="newsletter-name"
                    type="text"
                    name="newsletterName"
                    placeholder="e.g. The Slow Internet"
                    required
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="subscriber-range">
                    Subscriber range{" "}
                    <span
                      style={{
                        color: "var(--bad)",
                        fontFamily: "inherit",
                        textTransform: "none",
                        letterSpacing: 0,
                      }}
                    >
                      *
                    </span>
                  </label>
                  <select id="subscriber-range" name="subscriberRange" required>
                    <option value="0-10">0 &ndash; 10</option>
                    <option value="10-100">10 &ndash; 100</option>
                    <option value="100-500">100 &ndash; 500</option>
                    <option value="500-1000">500 &ndash; 1,000</option>
                    <option value="1000-5000">1,000 &ndash; 5,000</option>
                    <option value="5000+">5,000+</option>
                  </select>
                </div>

                <div className="form-row">
                  <label htmlFor="link">
                    Link to your newsletter{" "}
                    <span
                      style={{
                        color: "var(--muted)",
                        textTransform: "none",
                        letterSpacing: 0,
                        fontFamily: "'Geist', sans-serif",
                        fontSize: "11px",
                      }}
                    >
                      (optional, but it helps us prioritize you)
                    </span>
                  </label>
                  <input
                    id="link"
                    type="url"
                    name="newsletterLink"
                    placeholder="https://yourblog.com  or  yourname.substack.com"
                  />
                </div>

                <div className="form-row">
                  <label
                    htmlFor="updates-consent"
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      textTransform: "none",
                      letterSpacing: 0,
                      fontFamily: "'Geist', sans-serif",
                      fontSize: 13,
                      color: "var(--ink-2)",
                    }}
                  >
                    <input id="updates-consent" type="checkbox" name="updatesConsent" />
                    <span>
                      It&apos;s ok to email me about the product and other things you do,
                      so I know when it is ready.
                    </span>
                  </label>
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
                  <span>{loading ? "Submitting..." : "Put me on the waitlist"}</span>
                  <span className="arrow">&rarr;</span>
                </button>

                <p
                  className="label"
                  style={{
                    marginTop: 14,
                    lineHeight: 1.5,
                    textTransform: "none",
                    letterSpacing: 0,
                    fontFamily: "'Geist', sans-serif",
                    color: "var(--muted)",
                  }}
                >
                  We&rsquo;ll only email you when your slot opens. No drip
                  campaigns, no spam, no resold list&mdash;we hate that as much
                  as you do.
                </p>
              </form>
            ) : (
              <div>
                <div className="label" style={{ marginBottom: 10 }}>
                  You&rsquo;re on the list
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 26,
                    fontWeight: 600,
                    letterSpacing: "-0.014em",
                  }}
                >
                  Got it. We&rsquo;ll come find you.
                </h3>
                <p
                  style={{
                    margin: "0 0 18px",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                  }}
                >
                  A real person will email you when your slot opens&mdash;usually
                  within 2&ndash;3 weeks. In the meantime, the blog has notes
                  from the workshop and the receipts from the last batch.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link className="lp-btn" href="/blog">
                    <span>Read the blog</span>
                    <span className="arrow">&rarr;</span>
                  </Link>
                  <Link className="lp-btn" href="/#cases">
                    <span>See the receipts</span>
                    <span className="arrow">&nearr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Demand note */}
          <div className="wl-demand">
            <div className="wl-demand-tag">A note from us</div>
            <div className="wl-demand-body">
              <h4>Demand has been higher than we expected.</h4>
              <p>
                We&rsquo;re a tiny team. We want every writer who gets in to
                feel the same hands-on attention the first users got, so we&rsquo;re
                moving through the list deliberately instead of opening the
                floodgates. Sign up here and we&rsquo;ll send you an invite as
                soon as your slot is ready. No drip emails in between&mdash;just
                the one that matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
