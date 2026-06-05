/**
 * Auth layout — no Nav or Footer, just the bare page.
 * Used for /login and /signup routes served on app.writepublishgrow.com.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
