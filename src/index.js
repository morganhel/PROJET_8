import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Logement from './pages/logement';
import Apropos from './pages/about';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Error from './pages/error';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/about" element={<Apropos />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  </React.StrictMode>
)
