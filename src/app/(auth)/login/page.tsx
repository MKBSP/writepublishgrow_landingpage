'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirected, setRedirected] = useState(false);

  const redirectMode = searchParams?.get('redirect_mode') || '';
  const port = searchParams?.get('port') || '3000';
  const queryString = searchParams?.toString() ? `?${searchParams.toString()}` : '';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) {
        setError(authError.message);
        return;
      }
      if (!data.session) {
        setError('Login failed — no session returned.');
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

        <h2 style={{ ...styles.heading, marginBottom: 4 }}>Log in</h2>
        <p style={{ ...styles.text, marginBottom: 20 }}>Welcome back. Sign in to continue to your desktop app.</p>

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

          {error && <div style={styles.error}>{error}</div>}

          <button type="submit" disabled={loading} style={{ ...styles.btn, opacity: loading ? 0.6 : 1 }}>
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        <p style={{ ...styles.text, textAlign: 'center', marginTop: 16 }}>
          Don&apos;t have an account? <a href={`/signup${queryString}`} style={styles.link}>Sign up</a>
        </p>
      </div>
    </div>
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
