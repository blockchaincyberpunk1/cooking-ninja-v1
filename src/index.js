import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';

// Select the container where the app will be rendered
const container = document.getElementById('root');

// Create a root for the container
const root = createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
