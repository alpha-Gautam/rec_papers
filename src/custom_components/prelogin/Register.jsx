import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {userRagister} from '../../api/login'

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); // State to track selected role

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
        console.log("ragistration succesfull !")
        console.log("response---->",response)
        setTimeout(() => {
          
        navigate("/login")
          
        }, 1000);
      }

    } catch (error) {
      console.log("ragister error",error)
      
    }


  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg">
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
                placeholder="username"
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
                placeholder="roll-no"
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
                <option value="reck">Rajkiya Engineering college kannauj</option>
                <option value="recb">Rajkiya Engineering college b </option>
                <option value="recsnb">Rajkiya Engineering college snb </option>
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
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition my-2"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleBackToLanding}
          className="mt-4 w-full text-gray-700 hover:underline text-sm"
        >
          Back to Home-Page
        </button>
      </div>
    </div>
  );
};

export default Signup;
