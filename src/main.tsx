import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals'; // Import the reportWebVitals function
import { Metric } from 'web-vitals';

const sendToAnalytics = (metric: Metric) => {
  // Send the metrics to your analytics service
  console.log(metric); // For example, you can log it to the console, or send it to a server
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Pass 'sendToAnalytics' function to reportWebVitals to handle the metrics
reportWebVitals(sendToAnalytics);
