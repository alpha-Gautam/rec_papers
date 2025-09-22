import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLoginapi, set_cookies, forgetPasswordAPI } from "../../api/login";
import { auth, provider } from "../../firebase";
// import { signInWithPopup } from "firebase/auth";
import { BackIcon } from "../../assets/images/icon";

const Login = () => {
  // simple RFC-like email validation
  const isValidEmail = (value) => {
    if (!value || typeof value !== "string") return false;
    const v = value.trim();
    // basic regex: local@domain.tld (keeps it conservative)
    // eslint-disable-next-line no-useless-escape
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(v);
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [loginButton, setLoginButton] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);

  useEffect(() => {
    set_cookies();
    console.log("cookies is set");
  }, []);

  const handleBackToLanding = () => {
    navigate("/");
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleFormLogin = async (data) => {
    setErrorMsg("");
    // validate email before sending
    if (!isValidEmail(data.email)) {
      setEmailError("Please enter a valid email address.");
      setLoginButton(false);
      return;
    }
    console.log("Logging in with data:", data);
    try {
      const loginResponse = await userLoginapi(data);
      console.log("Login response:", loginResponse);
      if (loginResponse.status === 200) {
        const userData = loginResponse.data.data;

        if (userData["id"]) {
          localStorage.setItem("username", userData["username"]);
          localStorage.setItem("user_id", userData["id"]);
          localStorage.setItem("email", userData["email"]);
          localStorage.setItem(
            "role",
            userData["role"] === "STUDENT" ? false : true
          );
          localStorage.setItem("college", userData["college"]);
          localStorage.setItem("mobile", userData["mobile"]);
          localStorage.setItem("department", userData["department"]);
          localStorage.setItem("v_by_a", userData["is_active"]);

          navigate("/dashboard/profile");
          // navigate("/dashboard");
        }
      } else if (loginResponse.data.error.includes("not activated")) {
        console.log("filed login account not activated?");
        alert(
          "Account is not activated. Please check your email for the activation link."
        );
      } else {
        setErrorMsg("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log("error catched", error);
      setErrorMsg(error.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoginButton(false);
    }
  };

  const handleForgetPassword = async () => {
    setForgetPassword(true);
    setErrorMsg("");
    setEmailError("");
    if (email.trim() === "") {
      setEmailError("Please enter your email for password reset.");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (forgetPassword) {
      const response = await forgetPasswordAPI(email);
      if (response?.status === 200) {
        alert("Password reset email sent successfully.");
      } else {
        setErrorMsg("Failed to send password reset email.");
      }
    }
    setForgetPassword(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await "nothing";
      // const result = await signInWithPopup(auth,  provider);
      const user = result.user;
      const data = {
        email: user.email,
        password: "",
        role: role,
      };
      await handleFormLogin(data);
    } catch (error) {
      setErrorMsg("Google Sign In failed. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
        {/* Back Icon */}
        <button
          onClick={handleBackToLanding}
          className="absolute top-4 left-4 text-gray-600 hover:text-black"
        >
          <BackIcon />
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6">
          Please Login To Continue
        </h2>

        {/* Tab Header */}
        <div className="flex justify-center mb-4 border-b border-gray-300">
          <button className="px-4 py-2 text-black border-b-2 border-green-500 font-semibold focus:outline-none">
            Sign In
          </button>
          <button
            className="px-4 py-2 text-gray-500 hover:text-black"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-500 text-sm text-center mb-2">{errorMsg}</p>
        )}

        {/* Inputs */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Username or Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => {
              setEmail(e.target.value);
              // clear errors as user types
              setErrorMsg("");
              setEmailError("");
            }}
          />
          {/* Inline email validation message */}
          {emailError && (
            <p className="text-red-500 text-xs mt-1">{emailError}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Sign In Button */}
        <button
          onClick={() => {
            if (!loginButton) {
              const data = { email, password, role };
              setLoginButton(true);
              handleFormLogin(data);
            }
          }}
          disabled={loginButton}
          className={`w-full mt-6 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition ${
            loginButton ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loginButton ? "Signing In..." : "Sign In"}
        </button>

        {/* Google Login */}
        {/* <button
          onClick={handleGoogleLogin}
          className="w-full mt-3 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          Sign In with Google
        </button> */}

        {/* Forgot Password */}
        <div className="mt-3 text-center">
          <button
            onClick={handleForgetPassword}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
