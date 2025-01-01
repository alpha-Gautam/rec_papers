import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import "./Navbar.css"; // Create and style your Navbar in this CSS file

const Navbar = () => {
  // State to track login and user role
  const [userRole, setUserRole] = useState(null); // 'mentor', 'student', or null (logged-out)

  // Remove these functions since they are no longer needed
  // const handleLoginAsMentor = () => setUserRole("mentor");
  // const handleLoginAsStudent = () => setUserRole("student");

  const handleLogout = () => setUserRole(null);

  return (
    <nav className="navbar w-full border-0 rounded-lg  ">
      <div className=" px-1 flex flex-1 justify-between gap-96">

      <div className="navbar-logo ">
        <img src={logo} alt="Website Logo" className="logo" />
        <span className="website-name">
          <Link to="/">Academic Reports and Research Papers</Link>
        </span>
      </div>


      <div className="">
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {userRole === null && (
              <>
                <li>
                  <Link to="/signin">Log In</Link>
                </li>
                <li>
                  <Link to="/signup">Register</Link>
                </li>
                {/* Simulate logins for testing (remove these in production) */}
                <li>
                  <Link to="/mentor-panel">Mentor Login</Link>
                </li>
                <li>
                  <Link to="/student-panel">Student Login</Link>
                </li>
              </>
            )}
            {userRole && (
              <>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                {userRole === "mentor" && (
                  <li>
                    <Link to="./MentorPanel.jsx">Mentor Panel</Link>
                  </li>
                )}
                {userRole === "student" && (
                  <li>
                    <Link to="./StudentPanel.jsx">Student Panel</Link>
                  </li>
                )}
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
      </div>

      </div>
    </nav> 
  );
};

export default Navbar;
