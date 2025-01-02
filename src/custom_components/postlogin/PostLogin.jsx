import React from 'react'
import {Routes, Route} from 'react-router-dom';
import StudentPanel from './custom_components/postlogin/StudentPanel';
import MentorPanel from './custom_components/postlogin/MentorPanel';
import CreateProject from './custom_components/postlogin/CreateProject';

const postLogin = () => {
  return (
    <div>
        

    <Routes>
          <Route path="/student-panel" element={<StudentPanel />} />
          <Route path="/mentor-panel" element={<MentorPanel />} />
          <Route path='/student-home' element={<stuHome/>}/>
          <Route path='/student-nav' element={<stuNav/>}/>
          <Route path='/create-project' element={<CreateProject/>}></Route>
    </Routes>
      
    </div>
  )
}

export default postLogin
