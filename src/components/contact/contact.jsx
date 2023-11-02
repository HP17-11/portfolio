import React, { useRef } from "react";
import "./contact.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wwtxi93', 'template_bt70j3i', form.current, 'BF08VGcFXeu9m33v9')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
;      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <h1 className="contactpagetitlenew">Contact Me</h1>
      <span className="contactdesc">Please fill out the form below</span>
      <form className="contactform" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="name" />
        <input type="text" className="email" placeholder="Your Email" name="email"/>
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="msg"
          placeholder="Your Message"
        />
        <button type="submit" value="send" className="submitbtn">
          Submit
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/hetpatel-mac2024/">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="skyblue"
              className="link"
            />
          </a>
          <a href="https://github.com/HP17-11">
            <FontAwesomeIcon icon={faGithub} color="skyblue" className="link" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
