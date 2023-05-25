import Home from './components/Home';
import './App.css';
import 'react-bootstrap';
import { Helmet } from 'react-helmet';
import {Routes, Route, Router, Navigate, useNavigate, Link} from 'react-router-dom';
import React, { useState  } from 'react';
import {ContactUs} from './components/bookAppointment.js'

// Icons Color: #00F1FF
// Resume Link: https://drive.google.com/file/d/1ZmtvoSyc7dpe4HaZXSCe5ynT6U__FqBY/view?usp=sharing


function App() {

  // const ComponentWithNavigation = () => {
  // const navigate = useNavigate();
    <Router>
          const navigate = useNavigate();
      <Routes>
        <Route path="./components/bookAppointment" element={<ContactUs />} />
      </Routes>
    </Router>


  return (
    
    <div className="App">
      <Helmet>
        <title>Abhijith Dameruppala</title>
      </Helmet>
      <Home />
    </div>
    
  );
}

export default App;
