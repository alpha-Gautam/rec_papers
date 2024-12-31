import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './custom_components/Navbar';
import Home from './custom_components/Home';
import Login from './custom_components/Login';
import Signup from './custom_components/Signup';
import StudentPanel from './custom_components/StudentPanel';
import MentorPanel from './custom_components/MentorPanel';
import Footer from './custom_components/Footer';
// import Profile from './Profile';

// Component to protect routes

const App = () => {
  return (
    <div className='w-full h-full bg-slate-800'>
    <Router>
      <div className='flex  flex-col  justify-between items-center ' >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/view-papers" element={<h1>View Papers Page</h1>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/student-panel" element={<StudentPanel />} />
          <Route path="/mentor-panel" element={<MentorPanel />} />
          <Route path='/student-panel' element={<stuHome/>}/>
          <Route path='/student-panel' element={<stuNav/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
    </div>
  );
};

export default App;
