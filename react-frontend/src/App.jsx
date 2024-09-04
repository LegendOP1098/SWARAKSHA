import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Defense } from './pages/SelfDefense';
import { Chatbot } from './pages/Chatbot';

import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/defense" element={<Defense />} />
        <Route path="/bot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
