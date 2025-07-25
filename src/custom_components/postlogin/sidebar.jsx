import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {HomeIcon,ChIconCreate,ChIconLogOut,ChIconLandingPage, ChIconChat, ChIconProfile} from "../../assets/images/icon"
import logo from "../../assets/images/logo.png"
import { Button } from "../../components/UI/button";

const Sidebar = () => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const [logout, setLogout] = useState(false);
  const isProduction = window.location.href.includes("localhost")


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

     

<div
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={()=>setExpand(false)}
        className={`absolute h-screen z-50 bg-gray-900 text-white transition-all duration-300 ${expand ? "w-64 " : "w-20"}`}
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


           {isProduction && <div className="flex justify-center items-center w-full py-2 px-4  text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200"
            >

           
            <button
              onClick={() => {
                navigate("/");
               
              }}
            >
              <ChIconLandingPage/>
              {/* {expand? <p>Landing Page</p>:""} */}
            </button>
            </div>}

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
                navigate("/dashboard/profile");
                
              }}
              
            >
              <ChIconProfile selected={true} width={40} height={40} />
              {/* {expand? <p>Home</p>:""} */}
            </button>
            </div>


            
                <div className="flex justify-center items-center w-full py-2 px-4  text-blue-700 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-gray-200">
            <button
              onClick={() => {
                navigate("/dashboard/chat");
                
              }}
              
            >
              <ChIconChat selected={true} width={40} height={40} />
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
              onClick={() => setLogout(true)}
              
            >
              <ChIconLogOut/>
              
              {/* {expand? <p>Logout</p>:""} */}
            </button>
            </div>
          </div>
        </aside>
      </div>
      {logout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="   shadow-lg  flex flex-col items-center">
            <div className="w-[350px] h-[200px] rounded-xl bg-white p-4 flex-col items-center justify-between">
              <div className="text-lg font-semibold">Are you sure you want to logout?</div>
              <div className="flex justify-between p-1 mt-20">
                <Button type="button" onClick={()=>setLogout(false)} className="rounded-xl">close</Button>
                <Button onClick={handleLogout} className="rounded-xl"> Logout</Button>
              </div>
            </div>
            <div className="loader mt-2" />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
