import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import StudentPanel from './components/StudentPanel';
import MentorPanel from './components/MentorPanel';
import Footer from './components/Footer';
// import Profile from './Profile';

// Component to protect routes

const App = () => {
  return (
    <Router>
      <div>
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
  );
};

export default App;
