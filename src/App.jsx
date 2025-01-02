import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './custom_components/Navbar';
import Home from './custom_components/Home';
import Login from './custom_components/prelogin/Login';
import Signup from './custom_components/prelogin/Register';
import StudentPanel from './custom_components/postlogin/StudentPanel';
import MentorPanel from './custom_components/postlogin/MentorPanel';
import Footer from './custom_components/Footer';
import CreateProject from './custom_components/postlogin/CreateProject';
// import Profile from './Profile';

// Component to protect routes

const App = () => {
  return ( 
    <div className='w-full h-full bg-black'>
    
    <Router>
      <div className='h-[inherit] flex flex-col w-[inherit] bg-black' >
        <div className='w-full '><Navbar /></div>
        {/* <Register/> */}
        <div className='h-[inherit]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/view-papers" element={<h1>View Papers Page</h1>} />
          <Route path="/signin" element={<Login open={true}/>} />
          <Route path="/signup" element={<Signup open={true}/>}/>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/student-panel" element={<StudentPanel />} />
          <Route path="/mentor-panel" element={<MentorPanel />} />
          <Route path='/student-home' element={<stuHome/>}/>
          <Route path='/student-nav' element={<stuNav/>}/>
          <Route path='/create-project' element={<CreateProject/>}></Route>
        </Routes>
        </div>
        <div className='w-full '><Footer /></div>
      </div>
    </Router>
    </div>
  );
};

export default App;
