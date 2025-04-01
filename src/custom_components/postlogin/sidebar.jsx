import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {HomeIcon,ChIconCreate,ChIconLogOut,ChIconLandingPage,ChIconLogo} from "../../assets/images/icon"
import logo from "../../assets/images/logo.png"

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
        className="fixed top-4 left-4 z-50 sm:hidden p-2 text-gray-900 rounded-lg shadow-md"
        onClick={() => setExpand(!expand)}
      >
        {expand ? <X size={24} /> : <Menu size={24} />}
      <div className="bg-red-900 z-50"></div>
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
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={()=>setExpand(false)}
        className={`fixed sm:relative h-screen bg-gray-900 text-white border-r transition-all duration-300 z-50  ${
          expand ? "w-64" : "w-20"
        }`}
      >
        <aside className="flex h-full flex-col justify-between">
          {/* Logo - Centered */}
          <div className="flex flex-col justify-center items-center p-4 text-center">
            <div className="flex justify-center items-center  size-fit relative overflow-hidden transition-all duration-300"> 
             
            {/* <ChIconLogo/> */}
            <img src={logo} alt="Logo" className={`transition-all duration-1000 ${expand? "w-[70px] h-[100px]" : "w-[40px] h-[50px]"}`} />

            
            </div>
            {expand? <h3 className="text-lg font-bold whitespace-nowrap mt-2">REC Papers</h3>:""}
            
          </div>
          

          {/* Navigation Links */}
          <div className="p-4 flex flex-col justify-center items-center space-y-4">


            <div className="flex justify-center items-center w-full py-2 px-4  text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200"
            >

           
            <button
              onClick={() => {
                navigate("/");
               
              }}
            >
              <ChIconLandingPage/>
              {/* {expand? <p>Landing Page</p>:""} */}
            </button>
            </div>

                <div className="flex justify-center items-center w-full py-2 px-4  text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200">
            <button
              onClick={() => {
                navigate("/dashboard");
                
              }}
              
            >
              <HomeIcon selected={true} width={40} height={40} />
              {/* {expand? <p>Home</p>:""} */}
            </button>
            </div>
            
            <div className="flex justify-center items-center w-full py-2 px-4  text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200">
            <button
              onClick={() => {
                navigate("/dashboard/create-project");
                
              }}
              
            >
              <ChIconCreate/>
              
              {/* {expand? <p>Create Project</p>:""} */}
            </button>
            </div>
          </div>

          {/* Logout Button - Centered */}
          <div className="p-4 flex justify-center">
              <div className="flex justify-center items-center py-2 px-2  text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200 ">
            <button
              type="button"
              onClick={handleLogout}
              
            >
              <ChIconLogOut/>
              
              {/* {expand? <p>Logout</p>:""} */}
            </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
