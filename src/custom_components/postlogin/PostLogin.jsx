import React from 'react'
import {Routes, Route} from 'react-router-dom';
import StudentPanel from './StudentPanel';
// import MentorPanel from './ProjectView';
import CreateProject from './CreateProject';
// import ReadMore from './ReadMore';
import Sidebar from './sidebar'
import ProjectViewPanel from './ProjectView'

const postLogin = () => {
  return (
<div className='flex'>

            <div className='flex h-screen sticky top-0'>
                <Sidebar/>
            </div>

            
    <div className='h-[inherit] w-full'>
        
    <Routes>
          <Route path="/" element={<StudentPanel />} />
          {/* <Route path="/dashboard/mentor" element={<MentorPanel />} /> */}
          <Route path='/create-project' element={<CreateProject/>}/>  
          <Route path='/project/:id' element={<ProjectViewPanel/>}/>
          {/* <Route path="/project/:id" element={<ReadMore/>}/> */}
    </Routes>


      
    </div>

    </div>


  )
}

export default postLogin
