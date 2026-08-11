import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { AUTH_LINK_ERROR, STAFF_DOMAIN, supabase } from '../lib/supabase';

// Signup is invite-only for customers: accounts are created by an admin (who
// emails an invite link). DigitalPaani staff have one sanctioned exception —
// Google sign-in, which needs no invite, no password and no email at all.
type Mode = 'signin' | 'reset';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export default function Login() {
  const { signIn, resetPassword } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    if (mode === 'signin') {
      const { error } = await signIn(email.trim(), password);
      if (error) setError(error);
      else navigate('/');
    } else {
      const { error } = await resetPassword(email.trim());
      if (error) setError(error);
      else setNotice(t('authResetSent'));
    }
    setBusy(false);
  }

  /** Staff sign-in. Nothing is emailed and no password exists — the account is
   *  created on first return from Google by handle_new_user, which is also where
   *  the @digitalpaani.com rule is enforced. `hd` and `prompt` only shape
   *  Google's own chooser; a rejected domain surfaces as an error on return. */
  async function googleSignIn() {
    setBusy(true);
    setError(null);
    setNotice(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}`,
        queryParams: { hd: STAFF_DOMAIN, prompt: 'select_account' },
      },
    });
    // on success the browser leaves for Google, so this only runs on failure
    if (error) {
      setError(error.message);
      setBusy(false);
    }
  }

  return (
    <div className="page">
      <div className="auth-wrap">
        <div className="auth-card">
          <Link to="/" className="auth-logo">
            <img src={LOGO_SRC} alt="DigitalPaani" />
          </Link>

          <div className="auth-heading">{mode === 'signin' ? t('authSignIn') : t('authSendReset')}</div>

          <form onSubmit={submit} className="auth-form">
            <label className="auth-field">
              <span>{t('authEmail')}</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            </label>
            {mode === 'signin' && (
              <label className="auth-field">
                <span>{t('authPassword')}</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete="current-password"
                />
              </label>
            )}

            {/* a rejected Google domain comes back from the OAuth redirect as
                error_description in the URL, not as a failed call — surface it
                here or the user is bounced to a blank sign-in with no reason */}
            {(error || AUTH_LINK_ERROR) && <div className="auth-error">{error || AUTH_LINK_ERROR}</div>}
            {notice && <div className="auth-notice">{notice}</div>}

            <button className="auth-submit" type="submit" disabled={busy}>
              {busy ? '…' : mode === 'signin' ? t('authSignIn') : t('authSendReset')}
            </button>
          </form>

          {mode === 'signin' && (
            <>
              <div className="auth-or"><span>{t('authOr')}</span></div>
              {/* Staff route: no invite, no password, no email in the loop at all.
                  `hd` only pre-filters Google's account chooser — the real domain
                  rule is enforced by handle_new_user, since a Google account can
                  carry any address and this hint is trivially removed. */}
              <button className="auth-google" onClick={googleSignIn} disabled={busy} type="button">
                {t('authGoogle')}
              </button>
              <div className="auth-google-note">{t('authGoogleStaffOnly')}</div>
            </>
          )}

          <div className="auth-foot">
            {mode === 'signin' ? (
              <button className="auth-link" onClick={() => setMode('reset')}>{t('authForgot')}</button>
            ) : (
              <button className="auth-link" onClick={() => setMode('signin')}>{t('authBackToSignIn')}</button>
            )}
          </div>

          <div className="auth-invite-note">{t('authInviteOnly')}</div>
        </div>
      </div>
    </div>
  );
}
