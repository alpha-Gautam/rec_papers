import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 mt-5 bg-gray-800 text-white text-center py-5 shadow-lg w-full relative bottom-0">
      <div className="max-w-6xl mx-auto">
        <p>&copy; {new Date().getFullYear()} REC Papers - Academic Reports and Research Papers</p>
        <p>All Rights Reserved</p>
        <div className="mt-2">
          <a 
            href="/terms-of-service" 
            className="text-purple-500 hover:text-white no-underline font-medium transition duration-300 mx-2 "
          >
            Terms of Service
          </a>
          <a 
            href="/privacy-policy" 
            className="text-purple-500 hover:text-white no-underline font-medium transition duration-300 mx-2"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
