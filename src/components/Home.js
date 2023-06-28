import logo from '../logo.svg';
import '../App.css';
import Header from './header';
import Footer from './footer';
import 'react-bootstrap';
import resumeIcon from './resume-icon.png';
import projectIcon from './project-icon.png';
import appointmentIcon from './appointment-icon.png';
import React, { useState  } from 'react';
import {ContactUs} from './bookAppointment.js';
import '../index.js';
import "./style.css";

// import { BsMoonStarsFill } from 'react-icons';


// import ReCAPTCHA from "react-google-recaptcha";
function changeMode(){
  
  // console.log($("#Header div"));
  if(document.getElementsByTagName("h1")[0].style.color !== "black"){
    document.getElementsByTagName("h1")[0].style.color = "black";
    // Light Mode
    document.getElementsByTagName("h1")[0].style.backgroundColor = "#C0C0C0";
    document.getElementById("Header").classList.add("light-body");
    document.getElementById("foot").classList.add("p-3-light");
    document.getElementById("head").classList.add("p-3-1-light");
    // Button changeMode

    document.getElementById("projectBtn").classList.remove("btn-dark");
    document.getElementById("projectBtn").classList.add("btn-light-spec");

    document.getElementById("resumeBtn").classList.remove("btn-dark");
    document.getElementById("resumeBtn").classList.add("btn-light-spec");

    document.getElementById("meetingBtn").classList.remove("btn-dark");
    document.getElementById("meetingBtn").classList.add("btn-light-spec");

}
  else{
    // Dark Mode
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("h1")[0].style.backgroundColor = "";
    document.getElementById("Header").classList.remove("light-body");
    document.getElementById("Header").classList.add("dark-body");
    document.getElementById("foot").classList.remove("p-3-light");
    document.getElementById("foot").classList.add("p-3");
    document.getElementById("head").classList.remove("p-3-1-light");
    document.getElementById("head").classList.add("p-3-1");
    // Button changeMode
    document.getElementById("projectBtn").classList.remove("btn-light-spec");
    document.getElementById("projectBtn").classList.add("btn-dark");

    document.getElementById("meetingBtn").classList.remove("btn-light-spec");
    document.getElementById("meetingBtn").classList.add("btn-dark");

    document.getElementById("resumeBtn").classList.remove("btn-light-spec");
    document.getElementById("resumeBtn").classList.add("btn-dark");
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


        <div className='gap-2' id="xyz">
        
        <a target = "_blank" href='https://drive.google.com/file/d/1S7Ze1WcAd9jex-gLC7KTBf6f9h6ILRvs/view?usp=sharing'>
          <button id="resumeBtn" type="button" className="btn btn-dark btn-sm col-xs-2">
            <img src = {resumeIcon} alt='resumeIcon' />
            <br />
            <br />
            <h3> RESUME</h3>
          </button>
        </a>
        
        {/* Projects Link */}
        <a>
          <button 
                  id="projectBtn"
                  type="button" 
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
          <button id="meetingBtn" type="button" 
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
