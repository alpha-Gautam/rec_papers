import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";

const Sidebar =  ()=>{

const navigate = useNavigate();

const [expand,setExpand] = useState(true)


const handleLogout=()=>{
    localStorage.clear()
    navigate("/")
    console.log("Logout done! ")
}
    

  return (
    <div className={` h-screen border-r-2 ${!expand && "w-20"}`}>
        {/* <div className='h-10'></div> */}
        <aside className="sidebar h-full ">
            <div className='flex h-full flex-col justify-between'>


                    <div>
                    <h3>REC Papers</h3>
                    </div>

                    <div className='w-[200px]'>
                        <ul>
                            
                            <li><button onClick={() =>{ 
                                navigate("/")

                                // window.location.href = '/'
                                } } className='text-nowrap'>Landing page</button></li>
                            <li><button onClick={() => {
                                navigate('/dashboard'); {/*window.location.href = '/dashboard'*/}}} className='text-nowrap'>Home</button></li>
                            <li><button onClick={() => window.location.href = '/dashboard/create-project'} className='text-nowrap'>Create Project</button></li>
                            {/* <li><button onClick={() => window.location.href = '/dashboard/project-status'} className='text-nowrap'>Ongoing Projects</button></li> */}
                            <li><button onClick={() => window.location.href = '/dashboard/mentor'} className='text-nowrap'>Mentor</button></li>
                            {/* <li><button onClick={() => window.location.href = '/dashboard/view-projects'} className='text-nowrap'>View Project Reports</button></li> */}
                        </ul>
                    </div>


                    <div>
                        <button type='button' onClick={handleLogout}>Logout</button>
                    </div>
                </div>

            </aside>
      
    </div>
  )
}

export default Sidebar
