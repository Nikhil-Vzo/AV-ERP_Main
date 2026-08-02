import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // This is only necessary if you are using redux-persist
import { store, persistor } from './redux/store'; // Ensure this path is correct
import { BrowserRouter } from 'react-router-dom';

// Handle dynamic import (chunk load) errors when a new deployment occurs on Vercel
window.addEventListener('vite:preloadError', (event) => {
  window.location.reload();
});

window.addEventListener('error', (e) => {
  if (e.message && (e.message.includes('Failed to fetch dynamically imported module') || e.message.includes('Importing a module script failed'))) {
    window.location.reload();
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


