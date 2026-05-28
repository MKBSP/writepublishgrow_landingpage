import Link from "next/link";
import Nav from "@/components/Nav";
import ScrollAnimations from "@/components/ScrollAnimations";
import OceanBox from "@/components/OceanBox";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollAnimations />
      <OceanBox />

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">
            <span>&bull;</span>
            <span>For writers tired of shouting into the algorithm</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                Your writing isn&rsquo;t the problem.
                <br />
                The{" "}
                <em>
                  <span>sea of noise is.</span>
                </em>
              </h1>
              <p className="lede">
                Write your essay once. WritePublishGrow turns it into the right
                sneak peeks, posted on the right channels at the right time, and
                sends agents out to find the rooms where your readers actually
                live.
              </p>
              <div className="hero-cta">
                <Link className="lp-btn primary" href="/waitlist">
                  <span>Join the waitlist</span>
                  <span className="arrow">&rarr;</span>
                </Link>
                <Link className="lp-btn" href="#pricing">
                  <span>Desktop early access</span>
                  <span className="tag">BYO-KEY</span>
                </Link>
              </div>
              <div className="hero-mini">
                <span>
                  <b>&euro;100</b> one-time desktop
                </span>
                <span>
                  <b>Early bird</b> discounts available
                </span>
                <span>
                  <b>No</b> per-channel subs
                </span>
              </div>
            </div>

            {/* Hero schematic: one article → many posts */}
            <div className="schematic" aria-hidden="true">
              <div className="sch-source">
                <div className="sch-label">
                  Source &middot; 1 essay &middot; 2,840 words
                </div>
                <h4>
                  &ldquo;The slow internet is coming back, and writers are
                  why&rdquo;
                </h4>
                <div className="sch-lines">
                  <div className="sch-ln"></div>
                  <div className="sch-ln med"></div>
                  <div className="sch-ln"></div>
                  <div className="sch-ln short"></div>
                </div>
              </div>
              <div className="sch-arrows">
                <div className="sch-pipe">
                  <span className="sch-stamp">slice</span>
                </div>
                <div className="sch-pipe">
                  <span className="sch-stamp">rewrite</span>
                </div>
                <div className="sch-pipe">
                  <span className="sch-stamp">schedule</span>
                </div>
              </div>
              <div className="sch-posts">
                <div className="sch-post">
                  <div className="ch">
                    <b>X</b>
                    <span>320 ch</span>
                  </div>
                  <div className="body">
                    Hook: the friction <i>was</i> the feature. A thread on why
                    slow internet is back &rarr;
                  </div>
                  <div className="meta">
                    <span className="ok">&bull; queued</span>
                    <span>Tue 9:14</span>
                  </div>
                </div>
                <div className="sch-post">
                  <div className="ch">
                    <b>LinkedIn</b>
                    <span>1.2k</span>
                  </div>
                  <div className="body">
                    Three things that drowned in the feed era, and what writers
                    are doing about it.
                  </div>
                  <div className="meta">
                    <span className="ok">&bull; queued</span>
                    <span>Wed 11:30</span>
                  </div>
                </div>
                <div className="sch-post">
                  <div className="ch">
                    <b>Reddit</b>
                    <span>r/slatestar...</span>
                  </div>
                  <div className="body">
                    Found this argument compelling, the link-back is in comments,
                    curious what folks think.
                  </div>
                  <div className="meta">
                    <span className="ok">&bull; queued</span>
                    <span>Sat 18:00</span>
                  </div>
                </div>
              </div>
              <div className="sch-foot">
                <span>
                  1 essay &rarr; <b>6 posts</b> across <b>3 channels</b>
                </span>
                <span>
                  <b>+184%</b> est. reach vs. one link drop
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ THE SEA ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="lhs">
              <div className="num">01 / The honest pitch</div>
              <h2 className="h2">
                You don&rsquo;t have a writing problem. You have a{" "}
                <em>distribution</em> problem.
              </h2>
            </div>
          </div>
          <div className="sea-wrap">
            <div>
              <p className="sea-quote">
                <span className="strike">&ldquo;Write better.&rdquo;</span>
                <br />
                Write smarter <em>after</em> you&rsquo;ve written.
              </p>
              <div className="sea-points">
                <div className="pt">
                  <span className="n">01</span>
                  <span>
                    The feed is a sea of AI-generated slop, and your essay is a
                    single bottle in it.
                  </span>
                </div>
                <div className="pt">
                  <span className="n">02</span>
                  <span>
                    Posting the link once doesn&rsquo;t surface it. It just
                    timestamps it.
                  </span>
                </div>
                <div className="pt">
                  <span className="n">03</span>
                  <span>
                    The readers who&rsquo;d love your work are already on six
                    platforms. They aren&rsquo;t searching, they&rsquo;re
                    scrolling.
                  </span>
                </div>
                <div className="pt">
                  <span className="n">04</span>
                  <span>
                    We help your bottle wash up on the right shore, at the right
                    hour, in the right room.
                  </span>
                </div>
              </div>
            </div>

            {/* Sea visual */}
            <div className="sea-visual">
              <div className="sv-label">
                A typical Tuesday feed &middot; 9:14 AM
              </div>
              <div className="sea-cards">
                <div
                  className="sc slop"
                  style={{
                    top: "6px",
                    left: "4%",
                    transform: "rotate(-2deg)",
                  }}
                >
                  10 AI prompts that will...
                </div>
                <div
                  className="sc slop"
                  style={{
                    top: "32px",
                    left: "38%",
                    transform: "rotate(1deg)",
                  }}
                >
                  hot take incoming
                </div>
                <div
                  className="sc slop"
                  style={{
                    top: "58px",
                    left: "8%",
                    transform: "rotate(-1deg)",
                  }}
                >
                  listicle &middot; ai-generated
                </div>
                <div
                  className="sc slop"
                  style={{
                    top: "84px",
                    left: "42%",
                    transform: "rotate(3deg)",
                  }}
                >
                  &ldquo;I just discovered...&rdquo;
                </div>
                <div
                  className="sc slop"
                  style={{ top: "108px", left: "12%" }}
                >
                  5 tools every founder needs
                </div>
                <div
                  className="sc slop"
                  style={{
                    top: "134px",
                    left: "48%",
                    transform: "rotate(-2deg)",
                  }}
                >
                  growth hack &middot; viral
                </div>
                <div
                  className="sc slop"
                  style={{
                    top: "160px",
                    left: "6%",
                    transform: "rotate(1deg)",
                  }}
                >
                  AI-written newsletter
                </div>
                <div
                  className="sc slop"
                  style={{ top: "186px", left: "36%" }}
                >
                  &ldquo;unpopular opinion:&rdquo;
                </div>
                <div
                  className="sc slop"
                  style={{
                    top: "212px",
                    left: "14%",
                    transform: "rotate(-1deg)",
                  }}
                >
                  sponsored &middot; ad
                </div>
                <div
                  className="sc slop"
                  style={{
                    top: "238px",
                    left: "42%",
                    transform: "rotate(2deg)",
                  }}
                >
                  listicle &middot; listicle &middot; listicle
                </div>
                <div
                  className="sc slop"
                  style={{ top: "264px", left: "8%" }}
                >
                  &ldquo;this changed everything&rdquo;
                </div>
                <div
                  className="sc slop"
                  style={{
                    top: "290px",
                    left: "38%",
                    transform: "rotate(-2deg)",
                  }}
                >
                  ai-generated takedown
                </div>
                <div
                  className="sc you"
                  style={{ top: "130px", left: "6%" }}
                >
                  Your essay &middot; published 4 mo ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="lhs">
              <div className="num">02 / How it works</div>
              <h2 className="h2">
                Write once. Slice. Schedule. <em>Grow.</em>
              </h2>
              <p className="lede">
                Four moves, repeated weekly. The platform does the heavy lifting
                between #2 and #4. You stay in the writing.
              </p>
            </div>
          </div>

          <div className="steps">
            <div className="step-cell">
              <div className="n">STEP 01</div>
              <h3>Write anywhere</h3>
              <p>
                Keep writing on Medium, Substack, LinkedIn, Ghost, your own
                blog, wherever feels like home. Drop in a URL or paste the
                draft. Your long-form stays the source of truth.
              </p>
              <div className="pic">
                <div className="row">
                  <span className="sq f"></span>substack.com/p/slow-internet
                </div>
                <div className="row">
                  <span className="sq f"></span>medium.com &middot; imported
                </div>
                <div className="row">
                  <span className="sq d"></span>ghost.io &middot; paste raw
                </div>
              </div>
            </div>
            <div className="step-cell">
              <div className="n">STEP 02</div>
              <h3>Slice</h3>
              <p>
                LLMs read your essay and propose sneak-peek posts for each
                channel&mdash;different angles, voices, lengths. You approve or
                rewrite.
              </p>
              <div className="pic">
                <div className="row">
                  <span className="sq f"></span>X &middot; thread, 7 posts
                </div>
                <div className="row">
                  <span className="sq f"></span>LinkedIn &middot; 1 long post
                </div>
                <div className="row">
                  <span className="sq d"></span>Reddit &middot; 2 community posts
                </div>
              </div>
            </div>
            <div className="step-cell">
              <div className="n">STEP 03</div>
              <h3>Schedule</h3>
              <p>
                The calendar staggers posts across the week, using the same data
                1,000+ writers contributed: who reads what, when.
              </p>
              <div className="pic">
                <div className="row">
                  <span className="sq f"></span>Tue 9:14, X
                </div>
                <div className="row">
                  <span className="sq f"></span>Wed 11:30, LinkedIn
                </div>
                <div className="row">
                  <span className="sq f"></span>Sat 18:00, Reddit
                </div>
              </div>
            </div>
            <div className="step-cell">
              <div className="n">STEP 04</div>
              <h3>Grow</h3>
              <p>
                Agents find new rooms to enter. Predictions tell you when a post
                is worth boosting. You stay in the writing.
              </p>
              <div className="pic">
                <div className="row">
                  <span className="sq f"></span>+184% reach this week
                </div>
                <div className="row">
                  <span className="sq f"></span>2 new high-fit forums
                </div>
                <div className="row">
                  <span className="sq d"></span>1 boost suggestion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ USE CASES / GRAPHS ============ */}
      <section className="section" id="cases">
        <div className="wrap">
          <div className="section-head">
            <div className="lhs">
              <div className="num">03 / Receipts</div>
              <h2 className="h2">
                Three plateaued writers. Thirty days.{" "}
                <em>Here&rsquo;s the shape.</em>
              </h2>
              <p className="lede">
                We worked with each of these writers by hand for the first six
                months, listening to what landed, where, and when. WPG is what
                we kept doing, minus the manual part. The flat line on the left
                is the &ldquo;writing into the void&rdquo; stretch. The right
                side is what happened after.
              </p>
            </div>
          </div>

          <div className="cases">
            {/* CASE 1 */}
            <div className="case">
              <div className="industry">Indie tech newsletter</div>
              <h4>Plateaued at 500 for half a year.</h4>
              <div className="delta">
                <span className="from">500</span>
                <span className="arrow">&rarr;</span>
                <span className="to">1,500+</span>
                <span className="lift">3&times; in 30d</span>
              </div>
              <div className="chart">
                <svg
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="hatch1"
                      patternUnits="userSpaceOnUse"
                      width="6"
                      height="6"
                      patternTransform="rotate(45)"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="6"
                        stroke="#b8b3a3"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M0,70 L25,68.75 L50,68.125 L75,69.06 L100,68.4 L125,69.4 L150,68.75 L150,100 L0,100 Z"
                    fill="url(#hatch1)"
                    opacity="0.5"
                  />
                  <path
                    d="M150,68.75 L175,62.5 L200,53.75 L225,45 L250,34.4 L275,20 L300,6.25 L300,100 L150,100 Z"
                    fill="#1c1c1a"
                    opacity="0.08"
                  />
                  <polyline
                    points="0,70 25,68.75 50,68.125 75,69.06 100,68.4 125,69.4 150,68.75"
                    fill="none"
                    stroke="#75726a"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                  <polyline
                    points="150,68.75 175,62.5 200,53.75 225,45 250,34.4 275,20 300,6.25"
                    fill="none"
                    stroke="#1c1c1a"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="0"
                    x2="150"
                    y2="100"
                    stroke="#5b6cff"
                    strokeWidth="1.5"
                    strokeDasharray="2,3"
                  />
                  <circle
                    cx="300"
                    cy="6.25"
                    r="3"
                    fill="#5b6cff"
                    stroke="#1c1c1a"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="ax">
                  <span>Day -30</span>
                  <span>WPG on</span>
                  <span>Day +30</span>
                </div>
              </div>
              <p className="notes">
                <b>What changed:</b> agents found 4 dev subreddits and 2
                Substack Notes circles. Tuesday-morning slices replaced
                Friday-evening link drops.
              </p>
            </div>

            {/* CASE 2 */}
            <div className="case">
              <div className="industry">B2B founder essays</div>
              <h4>800 readers. Stuck there for 11 months.</h4>
              <div className="delta">
                <span className="from">800</span>
                <span className="arrow">&rarr;</span>
                <span className="to">4,800+</span>
                <span className="lift">6&times; in 30d</span>
              </div>
              <div className="chart">
                <svg
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="hatch2"
                      patternUnits="userSpaceOnUse"
                      width="6"
                      height="6"
                      patternTransform="rotate(45)"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="6"
                        stroke="#b8b3a3"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M0,81.4 L25,80.7 L50,81.2 L75,80.5 L100,80.8 L125,81.2 L150,81 L150,100 L0,100 Z"
                    fill="url(#hatch2)"
                    opacity="0.5"
                  />
                  <path
                    d="M150,81 L175,76.7 L200,69.5 L225,59.5 L250,45.7 L275,28.6 L300,7.1 L300,100 L150,100 Z"
                    fill="#1c1c1a"
                    opacity="0.08"
                  />
                  <polyline
                    points="0,81.4 25,80.7 50,81.2 75,80.5 100,80.8 125,81.2 150,81"
                    fill="none"
                    stroke="#75726a"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                  <polyline
                    points="150,81 175,76.7 200,69.5 225,59.5 250,45.7 275,28.6 300,7.1"
                    fill="none"
                    stroke="#1c1c1a"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="0"
                    x2="150"
                    y2="100"
                    stroke="#5b6cff"
                    strokeWidth="1.5"
                    strokeDasharray="2,3"
                  />
                  <circle
                    cx="300"
                    cy="7.1"
                    r="3"
                    fill="#5b6cff"
                    stroke="#1c1c1a"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="ax">
                  <span>Day -30</span>
                  <span>WPG on</span>
                  <span>Day +30</span>
                </div>
              </div>
              <p className="notes">
                <b>What changed:</b> per-channel rewrites unlocked HackerNews,
                Dev.to, and LinkedIn long-form. Two posts got &ldquo;best of
                week&rdquo; picks.
              </p>
            </div>

            {/* CASE 3 */}
            <div className="case">
              <div className="industry">Design educator</div>
              <h4>240 subs. Five years of writing.</h4>
              <div className="delta">
                <span className="from">240</span>
                <span className="arrow">&rarr;</span>
                <span className="to">980+</span>
                <span className="lift">4&times; in 30d</span>
              </div>
              <div className="chart">
                <svg
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="hatch3"
                      patternUnits="userSpaceOnUse"
                      width="6"
                      height="6"
                      patternTransform="rotate(45)"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="6"
                        stroke="#b8b3a3"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M0,82.3 L25,81.2 L50,81.9 L75,81.5 L100,80.8 L125,82.3 L150,81.5 L150,100 L0,100 Z"
                    fill="url(#hatch3)"
                    opacity="0.5"
                  />
                  <path
                    d="M150,81.5 L175,77.7 L200,70.8 L225,60.8 L250,47.7 L275,31.5 L300,9.2 L300,100 L150,100 Z"
                    fill="#1c1c1a"
                    opacity="0.08"
                  />
                  <polyline
                    points="0,82.3 25,81.2 50,81.9 75,81.5 100,80.8 125,82.3 150,81.5"
                    fill="none"
                    stroke="#75726a"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                  <polyline
                    points="150,81.5 175,77.7 200,70.8 225,60.8 250,47.7 275,31.5 300,9.2"
                    fill="none"
                    stroke="#1c1c1a"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="0"
                    x2="150"
                    y2="100"
                    stroke="#5b6cff"
                    strokeWidth="1.5"
                    strokeDasharray="2,3"
                  />
                  <circle
                    cx="300"
                    cy="9.2"
                    r="3"
                    fill="#5b6cff"
                    stroke="#1c1c1a"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="ax">
                  <span>Day -30</span>
                  <span>WPG on</span>
                  <span>Day +30</span>
                </div>
              </div>
              <p className="notes">
                <b>What changed:</b> Daily.Dev and Dev.to picked up two old
                essays. Prediction engine moved publish day from Mon &rarr; Thu
                evenings.
              </p>
            </div>
          </div>

          {/* Manual-work note */}
          <div className="manual-note">
            <div className="mn-tag">How we know</div>
            <div className="mn-body">
              <h4>
                We did this by hand first. So we knew how to do it
                automatically.
              </h4>
              <p>
                For six months we sat with 43 writers, scheduled their
                cross-channel posts manually, talked to the readers who clicked,
                and tracked which angles actually traveled. WPG is the product
                of that work. Every prediction, slice, and forum suggestion in
                the app is something we did manually first, until we knew it was
                a pattern, not a fluke.
              </p>
              <div className="mn-stats">
                <div className="mn-stat">
                  <span className="v">43</span>
                  <span className="l">writers, by hand</span>
                </div>
                <div className="mn-stat">
                  <span className="v">182</span>
                  <span className="l">days of manual ops</span>
                </div>
                <div className="mn-stat">
                  <span className="v">11,400+</span>
                  <span className="l">posts shipped &amp; measured</span>
                </div>
                <div className="mn-stat">
                  <span className="v">3&ndash;6&times;</span>
                  <span className="l">median subscriber lift</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="section" id="features">
        <div className="wrap">
          <div className="section-head">
            <div className="lhs">
              <div className="num">04 / Inside the workshop</div>
              <h2 className="h2">
                A toolkit for the writer who&rsquo;d rather <em>write</em>.
              </h2>
              <p className="lede">
                Each tool here exists for one reason&mdash;to reduce the
                distance between a sentence you wrote and a reader who&rsquo;d
                love it.
              </p>
            </div>
          </div>

          <div className="feats">
            <div className="feat c7 large dark">
              <div className="ft-eye">Prediction engine</div>
              <h3>
                Know who will read what, when, and where. Before you hit
                publish.
              </h3>
              <p>
                We track click-through across thousands of writers and 1,000+
                publishers. Our model matches your essay against that swarm
                intelligence and tells you the channel &times; time &times;
                angle most likely to land.
              </p>
              <div className="viz-chart">
                <div className="bars">
                  <div className="bar ghost" style={{ height: "20%" }}></div>
                  <div className="bar ghost" style={{ height: "32%" }}></div>
                  <div className="bar ghost" style={{ height: "18%" }}></div>
                  <div className="bar" style={{ height: "48%" }}></div>
                  <div className="bar" style={{ height: "36%" }}></div>
                  <div className="bar" style={{ height: "62%" }}></div>
                  <div className="bar pop" style={{ height: "96%" }}></div>
                  <div className="bar" style={{ height: "74%" }}></div>
                  <div className="bar" style={{ height: "42%" }}></div>
                  <div className="bar ghost" style={{ height: "28%" }}></div>
                  <div className="bar ghost" style={{ height: "14%" }}></div>
                  <div className="bar ghost" style={{ height: "22%" }}></div>
                  <div className="bar ghost" style={{ height: "12%" }}></div>
                  <div className="bar ghost" style={{ height: "8%" }}></div>
                </div>
                <div className="axis">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            <div className="feat c5 accent">
              <div className="ft-eye">AI agents</div>
              <h3>Scouts that find the right rooms.</h3>
              <p>
                Agents read forums, subreddits, Discords, and niche
                newsletters&mdash;and surface the threads, articles, and
                communities where a link-back to your work would actually fit
                (and be welcome).
              </p>
              <div className="viz-agents">
                <div className="agent">
                  <span className="lbl">r/longform</span>
                  <span className="val">94% fit</span>
                </div>
                <div className="agent">
                  <span className="lbl">HN</span>
                  <span className="val">88%</span>
                </div>
                <div className="agent">
                  <span className="lbl">Indie Web</span>
                  <span className="val">81%</span>
                </div>
                <div className="agent">
                  <span className="lbl">Substack N.</span>
                  <span className="val">76%</span>
                </div>
                <div className="agent">
                  <span className="lbl">r/SSC</span>
                  <span className="val">72%</span>
                </div>
              </div>
            </div>

            <div className="feat c4">
              <div className="ft-eye">Per-channel rewrites</div>
              <h3>One essay, six voices.</h3>
              <p>
                LLMs adapt your essay&rsquo;s hook for each platform&mdash;a
                thread on X, a story on LinkedIn, a comment-shaped pitch on
                Reddit. All editable. All yours.
              </p>
            </div>
            <div className="feat c4">
              <div className="ft-eye">Cross-publisher data</div>
              <h3>Borrow other writers&rsquo; wisdom.</h3>
              <p>
                What&rsquo;s working for 1,000+ writers shaping signal from
                noise this week? You get the lift without sharing your content.
              </p>
            </div>
            <div className="feat c4">
              <div className="ft-eye">Bring your own keys</div>
              <h3>OpenAI. Anthropic. Local. Yours.</h3>
              <p>
                Desktop edition runs against any provider, including local
                models. Stop paying three subscriptions for tools that just call
                an API.
              </p>
            </div>

            <div className="feat c7 dark">
              <div className="ft-eye">Buy credits, any model</div>
              <h3>
                One balance. Every model. No surprise invoices.
              </h3>
              <p>
                Don&rsquo;t want to manage keys? Top up credits with us and
                route to any model&mdash;GPT, Claude, Llama, Mistral, whatever&rsquo;s
                next. We pass cost through; no markup games.
              </p>
              <div className="viz-credit">
                <div className="lhs">
                  <span>BALANCE</span>
                  <span className="balance">$24.80</span>
                </div>
                <div className="keys">
                  <span>GPT-4o</span>
                  <span>Claude</span>
                  <span>Llama 3</span>
                  <span>+12</span>
                </div>
              </div>
            </div>
            <div className="feat c5" style={{ borderBottom: "none" }}>
              <div className="ft-eye">Ad placement (coming)</div>
              <h3>Where to spend your first $50.</h3>
              <p>
                For the moments a post deserves a push: WPG will analyze your
                audience overlap with paid surfaces and tell you exactly which
                platform, segment, and creative will compound&mdash;and which
                will burn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHANNELS ============ */}
      <section className="section tight" id="channels">
        <div className="wrap">
          <div className="section-head">
            <div className="lhs">
              <div className="num">05 / Channels</div>
              <h2 className="h2">
                Ten surfaces. <em>One queue.</em>
              </h2>
              <p className="lede">
                Connect once. Post forever. We&rsquo;re rolling integrations out
                in order of writer demand&mdash;vote with your signup.
              </p>
            </div>
          </div>

          <div className="label" style={{ marginBottom: 10 }}>
            Live now
          </div>
          <div className="channels" style={{ marginBottom: 18 }}>
            <div className="ch-cell live">
              <div className="mark">Y</div>
              <div className="name">HackerNews</div>
              <div className="status">
                <span className="d"></span>Live
              </div>
            </div>
            <div className="ch-cell live">
              <div className="mark">S</div>
              <div className="name">Substack Notes</div>
              <div className="status">
                <span className="d"></span>Live
              </div>
            </div>
            <div className="ch-cell live">
              <div className="mark">D</div>
              <div className="name">Dev.to</div>
              <div className="status">
                <span className="d"></span>Live
              </div>
            </div>
            <div className="ch-cell live">
              <div className="mark">&middot;d</div>
              <div className="name">Daily.Dev</div>
              <div className="status">
                <span className="d"></span>Live
              </div>
            </div>
          </div>

          <div className="label" style={{ marginBottom: 10 }}>
            Coming this quarter
          </div>
          <div className="channels">
            <div className="ch-cell coming">
              <div className="mark">in</div>
              <div className="name">LinkedIn</div>
              <div className="status">
                <span className="d"></span>Coming
              </div>
            </div>
            <div className="ch-cell coming">
              <div className="mark">IG</div>
              <div className="name">Instagram</div>
              <div className="status">
                <span className="d"></span>Coming
              </div>
            </div>
            <div className="ch-cell coming">
              <div className="mark">@</div>
              <div className="name">Threads</div>
              <div className="status">
                <span className="d"></span>Coming
              </div>
            </div>
            <div className="ch-cell coming">
              <div className="mark">X</div>
              <div className="name">X / Twitter</div>
              <div className="status">
                <span className="d"></span>Coming
              </div>
            </div>
            <div className="ch-cell coming">
              <div className="mark">fb</div>
              <div className="name">Facebook</div>
              <div className="status">
                <span className="d"></span>Coming
              </div>
            </div>
            <div className="ch-cell coming">
              <div className="mark">rd</div>
              <div className="name">Reddit</div>
              <div className="status">
                <span className="d"></span>Coming
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials" id="testimonials">
        <div className="section-head">
          <div className="lhs">
            <div className="num">06 / Voices</div>
            <h2 className="h2">
              Writers who got <em>found</em>.
            </h2>
            <p className="lede">
              A few of the people using WPG right now. Hover to pause.
            </p>
          </div>
        </div>

        <div className="marquee">
          {/* Row 1 */}
          <div className="marquee-row">
            {[...Array(2)].map((_, dup) => (
              <TestimonialRow1 key={dup} />
            ))}
          </div>
          {/* Row 2 (reverse) */}
          <div className="marquee-row reverse">
            {[...Array(2)].map((_, dup) => (
              <TestimonialRow2 key={dup} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="section" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <div className="lhs">
              <div className="num">07 / Pricing</div>
              <h2 className="h2">
                Own your tools. <em>Pay once.</em>
              </h2>
              <p className="lede">
                Desktop-first. One-time purchase. Bring your own keys or buy
                credits through us. No subscriptions, no lock-in.
              </p>
            </div>
          </div>

          <div className="price-grid">
            {/* Desktop */}
            <div className="price-col">
              <div className="ribbon">Available now</div>
              <div className="ptag">Edition &middot; Desktop</div>
              <h3>
                Desktop
                <span className="sub">
                  Yours. Forever. Bring your own keys, or run local models.
                </span>
              </h3>

              <div className="price-tiers">
                <div className="tier featured">
                  <div className="t-name">
                    Early bird
                    <span className="nb">
                      Limited spots &middot; tiered discounts
                    </span>
                  </div>
                  <div className="t-price">
                    &euro;10+
                    <span className="ps">one-time</span>
                  </div>
                </div>
                <div className="tier">
                  <div className="t-name">
                    Standard
                    <span className="nb">After early-bird window closes</span>
                  </div>
                  <div className="t-price">
                    &euro;100
                    <span className="ps">one-time</span>
                  </div>
                </div>
              </div>

              <ul className="price-list">
                <li>
                  Software like the old days&mdash;pay once, yours forever
                </li>
                <li>Bring your own keys (OpenAI, Anthropic, etc.)</li>
                <li>Run local models. No data leaves your machine.</li>
                <li>All future software updates included</li>
                <li>Optional: buy credits with us instead of keys</li>
              </ul>

              <div className="col-cta">
                <Link className="lp-btn primary" href="/waitlist">
                  <span>Join the waitlist</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Cloud (coming soon) */}
            <div className="price-col dk">
              <div className="ptag">Edition &middot; Cloud</div>
              <h3>
                Cloud
                <span className="sub">
                  Coming soon. Hosted by us. Fastest updates.
                </span>
              </h3>

              <div className="price-tiers">
                <div className="tier">
                  <div className="t-name">
                    Free
                    <span className="nb">For getting your first post out</span>
                  </div>
                  <div className="t-price">
                    $0
                    <span className="ps">forever</span>
                  </div>
                </div>
                <div className="tier featured">
                  <div className="t-name">
                    Pro
                    <span className="nb">Everything, no limits</span>
                  </div>
                  <div className="t-price">
                    $50
                    <span className="ps">/ month</span>
                  </div>
                </div>
              </div>

              <ul className="price-list">
                <li>Hosted editor + scheduling</li>
                <li>All ten channels (as they ship)</li>
                <li>Prediction engine + cross-publisher data</li>
                <li>AI agents that scout forums and threads</li>
                <li>Credits to any model, pay-as-you-go</li>
              </ul>

              <div className="col-cta">
                <Link className="lp-btn" href="/waitlist" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}>
                  <span>Join waitlist for cloud</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="credits-note">
            <span className="l">Either edition</span>
            <span className="t">
              Buy credits for any LLM through us. Top up once, route to GPT,
              Claude, Llama, or whatever ships next week. No subscription
              stacking.{" "}
              <b>Avg. campaign cost: ~$0.03 in model spend.</b>
            </span>
          </div>
        </div>
      </section>

      {/* ============ ROADMAP ============ */}
      <section className="section tight" id="roadmap">
        <div className="wrap">
          <div className="section-head">
            <div className="lhs">
              <div className="num">08 / Where we&rsquo;re going</div>
              <h2 className="h2">Roadmap, in the open.</h2>
              <p className="lede">
                We ship in public. Here&rsquo;s what&rsquo;s live, what&rsquo;s
                next, and what we&rsquo;re still arguing about.
              </p>
            </div>
          </div>

          <div className="roadmap">
            <div className="rm-col now">
              <div className="when">
                <span className="pulse"></span>Now
              </div>
              <h4>Live in the app</h4>
              <ul>
                <li>Long-form editor + slice-to-posts</li>
                <li>Cross-channel scheduling calendar</li>
                <li>Prediction engine v1 (CTR-trained)</li>
                <li>Credit balance for any model</li>
                <li>Desktop early-access build (BYOK)</li>
              </ul>
            </div>
            <div className="rm-col soon">
              <div className="when">
                <span className="pulse"></span>Soon &middot; this quarter
              </div>
              <h4>Channels rolling out</h4>
              <ul>
                <li>LinkedIn &middot; Instagram &middot; Threads</li>
                <li>X / Twitter &middot; Facebook &middot; Reddit</li>
                <li>Per-channel voice training</li>
                <li>Forum-scout agents (public beta)</li>
                <li>Local model support (Desktop)</li>
              </ul>
            </div>
            <div className="rm-col later">
              <div className="when">
                <span className="pulse"></span>Later
              </div>
              <h4>On the wall, not yet built</h4>
              <ul>
                <li>Ad placement recommender</li>
                <li>Best-spend predictor across surfaces</li>
                <li>Multi-writer team workspaces</li>
                <li>Comments + community routing</li>
                <li>Audio + video slice (podcast &rarr; posts)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta-section">
        <div className="wrap">
          <h2>
            Stop shouting. <em>Start surfacing.</em>
          </h2>
          <p>
            You wrote something worth reading. We&rsquo;ll make sure the right
            people actually read it.
          </p>
          <div
            className="hero-cta"
            style={{ justifyContent: "center" }}
          >
            <Link className="lp-btn" href="/waitlist">
              <span>Join the waitlist</span>
              <span className="arrow">&rarr;</span>
            </Link>
            <Link className="lp-btn ghost" href="#pricing">
              <span>See pricing</span>
              <span className="arrow">&uarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---- Testimonial card data extracted to keep JSX clean ---- */

const row1 = [
  { q: 'Wrote one essay last month. WPG turned it into 14 posts. I haven\u2019t drafted a single \u201Csocial post\u201D since.', av: "ML", n: "Mira Lindh", r: "Newsletter on cities", s: "+740 SUBS" },
  { q: "The agent surfaced two niche subreddits I\u2019d been trying to crack for years. Both my best-performing links to date.", av: "DO", n: "Daniel Otti", r: "Indie founder", s: "3.1K SIGNUPS" },
  { q: 'I stopped \u201Cdoing distribution.\u201D That\u2019s the actual win. I just write now.', av: "HK", n: "Hannah Kassem", r: "Climate essays", s: "4.2\u00d7 OPENS" },
  { q: "Prediction engine flat-out told me to skip Tuesday for my audience. I\u2019d been posting Tuesdays for 4 years. It was right.", av: "JP", n: "Jeong-min Park", r: "Indie ML newsletter", s: "+62% CTR" },
  { q: "Pay-once desktop edition is the most honest software pricing I\u2019ve seen in five years. I bought it twice on principle.", av: "SW", n: "Sam Whitcombe", r: "Dev tooling blog", s: "\u20AC100 ONCE" },
  { q: "I\u2019d written 47 essays and 9 people had ever read them. Now my last 3 posts each got over 1,000 readers.", av: "PA", n: "Priya Anand", r: "Philosophy zine", s: "1K+ READS" },
  { q: "WPG does the job a junior growth marketer would charge me \u20AC3k/mo for. My credit balance reads \u20AC4.10 this month.", av: "MR", n: "Marco Reyes", r: "B2B founder", s: "\u20AC2,996 SAVED" },
  { q: "The forum-scout sent me to a 600-person Discord. Three of them now write back when I publish.", av: "TH", n: "Toby Hu", r: "Solo product designer", s: "3 REPLIES/WK" },
  { q: "I trust the timing more than my own instincts at this point. That\u2019s a strange sentence to write.", av: "EL", n: "Eva Lef\u00e8vre", r: "Finance essayist", s: "+2.4\u00d7 REACH" },
  { q: "It picked Saturday 6pm for a long-form Reddit reply. I\u2019d have NEVER. It hit /r/all.", av: "KM", n: "Kenji Maeda", r: "Infosec writer", s: "18K REACH" },
];

const row2 = [
  { q: "Bring-your-own-key is the move. I run it against a local Mistral, costs me nothing, no one sees my drafts.", av: "AS", n: "Anika S\u00f8rensen", r: "OSS contributor", s: "LOCAL ONLY" },
  { q: "Switched from buffering posts in 3 tools to WPG. Saved 4 hours/week. Subs up 280% in 6 weeks.", av: "LC", n: "Lila Coleman", r: "Tech newsletter", s: "+280% SUBS" },
  { q: 'Honestly the \u201Csea of slop\u201D framing is what got me to sign up. Then the product matched the pitch.', av: "OM", n: "Owen Mackay", r: "Climate policy", s: "CONVERTED" },
  { q: "I write on Substack. WPG reads it directly. No copy-paste, no exports, no fiddling. That\u2019s the whole pitch for me.", av: "RP", n: "Rohini Patel", r: "Philosophy", s: "0 EXPORTS" },
  { q: "Best \u20AC100 I\u2019ve spent on writing tooling. Genuinely surprised at the depth of the desktop build.", av: "BG", n: "Ben Goldstein", r: "Indie newsletter", s: "\u20AC100 FOREVER" },
  { q: "We went from 800 to 3,900 readers in a month. I\u2019m a skeptic by nature and even I\u2019m impressed.", av: "TH", n: "Tom\u00e1\u0161 Havel", r: "B2B founder", s: "4.9\u00d7 IN 30D" },
  { q: "WPG\u2019s per-channel rewrite for LinkedIn is sneakily good. It doesn\u2019t sound like LinkedIn slop. That\u2019s the trick.", av: "NS", n: "Naomi Schaffer", r: "Product strategy", s: "+312% IMPR" },
  { q: "The credit balance is the cleanest billing experience in any AI tool I use. Three cents a campaign. Done.", av: "WC", n: "Wei Chen", r: "ML newsletter", s: "$0.03/CAMP" },
  { q: "I run a tiny newsletter on cycling infra. WPG found me 11 forums I\u2019d never have located. Six replied.", av: "JA", n: "Jonas Andersen", r: "Cycling infra", s: "11 FORUMS" },
  { q: "Open-source dev posts on Dev.to are now my biggest signup source. WPG saw that. I didn\u2019t.", av: "AN", n: "Aisha Nasser", r: "Dev tools writer", s: "DEV.TO #1" },
];

function TCard({ q, av, n, r, s }: { q: string; av: string; n: string; r: string; s: string }) {
  return (
    <div className="tcard">
      <p className="quote">{q}</p>
      <div className="who">
        <div className="av">{av}</div>
        <div className="tmeta">
          <span className="tname">{n}</span>
          <span className="trole">{r}</span>
        </div>
        <span className="stat">{s}</span>
      </div>
    </div>
  );
}

function TestimonialRow1() {
  return (
    <>
      {row1.map((t, i) => (
        <TCard key={i} {...t} />
      ))}
    </>
  );
}

function TestimonialRow2() {
  return (
    <>
      {row2.map((t, i) => (
        <TCard key={i} {...t} />
      ))}
    </>
  );
}
