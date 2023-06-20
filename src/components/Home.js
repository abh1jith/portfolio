import logo from '../logo.svg';
import '../App.css';
import Header from './header';
import Footer from './footer';
import 'react-bootstrap';
import resumeIcon from './resume-icon.png';
import projectIcon from './project-icon.png';
import appointmentIcon from './appointment-icon.png';
import {Routes, Route, Router, Navigate, useNavigate, Link} from 'react-router-dom';
import React, { useState  } from 'react';
import {ContactUs} from './bookAppointment.js';
import { Button, ButtonGroup } from '@mui/material';
import '../index.js';
import $ from 'jquery';
import "./style.css";

// import { BsMoonStarsFill } from 'react-icons';


// import ReCAPTCHA from "react-google-recaptcha";
function changeMode(){
  
  // console.log($("#Header div"));
  if(document.getElementsByTagName("h1")[0].style.color !== "black"){
    document.getElementsByTagName("h1")[0].style.color = "black";
    document.getElementsByTagName("h1")[0].style.backgroundColor = "White";
}
  else{
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("h1")[0].style.backgroundColor = "";
  }
}

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

    return <div className='dark-body' id="Header">
    <Header />
      <header
       className="App-header"
       >
        <img src={logo} className="App-logo" alt="logo" 
        width={150}
        />
        <p>
          <button className='btn btn-primary' onClick={changeMode}>Change Mode</button><br />
        Welcome to my Portfolio <br />
        [ It is still in the works! ]</p>

{/* Material UI Test starts */}
{/* <ButtonGroup orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
        // "text"
>
<a target = "_blank" href='https://drive.google.com/file/d/1S7Ze1WcAd9jex-gLC7KTBf6f9h6ILRvs/view?usp=sharing'>
  <Button><img src = {resumeIcon} alt='resumeIcon' />
            <h3> RESUME</h3>
  </Button>
</a>

  <Button><img src = {projectIcon} alt='projectIcon' />
            <br />
            <br />
            <h3>PROJECTS</h3>
  </Button>
  
<a href='https://booking.appointy.com/abhijithdameruppala' target='_blank'>
  <Button><img src = {appointmentIcon} alt='appointmentIcon' width={55}/>
          <h4>SCHEDULE <br />MEETING</h4>
  </Button>
</a>
</ButtonGroup> */}
{/* Material UI Test Ends */}

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
