import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props { children: ReactNode }
interface State { hasError: boolean }

/**
 * Top-level safety net. A render/runtime throw anywhere below used to blank the
 * entire app (white screen, no way out). This catches it and shows a friendly
 * recover screen with a reload + "back home" so the user is never stranded.
 * Kept dependency-free (no context/i18n) so it still renders even if a provider
 * is what threw.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // surface it for debugging; there is no remote logging wired up
    console.error('App crashed:', error, info.componentStack);
  }

  handleReload = () => {
    // clear the hash so a bad route/state doesn't re-trigger the crash on reload
    window.location.hash = '#/';
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="page">
        <div className="auth-wrap">
          <div className="auth-card" style={{ textAlign: 'center' }}>
            <div className="auth-heading">Something went wrong</div>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.5, marginBottom: 20 }}>
              The page hit an unexpected error. Reloading usually fixes it.
            </p>
            <button className="auth-submit" onClick={this.handleReload}>Reload</button>
          </div>
        </div>
      </div>
    );
  }
}
