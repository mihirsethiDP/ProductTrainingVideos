import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STAFF_DOMAIN, supabase } from '../lib/supabase';

/**
 * Staff sign-in button. Rendered on BOTH the teaser (the first screen a
 * logged-out visitor sees) and the sign-in card — putting it only on /login
 * meant staff had to find and click through "Sign in" before discovering that
 * they never needed a password in the first place.
 *
 * `hd` and `prompt` only shape Google's own account chooser. The domain rule is
 * enforced in handle_new_user, because a Google account can carry any address
 * and these hints are trivially dropped.
 */
export default function GoogleSignIn({ note = true }: { note?: boolean }) {
  const { t } = useLanguage();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function go() {
    setBusy(true);
    setError(null);
    const { error: err } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}`,
        queryParams: { hd: STAFF_DOMAIN, prompt: 'select_account' },
      },
    });
    // on success the browser leaves for Google, so this only runs on failure
    if (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  return (
    <>
      <button className="auth-google" onClick={go} disabled={busy} type="button">
        {busy ? '…' : t('authGoogle')}
      </button>
      {error && <div className="auth-error">{error}</div>}
      {note && <div className="auth-google-note">{t('authGoogleStaffOnly')}</div>}
    </>
  );
}
