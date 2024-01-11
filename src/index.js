import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Logement from './pages/logement';
import Apropos from './pages/about';
import Header from './components/Header/header';
import Footer from './components/Footer/footer'
import Error from './pages/error';
import './index.css'


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="/about" element={<Apropos />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)
