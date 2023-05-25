import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../logo.svg';

function Header(){
    return (
        <div>
            <div className="p-3 mb-2 bg-dark text-white"    >        
                <center>
                    <h1>ABHIJITH DAMERUPPALA</h1>
                    <p>IN 47404  &emsp; 
                        <a href='https://www.linkedin.com/in/abhijithdameruppala/' target='_blank'>
                            <img alt='LinkedIn' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' width={30}/>
                        </a> 
                        &emsp;  
                        <a href='https://github.com/abh1jith' target='_blank'>
                            <img alt ='GitHub' src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png' width={40}/>
                        </a>
                    </p>
                </center>
            </div>
        </div>
    );
}

export default Header;
