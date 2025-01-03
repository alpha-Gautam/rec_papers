import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Logo.png";
import "./Navbar.css"; // Create and style your Navbar in this CSS file
import Login from './Login';


const Navbar = () => {
  // State to track login and user role

  const navigate = useNavigate();

  const [userRole, setUserRole] = useState(null); // 'mentor', 'student', or null (logged-out)

  // Remove these functions since they are no longer needed
  // const handleLoginAsMentor = () => setUserRole("mentor");
  // const handleLoginAsStudent = () => setUserRole("student");

  const handleLogout = () => setUserRole(null);

const [openLogin,setOpenLogin] = useState(false)
  return (
    <nav className=" w-full h-20">
      <div className="w-full p-4 flex justify-between ">

      <div className="navbar-logo ">
        <img src={logo} alt="Website Logo" className="logo" />
        <span className="website-name">
          <Link to="/">Academic Reports and Research Papers</Link>
        </span>
      </div>


      <div className=" ">
          <ul className="navbar-links text-nowrap">
            <li>
              <Link to="/">Home</Link>
            </li>
            {userRole === null && (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                   
                </li>
                <li>
                  <Link to="/signup">Register</Link>
                </li>
                {/* Simulate logins for testing (remove these in production) */}
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                {/* <li>
                  <Link to="/student-panel">Student Login</Link>
                </li> */}
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
