import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import App from './App';
import Classes from './pages/classes'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import ExamplePage from './pages/example_page'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <React.StrictMode>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/examplepage" element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </>
);