import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-white">KishanDevX</span>
            <span className="bg-prime/10 text-prime text-xs px-2 py-1 rounded-full">
              Freelance Developer
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Building fast, responsive websites for Mirzapur businesses and
            beyond.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-prime transition">
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-prime transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-prime transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-prime transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-prime transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-medium mb-4 text-lg">Get In Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <i className="ri-map-pin-line text-prime mt-1"></i>
              <span>Imambada Road, Mirzapur</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-prime"></i>
              <a
                href="tel:+91XXXXXXXXXX"
                className="hover:text-prime transition"
              >
                +91 XXXXX XXXXX
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-mail-line text-prime"></i>
              <a
                href="mailto:your@email.com"
                className="hover:text-prime transition"
              >
                devkishanx16@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} KishanDevX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
