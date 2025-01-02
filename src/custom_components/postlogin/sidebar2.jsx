import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const sidebar2 =  ()=>{
  return (
    <div className='h-screen border-r-2'>
        {/* <div className='h-10'></div> */}
        <aside className="sidebar h-full ">
            <div className='flex h-full flex-col justify-between'>


                    <div>
                    <h3>OPTIONS</h3>
                    </div>

                    <div className='w-[200px]'>
                        <ul>
                            
                            <li><button onClick={() => window.location.href = '/'} className='text-nowrap'>Landing page</button></li>
                            <li><button onClick={() => window.location.href = '/dashboard'} className='text-nowrap'>Home</button></li>
                            <li><button onClick={() => window.location.href = '/dashboard/create-project'} className='text-nowrap'>Create Project</button></li>
                            <li><button onClick={() => window.location.href = '/dashboard/project-status'} className='text-nowrap'>Ongoing Projects</button></li>
                            <li><button onClick={() => window.location.href = '/dashboard/choose-mentor'} className='text-nowrap'>Choose Mentor</button></li>
                            <li><button onClick={() => window.location.href = '/dashboard/view-projects'} className='text-nowrap'>View Project Reports</button></li>
                        </ul>
                    </div>


                    <div>
                        <h>this is botom part</h>
                    </div>
                </div>

            </aside>
      
    </div>
  )
}

export default sidebar2
