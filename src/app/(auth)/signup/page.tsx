'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

function SignupForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirected, setRedirected] = useState(false);
  const [needsConfirm, setNeedsConfirm] = useState(false);

  const redirectMode = searchParams?.get('redirect_mode') || '';
  const port = searchParams?.get('port') || '3000';
  const queryString = searchParams?.toString() ? `?${searchParams.toString()}` : '';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const { data, error: authError } = await supabase.auth.signUp({ email, password });
      if (authError) {
        setError(authError.message);
        return;
      }
      if (!data.session) {
        setNeedsConfirm(true);
        return;
      }
      doRedirect(data.session.access_token, data.session.refresh_token, data.user?.email ?? email);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function doRedirect(accessToken: string, refreshToken: string, userEmail: string) {
    const params = new URLSearchParams({
      access_token: accessToken,
      refresh_token: refreshToken,
      email: userEmail,
    });

    if (redirectMode === 'localhost') {
      window.location.href = `http://localhost:${port}/api/auth/callback?${params}`;
    } else {
      window.location.href = `wpg://auth-callback?${params}`;
    }
    setRedirected(true);
  }

  if (needsConfirm) {
    return (
      <div style={styles.page}>
        <div style={{ ...styles.card, maxWidth: 420, textAlign: 'center' }}>
          <h2 style={styles.heading}>Check your email</h2>
          <p style={{ ...styles.text, marginTop: 12 }}>
            We sent a confirmation link to <strong>{email}</strong>. Click it, then come back here to log in.
          </p>
          <a href={`/login${queryString}`} style={{ ...styles.btn, display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: 20 }}>
            Go to login
          </a>
        </div>
      </div>
    );
  }

  if (redirected) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Opening WritePublishGrow...</h2>
          <p style={styles.text}>
            If the app didn&apos;t open, <a href="wpg://auth-callback" style={styles.link}>click here</a> or copy the link manually.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={{ ...styles.card, maxWidth: 420 }}>
        <div style={styles.logoRow}>
          <div style={styles.logoBox} />
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>WritePublishGrow</div>
        </div>

        <h2 style={{ ...styles.heading, marginBottom: 4 }}>Create account</h2>
        <p style={{ ...styles.text, marginBottom: 20 }}>Sign up to back up your data and unlock sync later.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@yourdomain.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              style={styles.input}
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Confirm password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              style={styles.input}
            />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <button type="submit" disabled={loading} style={{ ...styles.btn, opacity: loading ? 0.6 : 1 }}>
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p style={{ ...styles.text, textAlign: 'center', marginTop: 16 }}>
          Already have an account? <a href={`/login${queryString}`} style={styles.link}>Log in</a>
        </p>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div style={styles.page}><p style={styles.text}>Loading...</p></div>}>
      <SignupForm />
    </Suspense>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    width: '100vw', minHeight: '100vh', background: 'var(--paper, #f7f4ec)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    padding: 32, fontFamily: "'Geist', system-ui, sans-serif", color: 'var(--ink, #1c1c1a)',
  },
  card: {
    border: '1.5px solid var(--ink, #1c1c1a)', padding: 32, background: 'var(--paper, #fffdf5)',
    boxShadow: '4px 4px 0 var(--ink, #1c1c1a)', width: '100%',
    display: 'flex', flexDirection: 'column', gap: 0,
  },
  logoRow: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 },
  logoBox: { width: 32, height: 32, background: 'var(--ink, #1c1c1a)', borderRadius: 6 },
  heading: { fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: '-0.01em' },
  text: { fontSize: 14, color: 'var(--muted, #75726a)', margin: 0, lineHeight: 1.6 },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: 5 },
  label: {
    fontSize: 10, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em',
    color: 'var(--muted, #75726a)', fontFamily: "'Geist Mono', monospace",
  },
  input: {
    border: '1.5px solid var(--ink, #1c1c1a)', padding: '10px 12px',
    fontFamily: 'inherit', fontSize: 14, background: 'transparent',
    color: 'var(--ink, #1c1c1a)', outline: 'none',
  },
  error: { color: 'var(--bad, #b8362b)', fontSize: 13, lineHeight: 1.5 },
  btn: {
    width: '100%', padding: '12px 0', fontSize: 14, fontWeight: 600,
    background: 'var(--ink, #1c1c1a)', color: 'var(--paper, #fffdf5)',
    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
    letterSpacing: '0.02em',
  },
  link: { color: 'var(--accent, #5b6cff)', textDecoration: 'underline' },
};
