import React from 'react'
import {Routes, Route} from 'react-router-dom';
import StudentPanel from './StudentPanel';
import MentorPanel from './MentorPanel';
import CreateProject from './CreateProject';
import Sidebar from'./sidebar2'

const postLogin = () => {
  return (
<div className='flex'>

            <div className=' h-full'>
                <Sidebar/>
            </div>
    <div>
        
    <Routes>
          <Route path="/" element={<StudentPanel />} />
          <Route path="/dashboard/mentor" element={<MentorPanel />} />
          <Route path='/dashboard/create-project' element={<CreateProject/>}/>  
    </Routes>


      
    </div>

    </div>


  )
}

export default postLogin
