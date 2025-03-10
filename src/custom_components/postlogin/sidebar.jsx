import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar =  ()=>{

const navigate = useNavigate();
const [expand,setExpand] = useState(true)


const handleLogout=()=>{
    localStorage.clear()
    navigate("/")
    console.log("Logout done! ")
}
    

  return (
    <div className={` h-screen border-r-2 ${expand ? "w-64" : "w-20"
    } fixed sm:relative z-50 bg-inherit`}>
        {/* <div className='h-10'></div> */}

        <button
            className="absolute top-4 right-4 sm:hidden p-2"
            onClick={() => setExpand(!expand)}
            >
            {expand ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside className="sidebar h-full ">
            <div className='flex h-full flex-col justify-between'>


                    <div className={`p-4 ${!expand && "hidden sm:block"}`}>
                    <h3>REC Papers</h3>
                    </div>

                    <div className={`p-4 transition-all ${expand ? "w-48" : "w-10"}`}>
                        <ul>                            
                            <li><button onClick={() =>{ 
                                navigate("/")

                                // window.location.href = '/'
                                } } className='text-nowrap'>Landing page</button></li>
                            <li><button onClick={() => {
                                navigate('/dashboard'); {/*window.location.href = '/dashboard'*/}}} className='text-nowrap'>Home</button></li>
                            <li><button onClick={() => window.location.href = '/dashboard/create-project'} className='text-nowrap'>Create Project</button></li>
                            {/* <li><button onClick={() => window.location.href = '/dashboard/project-status'} className='text-nowrap'>Ongoing Projects</button></li> */}
                            {/* <li><button onClick={() => window.location.href = '/dashboard/mentor'} className='text-nowrap'>Mentor</button></li> */}
                            {/* <li><button onClick={() => window.location.href = '/dashboard/view-projects'} className='text-nowrap'>View Project Reports</button></li> */}
                        </ul>
                    </div>

                    <div className='p-4'>
                        <button type='button' onClick={handleLogout} 
                            className="w-full py-2 px-4 bg-red-600 font-semibold rounded-lg text-center transition-all duration-300 hover:bg-red-700 md:w-auto md:px-6">
                                Logout</button>
                    </div>
                </div>
            </aside>      
    </div>
  )
}

export default Sidebar
