import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import './assets/scss/fonts.scss';
import { Amplify } from 'aws-amplify';
import awsExports from './amplifyconfiguration.json';
Amplify.configure(awsExports);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
