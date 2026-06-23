import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { TourProvider } from './context/TourContext';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <TourProvider>
          <App />
        </TourProvider>
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>,
);
