import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

type Mode = 'signin' | 'signup' | 'reset';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export default function Login() {
  const { signIn, signUp, resetPassword } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>('signin');
  const [fullName, setFullName] = useState('');
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
    } else if (mode === 'signup') {
      const { error, needsConfirm } = await signUp(email.trim(), password, fullName.trim());
      if (error) setError(error);
      else if (needsConfirm) setNotice(t('authConfirmEmail'));
      else navigate('/');
    } else {
      const { error } = await resetPassword(email.trim());
      if (error) setError(error);
      else setNotice(t('authResetSent'));
    }
    setBusy(false);
  }

  return (
    <div className="page">
      <div className="auth-wrap">
        <div className="auth-card">
          <Link to="/" className="auth-logo">
            <img src={LOGO_SRC} alt="DigitalPaani" />
          </Link>
          <div className="auth-tabs">
            <button className={`auth-tab${mode === 'signin' ? ' active' : ''}`} onClick={() => setMode('signin')}>
              {t('authSignIn')}
            </button>
            <button className={`auth-tab${mode === 'signup' ? ' active' : ''}`} onClick={() => setMode('signup')}>
              {t('authCreate')}
            </button>
          </div>

          <form onSubmit={submit} className="auth-form">
            {mode === 'signup' && (
              <label className="auth-field">
                <span>{t('authName')}</span>
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} required autoComplete="name" />
              </label>
            )}
            <label className="auth-field">
              <span>{t('authEmail')}</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            </label>
            {mode !== 'reset' && (
              <label className="auth-field">
                <span>{t('authPassword')}</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                />
              </label>
            )}

            {error && <div className="auth-error">{error}</div>}
            {notice && <div className="auth-notice">{notice}</div>}

            <button className="auth-submit" type="submit" disabled={busy}>
              {busy ? '…' : mode === 'signin' ? t('authSignIn') : mode === 'signup' ? t('authCreate') : t('authSendReset')}
            </button>
          </form>

          <div className="auth-foot">
            {mode === 'signin' ? (
              <button className="auth-link" onClick={() => setMode('reset')}>{t('authForgot')}</button>
            ) : (
              <button className="auth-link" onClick={() => setMode('signin')}>{t('authBackToSignIn')}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
