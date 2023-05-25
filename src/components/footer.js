import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactMe from './contactMe';

function Footer(){
    const [showForm, setShowForm] = useState(false);

    const handleYesButtonClick = () => {
        setShowForm(true);
    };

    return (
        <div>
            <div className="p-3 mb-2 bg-dark text-white">        
                {/* <button type="button" class="btn btn-dark" onClick={handleYesButtonClick} ><h5>CONTACT ME!</h5></button> */}
                <div className="card-body" style={{ paddingTop: "0" }}>
                    {showForm && (
                    <div>
                        <ContactMe />
                    </div>
                    )}
                </div>

                <h5>ABHIJITH DAMERUPPALA </h5>
                <a href='https://www.linkedin.com/in/abhijithdameruppala/' target='_blank'>
                    <img alt='LinkedIn' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' width={30}/>
                </a> 
                &emsp; 
                <a href='https://github.com/abh1jith' target='_blank'>
                    <img alt ='GitHub' src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png' width={40}/>
                </a>
                <br />
                <br />
                <p><small >© 2023 Abhijith Dameruppala. All rights reserved.</small></p>
            </div>
        </div>
    );
}

export default Footer;