// src/custom_components/Footer.jsx
import React from "react";
import "./Footer.css"; // Link to the CSS file

const Footer = () => {
  return (
    <footer className="footer mb-0 mt-5 bg-gray-800 text-white text-center py-5 relative bottom-0 w-[100%] shadow-lg">
      <div className="footer-content ">
        <p>&copy; {new Date().getFullYear()} Academic Reports and Research Papers</p>
        <p>All Rights Reserved</p>
        <div className="footer-links">
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
