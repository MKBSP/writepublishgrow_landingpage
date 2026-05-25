import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lp-foot">
      <div className="wrap row">
        <div>
          <span>WPG &middot; WritePublishGrow</span>
          &nbsp;&middot;&nbsp;
          <span>&copy; 2026</span>
        </div>
        <div>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/waitlist">Join waitlist &rarr;</Link>
        </div>
      </div>
    </footer>
  );
}
