import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/images/icon";
import { userRegister } from '../../api/login';
// import { auth, provider } from '../../firebase';
// import { signInWithPopup } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    rollNo: "",
    email: "",
    mobile: "",
    college: "",
    department: "",
    password: "",
    password2: "",
    role: "Student",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBack = () => navigate("/");
  const handleTab = () => navigate("/login");
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleRoleChange = e => setForm(f => ({ ...f, role: e.target.value }));

  const submit = async data => {
    setError("");
    try {
      const res = await userRegister(data);
      if (res.status === 200) {
        navigate("/login", { replace: true });
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Sign-up error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.username || !form.rollNo || !form.email || !form.college || !form.department || !form.password) {
      setError("Please fill in all required fields");
      return;
    }
    if (form.password !== form.password2) {
      setError("Passwords don't match.");
      return;
    }
    setLoading(true);
    const emailValidate = form.email.split("@")
    console.log("email validater", emailValidate)
    if(emailValidate[emailValidate.length-1]!=="reck.ac.in"){
      alert("Write a valied college 'Email Id'")
      setLoading(false);
    }
    else{
      submit({
        user_id: form.rollNo,
        username: form.username,
        email: form.email,
        password: form.password,
        mobile: form.mobile,
        college: form.college,
        department: form.department,
        is_student: form.role === "Student",
        is_faculty: form.role === "Mentor",
      });
    }
  };

  const handleGoogle = async () => {
    if (!form.college || !form.department) {
      setError("Please select college and department before Google sign up");
      return;
    }
    setError("");
    // try {
    //   const { user } = await signInWithPopup(auth, provider);
    //   setLoading(true);
    //   await submit({
    //     user_id: user.uid,
    //     username: user.displayName,
    //     email: user.email,
    //     password: "",
    //     mobile: "",
    //     college: form.college,
    //     department: form.department,
    //     is_student: form.role === "Student",
    //     is_faculty: form.role === "Mentor",
    //   });
    // } catch (err) {
    //   setError("Google Sign-Up failed. Try again.");
    //   setLoading(false);
    // }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative max-h-[90vh] overflow-y-auto my-8 mx-4 sm:mx-8">
        {/* Back Icon */}
        <button onClick={handleBack} className="absolute top-4 left-4 text-gray-600 hover:text-black">
          <BackIcon />
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6">Please Register To Continue</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-4 border-b border-gray-300">
          <button className="px-4 py-2 text-gray-500 hover:text-black" onClick={handleTab}>
            Sign In
          </button>
          <button className="px-4 py-2 text-black border-b-2 border-green-500 font-semibold">
            Sign Up
          </button>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              name="rollNo"
              value={form.rollNo}
              onChange={handleChange}
              type="text"
              placeholder="Roll No / ID"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="College E-mail"
              pattern="[a-zA-Z0-9._-]+@reck.ac.in"
              title="Please enter a valid email address ending with @reck.ac.in"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              type="tel"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <select
              name="college"
              value={form.college}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select college</option>
              <option value="Rajkiya Engineering College Kannauj">Rajkiya Engineering College Kannauj</option>
              <option value="Rajkiya Engineering College Banda">Rajkiya Engineering College Banda</option>
              <option value="Rajkiya Engineering College Sonbhadra">Rajkiya Engineering College Sonbhadra</option>
              <option value="Rajkiya Engineering College Bijnor">Rajkiya Engineering College Bijnor</option>
              <option value="Rajkiya Engineering College Basti">Rajkiya Engineering College Basti</option>
            </select>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select Department</option>
              <option value="Computer Science & Engineering">Computer Science & Engineering</option>
              <option value="Electronics Engineering">Electronics Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
            </select>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              minLength="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              name="password2"
              value={form.password2}
              onChange={handleChange}
              type="password"
              placeholder="Re-type Password"
              minLength="5"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${form.password2!==form.password? "text-red-600":""}`}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mt-4 text-center">
            <label className="block text-gray-700 font-medium mb-1">Select your role:</label>
            <div className="flex justify-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={form.role === "Student"}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                Student
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Mentor"
                  checked={form.role === "Mentor"}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                Mentor
              </label>
            </div>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <button
          onClick={handleGoogle}
          disabled={loading}
          className={`w-full mt-3 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
