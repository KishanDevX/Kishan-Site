import React from "react";
import SectionHead from "../components/common/SectionHead";

const ContactForm = () => {
  return (
    <form>
      <label htmlFor="name">
        <span>your name:</span>
        <input type="text" id="name" />
      </label>
      <label htmlFor="name">
        <span>subject:</span>
        <input type="text" id="name" />
        <ul>
          <li></li>
        </ul>
      </label>
    </form>
  );
};

const Contact = () => {
  return (
    <div id="contact">
      <ContactForm />
    </div>
  );
};

export default Contact;
