import React from "react";
import "./contact.css";
import { Box } from "@mui/material";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <>
      <Box className="main-box">
        <h1>Contact</h1>
        <div className="bluehr"></div>
        <div className="gmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14512.970682784187!2d79.09839529999999!3d21.1809986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1674645994160!5m2!1sen!2sin"
            width="795"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="contact-form">
          <h3>Contact Form</h3>
        </div>
        <form action="#" className="form" data-form="">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required=""
              data-form-input=""
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required=""
              data-form-input=""
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required=""
            data-form-input=""
          ></textarea>
          <Button variant="primary" className="form-btn">
            <i class="fa-solid fa-paper-plane"></i>Send Message
          </Button>{" "}
        </form>
      </Box>
    </>
  );
};

export default Contact;
