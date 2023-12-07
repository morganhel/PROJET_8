import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Logement from './pages/logement';
import Apropos from './pages/apropos';
import Header from './components/header';
import Error from './components/error';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)
