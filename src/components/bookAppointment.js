import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// https://dashboard.emailjs.com/admin/account


export const ContactUs = () => {
  const refresh = () => window.location.reload(true)
  const form = useRef();
  var formSent = 1;
  const funcSent = (result) => {
      console.log(result.text); 
      // console.log('The message to Abhijith has been delivered.'); 
      formSent = 0;
      alert("Your message has been delivered to Abhijith Dameruppala!"); 
      refresh();
    };

  const sendEmail = (e) => {
    e.preventDefault(); 
    console.log(form.current);
    emailjs.sendForm('service_5hrtiw9', 'template_uelkb6g', form.current, 'y_xL109f4czjjG9lj')
      .then((result) => {
        funcSent((result));
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
    <form className="p-3 mb-2 bg-dark text-white" ref={form} 
    onSubmit={sendEmail}
    >
      <div className="mb">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="user_name" />
      </div>
        <div className="mb">
          <label  className="form-label">Email</label>
          <input type="email" className="form-control" name="user_email" />
        </div>
        <div className="mb">
          <label className="form-label">Choose your time </label>
          <input type="datetime-local" className="form-control" id="time" name="preferred_time" /><br />
          <select id="timezone" name="timezone" className="form-control">
            <option value="IST">IST</option>
            <option value="EST">EST</option>
            <option value="EST">GMT</option>
          </select><br />
        </div>
      
        <div className ="mb">
          <label className ="form-label">Message</label>
          <textarea className ="form-control" name="message" rows="5" /><br />
        </div>

      <input type="submit" value="Send" className='btn btn-info' />

    </form>
  );

};