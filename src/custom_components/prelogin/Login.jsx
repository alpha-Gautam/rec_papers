import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {userLoginapi} from '../../api/login';
import clsx from "clsx";
import {BackIcon} from '../../assets/images/icon'

const Login = () => {
  const navigate = useNavigate();

  const [loginData,setLoginData] = useState()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loginButton, setLoginButton] = useState(false)
  const [role, setRole] = useState("Student")

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleFormLogin = async(data) => {
    try {
      const loginResponse = await userLoginapi(data);
      if (loginResponse.status === 200) {
        console.log("login response", loginResponse);
        console.log("login response data", loginResponse.data);
        const userData = loginResponse.data
        setLoginData(userData)
        
        if(loginResponse.data["uuid"]){
          console.log("Data uploaded in Local Storage")

          localStorage.setItem("username",loginResponse.data["username"])
          localStorage.setItem("user_id",loginResponse.data["uuid"])
          localStorage.setItem("email",loginResponse.data["email"])
          localStorage.setItem("role",loginResponse.data["is_faculty"])
          localStorage.setItem("college",loginResponse.data["college"])
          localStorage.setItem("mobile",loginResponse.data["mobile"])
          localStorage.setItem("department",loginResponse.data["department"])

          navigate("/dashboard")
        }
      } else {
        console.log("Login status failed", loginResponse);
        alert("Login failed: " + (loginResponse.headers || "Unknown error"));
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      alert("Login failed: " + (error.response?.data?.message || "Unknown error"));
    } finally {
      setLoginButton(false)
    }
  }

  const handleBackToLanding = () => {
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg">
        <button
          onClick={handleBackToLanding}
          className="w-fit text-gray-700 hover:underline text-sm pr-0"
        >
          <BackIcon/>
        </button>
        <h2 className="text-center text-xl font-semibold mb-4">
          Please Login To Continue
        </h2>
        <div className="border-b border-gray-300 mb-4">
          <div className="flex justify-center">
            <button className="px-4 py-2 text-gray-800 border-b-2 border-green-500 font-semibold">
              Sign In
            </button>
            <button
              className="px-4 py-2 text-gray-600"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name="userEmail"
                placeholder="Email"
                className="w-full outline-none text-gray-700"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full outline-none text-gray-700"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 text-center font-medium">
              Select your role:
            </label>
            <div className="flex items-center justify-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isstudent"
                  value="Student"
                  checked={role === "Student"}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                <span>Student</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="ismentor"
                  value="Mentor"
                  checked={role === "Mentor"}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                <span>Mentor</span>
              </label>
            </div>
          
            <button
              type="submit"
              className={`w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition ${loginButton ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={()=>{
                if (!loginButton) {
                  const data = {
                    "email": email,
                    "password": password,
                    "role": role
                  };
                  setLoginButton(true)
                  console.log(data);
        
                  handleFormLogin(data)
                }
              }}
              disabled={loginButton}
            >
              Sign In
            </button>
            <div className="flex justify-between items-center my-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
