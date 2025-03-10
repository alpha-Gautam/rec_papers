import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    console.log("Logout done!");
  };

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 sm:hidden p-2 bg-white text-gray-900 rounded-lg shadow-md"
        onClick={() => setExpand(!expand)}
      >
        {expand ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile view when sidebar is open */}
      {expand && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 sm:hidden z-40"
          onClick={() => setExpand(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed sm:relative h-screen bg-gray-900 text-white border-r transition-all duration-300 z-50 ${
          expand ? "w-64" : "w-20 sm:w-64"
        }`}
      >
        <aside className="flex h-full flex-col justify-between">
          {/* Logo - Centered */}
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold">REC Papers</h3>
          </div>

          {/* Navigation Links */}
          <div className="p-4 flex flex-col items-center space-y-4">
            <button
              onClick={() => {
                navigate("/");
                setExpand(false);
              }}
              className="w-full py-2 px-4 bg-white text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200"
            >
              Landing Page
            </button>
            <button
              onClick={() => {
                navigate("/dashboard");
                setExpand(false);
              }}
              className="w-full py-2 px-4 bg-white text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/dashboard/create-project");
                setExpand(false);
              }}
              className="w-full py-2 px-4 bg-white text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200"
            >
              Create Project
            </button>
          </div>

          {/* Logout Button - Centered */}
          <div className="p-4 flex justify-center">
            <button
              type="button"
              onClick={handleLogout}
              className="py-2 px-6 bg-white text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
