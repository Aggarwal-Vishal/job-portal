/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-10">
        {/* About Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p>
            We connect job seekers with top companies and provide tools to help
            you find your dream job. Start your career journey today!
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p>Email: support@jobHunt.com</p>
          <p>Phone: 1234567890</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Job Hunt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
