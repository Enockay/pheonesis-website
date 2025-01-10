import React from 'react';
import logo from "../../assets/phronesis.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About Section */}
        <div>
          <div className="flex items-center space-x-4 mb-4">
            {/* Company Logo */}
            <img
              src={logo}
              alt="Phronesis Tour Logistics"
              className="h-24 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed">
            We pride ourselves on being a trusted partner to tour operators
            worldwide, offering seamless safari logistics and unforgettable
            safari experiences.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-4">Contacts</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 +254 793 815 813</li>
            <li>📞 +254 793 813 925</li>
            <li>✉️ info@phronesisstours.com</li>
            <li>📍 Westlands Commercial Centre, Ring Road Parklands, Nairobi</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-4">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 py-6 text-center">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Phronesis Tour Logistics. All rights
          reserved.
        </p>
        <p className="text-xs text-gray-500">
          All trademarks displayed in this website are the exclusive property of their
          respective holders.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
