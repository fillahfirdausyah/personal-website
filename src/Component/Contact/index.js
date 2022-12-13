import React from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

import "./style.css";

function Contact() {
  return (
    <div className="contact-section">
      <h3 className="section-title">Contact Me</h3>
      <div className="contact-wrapper">
        <a href="mailto:fillahfirdausyah@gmail.com" className="contact">
          <MdOutlineAlternateEmail className="contact-icon" />
          fillahfirdausyah@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/fillahfirdausyah/"
          className="contact"
        >
          <FaLinkedin className="contact-icon" />
          Fillah Akbar Firdasuyah
        </a>
        <a href="https://instagram.com/fillahfirdausyah" className="contact">
          <FaInstagram className="contact-icon" />
          fillahfirdausyah
        </a>
        <a href="https://github.com/fillahfirdausyah" className="contact">
          <FaGithub className="contact-icon" />
          fillahfirdausyah
        </a>
      </div>
    </div>
  );
}

export default Contact;
