import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import StudentPanel from './StudentPanel';
import CreateProject from './CreateProject';
import StudentProfile from './StudentProfile';
import FacultyProfile from './FacultyProfile';
import Sidebar from './sidebar'
import ProjectViewPanel from './ProjectView'
import ChatDashboard from "./chat_components/ChatDashboard"

const postLogin = () => {
  // const [role,setRole] = useState(false)

  const role = localStorage.getItem("role")
  console.log("user role:-",role)
  
    const userdata={
      "username": localStorage.getItem("username"),
      "email": localStorage.getItem("email"),
      "college": localStorage.getItem("college"),
      "mobile": localStorage.getItem("mobile"),
      "user_id": localStorage.getItem("user_id"),
      "role": localStorage.getItem("role"),
      "department": localStorage.getItem("department")
    };
  

  return (
<div className='flex'>

            <div className='flex  h-screen sticky top-0'>
                <Sidebar/>
            </div>

            
    <div className='h-[inherit] w-full ml-[75px] '>
        
    <Routes>
          <Route path="/" element={<StudentPanel />} />
          <Route path="/profile" element={<FacultyProfile user_details={userdata} />} />
          <Route path='/chat' element={<ChatDashboard />} />
          <Route path='/create-project' element={<CreateProject/>}/>  
          <Route path='/project/:id' element={<ProjectViewPanel/>}/>
          {/* <Route path="/project/:id" element={<ReadMore/>}/> */}
    </Routes>


      
    </div>

    </div>


  )
}

export default postLogin
