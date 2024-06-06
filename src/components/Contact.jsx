import React from 'react';

// Importing images and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

// 📁 import useRef Hook --  is a React Hook that lets you reference a value that’s not needed for rendering.
import { useRef } from 'react';

// 📁 Send form responses to email ---📁  EMAILJS WEBSITE -- service id
import emailjs from 'emailjs-com';

// 📁 SERVICE ID -- service_91vowr7 
// 📁 TEMPLATE ID -- template_ozcserm
// 📁 USER ID -- PUBLIC KEY -- 5qrIShPiUF_BIzkPw

function Contact() {
  const form = useRef();

  function sendEmail(e){
    // prevent default behaviour
    e.preventDefault();

    // use emailjs to send email by user to adityapatil2708@gmail.com
    emailjs.sendForm('service_91vowr7', 'template_ozcserm', form.current, '5qrIShPiUF_BIzkPw')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
      });

    // reset the form after submission 
    e.target.reset();
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a href="mailto:adityapatil2708@gmail.com">adityapatil2708@gmail.com</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon="fa-solid fa-phone" />
          <a href="tel:8855974327">Call 8855974327</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <a href="https://www.linkedin.com/in/aditya-p-986955237/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          <a href="https://github.com/AdityaNPatil" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      {/* 📁 FORM CREATION */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          {/* name must be same as used in emailjs template*/}
          <input type="text" name="user_name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          {/* name must be same as used in emailjs template*/}
          <input type="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          {/* name must be same as used in emailjs template*/}
          <textarea name="message" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
}

export default Contact;
