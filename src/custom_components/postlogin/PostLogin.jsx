import React from 'react'
import {Routes, Route} from 'react-router-dom';
import StudentPanel from './StudentPanel';
// import MentorPanel from './ProjectView';
import CreateProject from './CreateProject';
// import ReadMore from './ReadMore';
import Sidebar from './sidebar'
import ProjectViewPanel from './ProjectView'
import ChatDashboard from "./chat_components/ChatDashboard"

const postLogin = () => {
  return (
<div className='flex'>

            <div className='flex h-screen sticky top-0'>
                <Sidebar/>
            </div>

            
    <div className='h-[inherit] w-full'>
        
    <Routes>
          <Route path="/" element={<StudentPanel />} />
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
