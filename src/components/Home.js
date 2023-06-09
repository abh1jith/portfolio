import logo from '../logo.svg';
import '../App.css';
import Header from './header';
import Footer from './footer';
import 'react-bootstrap';
import resumeIcon from './resume-icon.png';
import projectIcon from './project-icon.png';
import appointmentIcon from './appointment-icon.png';
// import {Routes, Route, Router, Navigate, useNavigate, Link} from 'react-router-dom';
import React, { useState  } from 'react';
import {ContactUs} from './bookAppointment.js'
// import ReCAPTCHA from "react-google-recaptcha";


function Home()  {
  const [goToAppointment, setGoToAppointment] = React.useState(false);
  let counter = 0;

  const handleButtonClick = () => {
    console.log(counter);
    if(counter == 0){   
    counter = 1;
    setGoToAppointment(false);
    }
    else{
      setGoToAppointment(true);
    }
  };

    return <div>
    <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" 
        width={150}
        />
        <p>
          
        Welcome to my Portfolio <br />
        [ It is still in the works! ]</p>
        <div className='gap-2'>
        
        <a target = "_blank" href='https://drive.google.com/file/d/1S7Ze1WcAd9jex-gLC7KTBf6f9h6ILRvs/view?usp=sharing'>
          <button type="button" className="btn btn-dark btn-sm col-xs-2">
            <img src = {resumeIcon} alt='resumeIcon' />
            <br />
            <br />
            <h3> RESUME</h3>
          </button>
        </a>
        
        {/* Projects Link */}
        <a>
          <button type="button" 
                  className="btn btn-dark btn-sm col-xs-2 m-2"
            >
            <img src = {projectIcon} alt='projectIcon' />
            <br />
            <br />
            <h3>PROJECTS</h3>
          </button>
        </a>
        
        
        {/* Appointment Page link */}
        <a href='https://booking.appointy.com/abhijithdameruppala' target='_blank'>
          <button type="button" 
                className="btn btn-dark btn-sm col-xs-2" 
                // onClick= {handleButtonClick}
        >
          <img src = {appointmentIcon} alt='appointmentIcon' width={55}/>
          <br />
          <br />
          <h4>SCHEDULE <br />MEETING</h4>
        </button>
        </a>
        <div className="card-body" style={{ paddingTop: "0" }}>
            {goToAppointment && (
              <div>
                <ContactUs />
              </div>
            )}
        </div>

</div>
      </header>
      <Footer /></div>;
};

export default Home;
