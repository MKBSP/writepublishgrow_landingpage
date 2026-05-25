"use client";

import Link from "next/link";

export default function Nav({ variant = "landing" }: { variant?: "landing" | "aux" }) {
  return (
    <nav className="lp-nav">
      <div className="wrap lp-nav-inner">
        <Link className="lp-brand" href="/">
          <span className="logo"></span>
          <span>WritePublishGrow</span>
          <span className="sub">/ wpg</span>
        </Link>
        <div className="lp-nav-links">
          <Link href="/#how">How it works</Link>
          <Link href="/#cases">Receipts</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#channels">Channels</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="grow"></div>
        {variant === "aux" && (
          <Link className="lp-btn" href="/">
            <span className="arrow">&larr;</span>
            <span>Back</span>
          </Link>
        )}
        <Link className="lp-btn primary" href="/waitlist">
          <span>Join the waitlist</span>
          <span className="arrow">&rarr;</span>
        </Link>
      </div>
    </nav>
  );
}
