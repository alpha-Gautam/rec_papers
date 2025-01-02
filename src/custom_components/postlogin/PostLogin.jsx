import React from 'react'
import {Routes, Route} from 'react-router-dom';
import StudentPanel from './StudentPanel';
import MentorPanel from './MentorPanel';
import CreateProject from './CreateProject';

const postLogin = () => {
  return (
<div>

    <div>
        
    <Routes>
          <Route path="/" element={<StudentPanel />} />
          <Route path="/mentor" element={<MentorPanel />} />
          <Route path='/create_Project' element={<CreateProject/>}></Route>
    </Routes>
      
    </div>

    </div>


  )
}

export default postLogin
