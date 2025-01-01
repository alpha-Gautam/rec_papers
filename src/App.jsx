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
    <div className='w-full h-full bg-slate-800'>
    <Router>
      <div className='flex  flex-col  justify-between items-center ' >
        <Navbar />
        {/* <Register/> */}

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/view-papers" element={<h1>View Papers Page</h1>} />
          <Route path="/signin" element={<Login open={true}/>} />
          <Route path="/signup" element={<Signup open={true}/>}/>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/student-panel" element={<StudentPanel />} />
          <Route path="/mentor-panel" element={<MentorPanel />} />
          <Route path='/student-panel' element={<stuHome/>}/>
          <Route path='/student-panel' element={<stuNav/>}/>
          <Route path='/create-project' element={<CreateProject/>}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
    </div>
  );
};

export default App;
