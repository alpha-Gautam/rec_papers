import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {userLoginapi} from '../../api/login';
import clsx from "clsx";
import {BackIcon} from '../../assets/images/icon'

const Login = () => {
  const navigate = useNavigate();

  const [loginData,setLoginData] = useState()
  // const [loginData,setLoginData] = useState({})
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")



const handleLogout= ()=>{
  localStorage.clear()
  navigate("/")
}
  

  const handleFormLogin = async(data)=>{

      try {
        const loginResponse = await userLoginapi(data);
        // const loginResponse = await userLoginapi(JSON.stringify(data));
        if (loginResponse.status === 200) {
          console.log("login response", loginResponse);
          console.log("login response data", loginResponse.data);
          const userData=loginResponse.data
          setLoginData(userData)

          
          if(loginResponse.data["user_uuid"]){
            console.log("data uploade in localstorage")

            localStorage.setItem("username",loginResponse.data["username"])
            localStorage.setItem("user_id",loginResponse.data["user_uuid"])
            localStorage.setItem("email",loginResponse.data["email"])
            localStorage.setItem("role",loginResponse.data["is_faculty"])
            localStorage.setItem("college",loginResponse.data["college"])
            localStorage.setItem("mobile",loginResponse.data["mobile"])
            localStorage.setItem("department",loginResponse.data["department"])

            // setTimeout(() => {
            //   console.log("----------------:",loginData)
            //    }, );

            navigate("/dashboard")
              
           


          }
        } else {
          console.log("login status failed", loginResponse);
          alert("Login failed: " + (loginResponse.headers || "Unknown error"));
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        alert("Login failed: " + (error.response.data.message || "Unknown error"));
      }
  }

  const handleBackToLanding = () => {
    navigate("/"); // Redirect to Home.jsx
    
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg">
      <button
          onClick={handleBackToLanding}
          className=" w-fit text-gray-700 hover:underline text-sm pr-0  "
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

        
        <div 
        // onSubmit={(e) => {
          
          // const formData = new FormData(e.target);
          // const data = {
          //   "email": formData.get('userEmail'),
          //   "password": formData.get('password'),
          //   "rememberMe": formData.get('rememberMe') === 'on'
          // };
          // console.log(data);

          // handleFormLogin(data)
        // }}
        >
          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <span className="text-gray-500 pr-2">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name="userEmail"
                placeholder="Username or Email"
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
          <div className="flex justify-between items-center my-4">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" name="rememberMe" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            onClick={()=>{
              const data = {
                "email": email,
                "password": password,
                "rememberMe": false,
              };
              console.log(data);
    
              handleFormLogin(data)
            }}
          >
            Sign In
          </button>
        </div>






        {/* <div className="my-2 text-center text-gray-500">OR</div> */}
        <div className="grid grid-cols-1 gap-2">
        {/* <button className="flex items-center justify-center w-full py-2 border border-gray-400 rounded-md bg-sky-500 text-white hover:bg-gray-800 transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button> */}

          {/* <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Facebook
          </button>
          <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            LinkedIn
          </button>
          <button className="bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition">
            GitHub
          </button> */}
        </div>
        {/* <div className="text-center mt-4 text-gray-600 text-sm">
          Why Create an Account? <br />
          <a href="#" className="text-green-500 hover:underline">
            Privacy Policy & Cookie Policy
          </a>
        </div> */}
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

export default Login;
