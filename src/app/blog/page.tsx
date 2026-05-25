"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

const categories = [
  "All",
  "Research",
  "Channel tactics",
  "Behind the build",
  "Writer interviews",
  "Changelog",
];

const posts = [
  {
    cat: "Behind the build",
    title: "Why we built WPG (and not another scheduler).",
    excerpt:
      "There are 18 social schedulers. None of them slice your essay. None of them know who reads what. Here\u2019s why we started over.",
    date: "May 12",
    time: "6 min",
  },
  {
    cat: "Research",
    title: "The math on AI slop in 2026.",
    excerpt:
      "~42% of posts on the top six platforms last quarter were AI-generated. Here\u2019s how that\u2019s changing what the algorithms surface\u2014and what to do about it.",
    date: "May 5",
    time: "11 min",
  },
  {
    cat: "Writer interviews",
    title:
      '\u201CI stopped doing distribution.\u201D \u2014 Hannah Kassem on writing again.',
    excerpt:
      "A 20-minute conversation with a climate essayist who fired her social calendar and started writing twice as much.",
    date: "Apr 28",
    time: "18 min",
  },
  {
    cat: "Channel tactics",
    title: "Why Daily.Dev is the most underrated channel for tech writers.",
    excerpt:
      "Median post on Daily.Dev gets 4\u00d7 the time-on-page of an equivalent X thread. Here\u2019s how to fit your essay to it.",
    date: "Apr 21",
    time: "9 min",
  },
  {
    cat: "Behind the build",
    title: "Pay-once software is back. Here\u2019s the spreadsheet.",
    excerpt:
      "How we modeled Cloud Pro vs. Desktop pricing, and why both editions exist instead of forcing a choice.",
    date: "Apr 14",
    time: "8 min",
  },
  {
    cat: "Research",
    title: 'What 43 writers taught us about the \u201Cright room.\u201D',
    excerpt:
      "Six months of manual forum-scouting, in one essay. The patterns that became the agent.",
    date: "Apr 7",
    time: "14 min",
  },
  {
    cat: "Channel tactics",
    title: "Three frameworks for writing posts that earn the click.",
    excerpt:
      "The hook, the seed, the loop. The three structures we keep seeing in posts that pull readers back to long-form.",
    date: "Mar 31",
    time: "7 min",
  },
  {
    cat: "Behind the build",
    title: "How the prediction engine actually works (no magic).",
    excerpt:
      "It\u2019s a gradient-boosted model on a few hundred features. Here\u2019s what\u2019s in it, what isn\u2019t, and where it still gets things wrong.",
    date: "Mar 24",
    time: "12 min",
  },
  {
    cat: "Changelog",
    title: "v0.7 \u2014 Substack Notes, Daily.Dev, and the new calendar.",
    excerpt:
      "What shipped in May, what\u2019s queued for June, and which suggestions from you turned into roadmap items.",
    date: "Mar 17",
    time: "4 min",
  },
];

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [nlSubscribed, setNlSubscribed] = useState(false);
  const [bandSubscribed, setBandSubscribed] = useState(false);
  const [nlError, setNlError] = useState("");
  const [bandError, setBandError] = useState("");

  const filtered =
    activeCat === "All"
      ? posts
      : posts.filter((p) => p.cat === activeCat);

  return (
    <>
      <Nav variant="aux" />

      {/* ============ HERO ============ */}
      <header className="aux-hero">
        <div className="wrap">
          <div className="eyebrow">Blog &middot; WPG Newsletter</div>
          <h1>
            Notes from the <em>workshop.</em>
          </h1>
          <p className="lede">
            What we&rsquo;re learning, week by week, working with 43 writers by
            hand. The newsletter ships every Friday&mdash;short, never more than
            one screen, no slop.
          </p>
        </div>
      </header>

      {/* ============ FEATURED + NEWSLETTER ============ */}
      <section className="aux-body" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="blog-grid">
            {/* Featured post */}
            <Link
              className="blog-feat"
              href="#"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="ftag">Featured &middot; this week</div>
              <h2>
                The most-published time on Substack Notes isn&rsquo;t 9am.
                Here&rsquo;s what 11,400 posts told us.
              </h2>
              <p className="excerpt">
                We pulled every post our 43 founding writers shipped to Substack
                Notes in the last 90 days and matched click-through against
                time-of-day, weekday, and topic cluster. The chart is not what
                we expected. Neither was the second-best slot.
              </p>
              <div className="bmeta">
                <span>WPG Research</span>
                <span>&middot;</span>
                <span>14 min read</span>
                <span>&middot;</span>
                <span>Published May 18, 2026</span>
              </div>
              <div className="placeholder">
                [ chart &middot; substack notes timing heatmap ]
              </div>
            </Link>

            {/* Newsletter signup */}
            <div className="nl-card">
              <div className="nl-tag">The Friday note</div>
              <h3>One screen. Every Friday.</h3>
              <p>
                What we shipped, what worked, what didn&rsquo;t, and one prompt
                for your own writing&mdash;every Friday, in your inbox. Used by
                ~3,200 writers, growing weekly.
              </p>
              {!nlSubscribed ? (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setNlError("");
                    const form = e.target as HTMLFormElement;
                    const email = (form.elements[0] as HTMLInputElement).value;
                    const blogLink = (form.elements[1] as HTMLInputElement).value || undefined;
                    try {
                      const res = await fetch("/api/newsletter", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, blogLink }),
                      });
                      if (!res.ok) {
                        const json = await res.json();
                        setNlError(json.error || "Something went wrong.");
                      } else {
                        setNlSubscribed(true);
                      }
                    } catch {
                      setNlError("Network error.");
                    }
                  }}
                >
                  <input
                    type="email"
                    placeholder="you@yourdomain.com"
                    required
                  />
                  <input type="url" placeholder="link to your blog (optional)" />
                  <button type="submit">
                    <span>Subscribe</span>
                    <span className="arrow">&rarr;</span>
                  </button>
                </form>
              ) : (
                <div
                  style={{
                    border: "1.5px solid var(--paper)",
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        "'Geist Mono', ui-monospace, monospace",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                    }}
                  >
                    Subscribed
                  </div>
                  <div style={{ fontSize: 14, marginTop: 6 }}>
                    See you Friday. Check spam if it&rsquo;s not there by
                    Saturday.
                  </div>
                </div>
              )}
              <div className="nl-foot">
                <span>~3,200 readers</span>
                <span>1 email / wk</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="blog-cats">
            {categories.map((cat) => (
              <div
                key={cat}
                className={`blog-cat${activeCat === cat ? " on" : ""}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Posts grid */}
          <div className="posts">
            {filtered.map((post, i) => (
              <Link className="post-card" href="#" key={i}>
                <div className="cat">{post.cat}</div>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <div className="pmeta">
                  <span>
                    {post.date} &middot; {post.time}
                  </span>
                  <span className="read">read</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer newsletter band */}
          <div className="nl-band">
            <div className="lhs">
              <h3>Get the Friday note.</h3>
              <p>
                Short. Useful. Never sold to anyone. One screen, every Friday,
                and a prompt for your own writing.
              </p>
            </div>
            {!bandSubscribed ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setBandError("");
                  const form = e.target as HTMLFormElement;
                  const email = (form.elements[0] as HTMLInputElement).value;
                  try {
                    const res = await fetch("/api/newsletter", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email }),
                    });
                    if (!res.ok) {
                      const json = await res.json();
                      setBandError(json.error || "Something went wrong.");
                    } else {
                      setBandSubscribed(true);
                    }
                  } catch {
                    setBandError("Network error.");
                  }
                }}
              >
                <input
                  type="email"
                  placeholder="you@yourdomain.com"
                  required
                />
                <button type="submit">
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 13,
                  color: "var(--ink)",
                }}
              >
                Subscribed &mdash; see you Friday.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
