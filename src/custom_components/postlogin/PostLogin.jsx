import React from 'react'
import {Routes, Route} from 'react-router-dom';
import StudentPanel from './StudentPanel';
import MentorPanel from './MentorPanel';
import CreateProject from './CreateProject';
import ReadMore from './ReadMore';
import Sidebar from'./sidebar2'

const postLogin = () => {
  return (
<div className='flex'>

            <div className=' h-full'>
                <Sidebar/>
            </div>
    <div className='w-full h-full'>
        
    <Routes>
          <Route path="/" element={<StudentPanel />} />
          <Route path="/dashboard/mentor" element={<MentorPanel />} />
          <Route path='/create-project' element={<CreateProject/>}/>  
          <Route path="/project/:id" element={<ReadMore/>}/>
    </Routes>


      
    </div>

    </div>


  )
}

export default postLogin
