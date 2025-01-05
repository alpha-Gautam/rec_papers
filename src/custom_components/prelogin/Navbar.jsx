import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null); // 'mentor', 'student', or null (logged-out)
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => setUserRole(null);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 shadow-md" : "bg-black"
      } text-white`}
    >
      <div className="container mx-auto px-2 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Website Logo" className="h-10 mr-2" />
          <span className="text-2xl font-bold">
            <Link
              to="/"
              className="hover:text-blue-500 transition text-white no-underline"
            >
              REC PAPERS
            </Link>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-5">
          <Link
            to="/"
            className="hover:text-blue-600 transition text-white no-underline"
          >
            Home
          </Link>
          {userRole === null ? (
            <>
              <Link
                to="/login"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Register
              </Link>
              <Link
                to="/dashboard"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                My Profile
              </Link>
              {userRole === "mentor" && (
                <Link
                  to="./MentorPanel.jsx"
                  className="hover:text-blue-500 transition text-white no-underline"
                >
                  Mentor Panel
                </Link>
              )}
              {userRole === "student" && (
                <Link
                  to="./StudentPanel.jsx"
                  className="hover:text-blue-500 transition text-white no-underline"
                >
                  Student Panel
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu with Transition */}
      <div
        className={`md:hidden bg-black border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 p-3">
          <Link
            to="/"
            className="hover:text-blue-500 transition text-white no-underline"
          >
            Home
          </Link>
          {userRole === null ? (
            <>
              <Link
                to="/login"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Register
              </Link>
              <Link
                to="/dashboard"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                My Profile
              </Link>
              {userRole === "mentor" && (
                <Link
                  to="./MentorPanel.jsx"
                  className="hover:text-blue-500 transition text-white no-underline"
                >
                  Mentor Panel
                </Link>
              )}
              {userRole === "student" && (
                <Link
                  to="./StudentPanel.jsx"
                  className="hover:text-blue-500 transition text-white no-underline"
                >
                  Student Panel
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
