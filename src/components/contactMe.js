import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '../reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
// import App from '../App';

function ContactMe(){
    return <div>
        Here Should be a Contact Me form.
    </div>;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* // <React.StrictMode> */}
    <ContactMe />
    </BrowserRouter>
  // </React.StrictMode>
  
);
reportWebVitals();



export default ContactMe;