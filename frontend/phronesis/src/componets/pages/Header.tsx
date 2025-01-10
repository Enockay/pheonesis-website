import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";
import phronesis from "../../assets/phronesis.svg";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-yellow-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={phronesis} alt="Phronesis Logo" className="w-24 h-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About Us" },
            { href: "#guides", label: "Our Guides" },
            { href: "#logistics", label: "Logistics" },
            { href: "#safaris", label: "Kenya Safaris" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg font-medium hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact and CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-sm text-right">
            <p className="font-semibold">+254 793 815 813</p>
            <p className="font-semibold">+254 793 823 925</p>
            <p className="font-semibold">info@phronesistours.com</p>
          </div>
          <a
            href="#book"
            className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-yellow-400 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="hidden md:flex justify-center space-x-6 py-2 bg-yellow-500 text-gray-900">
        {[
          { href: "https://facebook.com", icon: <FaFacebook /> },
          { href: "https://instagram.com", icon: <FaInstagram /> },
          { href: "https://twitter.com", icon: <FaTwitter /> },
          { href: "https://linkedin.com", icon: <FaLinkedin /> },
          { href: "https://pinterest.com", icon: <FaPinterest /> },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-yellow-300"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-yellow-400">
          <nav className="flex flex-col space-y-4 p-4">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Us" },
              { href: "#guides", label: "Our Guides" },
              { href: "#logistics", label: "Logistics" },
              { href: "#safaris", label: "Kenya Safaris" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg font-medium hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="bg-yellow-400 text-gray-900 text-center px-5 py-2 rounded-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/254793815813?text=Need%20Help%3F%20Chat%20with%20us%21"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-400 transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat with us
      </a>
    </header>
  );
};

export default Header;
