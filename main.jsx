import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Employee from './employee';
import Output from './output';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);