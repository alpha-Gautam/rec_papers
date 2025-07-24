import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "./logo1.png";
import { userLoginapi } from '../../api/login';
import { wait } from "@testing-library/user-event/dist/utils";
import { LoadingIcon } from '../../assets/icons/Loading';


const Navbar = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null); // 'mentor', 'student', or null (logged-out)
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");

  const handleLogout = () => setUserRole(null);

  // Monitor scroll position
  const isProduction = window.location.href.includes("localhost")
  console.log("is url local:-",isProduction)
  
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

  const guestLoginHandler = async (email="guest@reck.ac.in",password="123") => {
    setLoading(true);
    // console.log("before wait")
    //   await wait(10000);
    //   console.log("after wait")

    try {
      const loginResponse = await userLoginapi({ email: email, password: password});
      if (loginResponse.status === 200) {
        const userData = loginResponse.data;
    
            if (userData["uuid"]) {
              localStorage.setItem("username", userData["username"]);
              localStorage.setItem("user_id", userData["uuid"]);
              localStorage.setItem("email", userData["email"]);
              localStorage.setItem("role", userData["is_faculty"]);
              localStorage.setItem("college", userData["college"]);
              localStorage.setItem("mobile", userData["mobile"]);
              localStorage.setItem("department", userData["department"]);
              localStorage.setItem("v_by_a", userData["verified_by_admin"]);
    
              navigate("/dashboard/profile");
              // navigate("/dashboard");
            }
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Try again.");
    } finally {
      
      setLoading(false);
    }
  };

  return (
    <>
{loading && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="  rounded-xl shadow-lg px-8 py-6 flex flex-col items-center">
      <span className="text-lg font-semibold mb-2"><LoadingIcon/></span>
      <div className="loader mt-2" />
    </div>
  </div>
)}
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 shadow-md" : "bg-black"
      } text-white`}
    >
      <div className="container mx-auto px-2 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo1} alt="Website Logo" className="h-10 mr-2" />
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
              {/* <button
                onClick={guestLoginHandler}
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Guest Login
              </button> */}

              <select name="guest_login" id="guest_login" className=" transition hover:border-0  text-white bg-black"
              onChange={e => {
                  const value = e.target.value;
                  console.log("Selected:", value)
                  if(value !== "") {
                    guestLoginHandler(value);
                  }
                
                  }}    
              >

                <option value="">Guest Login</option>
                <option value="guest@reck.ac.in">student</option>
                <option value="guestfaculty@reck.ac.in">faculty</option>

              </select>

             { isProduction && <Link
                to="/dashboard"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Dashboard
              </Link>}
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
          {/* <Link
            to="/"
            className="hover:text-blue-500 transition text-white no-underline"
          >
            Home
          </Link> */}
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
              {isProduction&&<Link
                to="/dashboard"
                className="hover:text-blue-500 transition text-white no-underline"
              >
                Dashboard
              </Link>}
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
    </>
  );

};

  
export default Navbar;
