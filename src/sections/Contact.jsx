import React from "react";
import SectionHead from "../components/common/SectionHead";

// contact section components
const ContactForm = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-white text-gray-800 dark:text-white dark:bg-white/50 p-3 mb-3 border rounded-lg"
        required
      />
      <input
        type="email"
        placeholder="Email ID"
        className="w-full bg-white text-gray-800 dark:text-white dark:bg-white/50 p-3 mb-3 border rounded-lg"
        required
      />
      <textarea
        placeholder="Tell me about your project..."
        rows="4"
        className="w-full bg-white text-gray-800 dark:text-white dark:bg-white/50  p-3 mb-3 border rounded-lg"
      ></textarea>
      <button
        type="submit"
        className="bg-prime text-white py-2 px-6 rounded-lg"
      >
        Submit your Consultation
      </button>
    </form>
  );
};

const QuickContact = () => {
  return (
    <>
      <h3 className="text-xl font-bold mb-4 dark:text-white/80">
        Quick Connect
      </h3>
      <div className="space-y-4">
        <a
          href="tel:+91YOURNUMBER"
          className="flex items-center bg-white/60 shadow-2xs gap-3 p-3 rounded-lg hover:bg-gray-50"
        >
          <div className="bg-prime/10 text-prime rounded-full h-10 w-10 flex items-center justify-center">
            <i className="ri-phone-line"></i>
          </div>
          <span className="text-prime">+91 XXXXX XXXXX</span>
        </a>

        <a
          href="https://wa.me/91YOURNUMBER"
          className="flex items-center bg-white/60 shadow-2xs gap-3 p-3 rounded-lg hover:bg-gray-50"
        >
          <div className="bg-green-100 text-green-600 rounded-full h-10 w-10 flex items-center justify-center">
            <i className="ri-whatsapp-line"></i>
          </div>
          <span className="text-green-600">Chat on WhatsApp</span>
        </a>

        <div className="flex items-center bg-white/60 shadow-2xs gap-3 p-3 rounded-lg">
          <div className="bg-blue-100 text-blue-600 rounded-full h-10 w-10 flex items-center justify-center">
            <i className="ri-map-pin-line"></i>
          </div>
          <span className="text-blue-600">Imambada, Mirzapur</span>
        </div>
      </div>
    </>
  );
};

const Availability = () => {
  return (
    <div
      data-aos="fade-up"
      className="my-6 bg-yellow-50 dark:bg-yellow-50/70 p-4 rounded-lg border border-yellow-400"
    >
      <h4 className="font-bold text-amber-700 flex items-center gap-2">
        <i className="ri-time-line"></i> Availability
      </h4>
      <p className="text-sm text-gray-800/80 mt-2">
        <span className="text-yellow-400 dark:text-yellow-200">Mon-Sat:</span>{" "}
        <span className="text-amber-700/80">10AM - 7PM </span>
        <br />
        <span className="text-yellow-400 dark:text-yellow-200">
          Fastest response:
        </span>{" "}
        <span className="text-amber-700/80">Via WhatsApp</span>
      </p>
    </div>
  );
};

// main contact section
const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full pb-30 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
    >
      <SectionHead title="Contact" icon="ri-phone-fill" />
      <div className="grid md:grid-cols-2 gap-6 px-5 mt-4">
        {/* Left Side - Form */}
        <div>
          <h3 className="text-xl font-bold mb-4 dark:text-white/80">
            Send a Message
          </h3>
          <ContactForm />
        </div>

        {/* Right Side - Direct Contacts */}
        <div>
          <QuickContact />
          <Availability />
        </div>
      </div>
    </div>
  );
};

export default Contact;
