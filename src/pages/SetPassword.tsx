import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

/**
 * Where password-reset and invite email links land. The link signs the user in
 * (Supabase puts a session token in the URL); this screen lets them choose the
 * password they'll use from the next sign-in on.
 */
export default function SetPassword() {
  const { session, loading } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError(t('authPasswordMismatch'));
      return;
    }
    setBusy(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (err) {
      setError(err.message);
      return;
    }
    setDone(true);
    window.setTimeout(() => navigate('/', { replace: true }), 1800);
  }

  if (loading) return null;

  return (
    <div className="page">
      <div className="auth-wrap">
        <div className="auth-card">
          <Link to="/" className="auth-logo">
            <img src={LOGO_SRC} alt="DigitalPaani" />
          </Link>

          {!session ? (
            <>
              <div className="auth-notice">{t('authLinkExpired')}</div>
              <div className="auth-foot">
                <Link to="/login" className="auth-link">{t('authBackToSignIn')}</Link>
              </div>
            </>
          ) : done ? (
            <div className="auth-notice">{t('authPasswordUpdated')}</div>
          ) : (
            <>
              <div className="auth-tabs">
                <span className="auth-tab active">{t('authSetPasswordTitle')}</span>
              </div>
              <p className="auth-sub">{t('authSetPasswordSub')}</p>
              <form onSubmit={submit} className="auth-form">
                <label className="auth-field">
                  <span>{t('authNewPassword')}</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete="new-password"
                  />
                </label>
                <label className="auth-field">
                  <span>{t('authConfirmPassword')}</span>
                  <input
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                    minLength={6}
                    autoComplete="new-password"
                  />
                </label>

                {error && <div className="auth-error">{error}</div>}

                <button className="auth-submit" type="submit" disabled={busy}>
                  {busy ? '…' : t('authSetPasswordBtn')}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
