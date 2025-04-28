import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BackIcon} from "../../assets/images/icon"

import {userRagister} from '../../api/login'

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("Student"); // State to track selected role
  const [r_button,setR_button] = useState(false)

  const handleBackToLanding = () => {
    navigate("/"); // Redirect to Home.jsx
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };


  const handleFormRagistration =async(data)=>{

    try {
      const response = await userRagister(data)
      if(response.status===200){
        console.log("Registration Succesfull!")
        console.log("response---->",response)
        setTimeout(() => {
          
        navigate("/login")
          
        }, 1000);
      }

    } catch (error) {
      console.log("Register Error",error)
      alert(`Error: ${error.message}`)
      
    }
    finally{
      setR_button(false)
    }


  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 pt-40 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg flex flex-col overflow-auto my-5">
      <button
          onClick={handleBackToLanding}
          className=" w-fit text-gray-700 hover:underline text-sm pr-0  "
        >
          <BackIcon/>
        </button>
        <h2 className="text-center text-xl font-semibold mb-4">
          Please Register To Continue
        </h2>
        <div className="border-b border-gray-300 mb-4">
          <div className="flex justify-center">
            <button
              className="px-4 py-2 text-gray-600"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
            <button className="px-4 py-2 text-gray-800 border-b-2 border-green-500 font-semibold">
              Sign Up
            </button>
          </div>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = {
            "user_uuid": formData.get('roll-no'),
            "username": formData.get('username'),
            "email": formData.get('email'),
            "password": formData.get('password'),
            "mobile": formData.get('mobile'),
            "college": formData.get('college'),
            "department": formData.get('department'),
            "created": "",
            "isstudent": formData.get('isstudent') === 'Student',
            "ismentor": formData.get('ismentor') === 'Mentor'

          };
          console.log(data);
          setR_button(true)

          handleFormRagistration(data)
        }}>
          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="text"
                name="roll-no"
                placeholder="Roll No"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="w-full outline-none text-gray-700"
              />
            </div>

            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-building"></i>
              </span>
              <select
              name="college"
                className="w-full outline-none text-gray-700 bg-transparent"
                defaultValue=""
              >
                <option value="" disabled>
                  Select college
                </option>
                <option value="reck">Rajkiya Engineering college Kannauj</option>
                <option value="recb">Rajkiya Engineering college Banda </option>
                <option value="recsnb">Rajkiya Engineering college Sonbhadra </option>
                <option value="recd">Rajkiya Engineering college d</option>
              </select>
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-building"></i>
              </span>
              <select
              name="department"
                className="w-full outline-none text-gray-700 bg-transparent"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Department
                </option>
                <option value="CSE">Computer Science & Engineering</option>
                <option value="EL">Electronics Engineering</option>
                <option value="EE">Electrical Engineering</option>
                <option value="CE">Civil Engineering</option>
              </select>
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
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="password"
                name="password-1"
                placeholder="Re-type password"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition my-2 ${r_button ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={r_button}
          >
            Sign Up
          </button>
        </form>
        {/* <button
          onClick={handleBackToLanding}
          className="mt-4 w-full text-gray-700 hover:underline text-sm"
        >
          Back to Home-Page
        </button> */}
      </div>
    </div>
  );
};

export default Signup;
