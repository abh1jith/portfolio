import Home from './components/Home';
import './App.css';
import 'react-bootstrap';
import { Helmet } from 'react-helmet';
import {Routes, Route, Router, Navigate, useNavigate, Link} from 'react-router-dom';
import React, { useState  } from 'react';
import ContactMe from './components/contactMe.js';


// Icons Color: #00F1FF
// Resume Link: https://drive.google.com/file/d/1ZmtvoSyc7dpe4HaZXSCe5ynT6U__FqBY/view?usp=sharing


function App() {

  // const ComponentWithNavigation = () => {
  // const navigate = useNavigate();
    // <Router>
    //       const navigate = useNavigate();
    //   <Routes>
    //     <Route path="./components/bookAppointment" element={<ContactUs />} />
    //   </Routes>
    // </Router>


  return (
    // <Router>
    <div className="App">
      <Helmet>
        <title>Abhijith Dameruppala</title>
      </Helmet>
      <Link to='./contactMe'>Home</Link>

      <Link to="/">About</Link>

      <Home />
    </div>
    // {/* </Router> */}
  );
}

export default App;
