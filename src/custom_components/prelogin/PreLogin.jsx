import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Footer from '@/src/custom_components/PreLogin/Footer';
import Navbar from '@/src/custom_components/PreLogin/Navbar';
import Home from '@/src/custom_components/preLogin/Home';
import Login from '@/src/custom_components/prelogin/Login';
import Signup from '@/src/custom_components/prelogin/Register';


const PreLogin = () => {
  return (
<div>
    <div className="w-[114px] shrink-0">
        <Navbar />
    </div>
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/view-papers" element={<h1>View Papers Page</h1>} />
          <Route path="/signin" element={<Login open={true}/>} />
          <Route path="/signup" element={<Signup open={true}/>}/>
        </Routes>
      
    </div>
    <div className="w-[114px] shrink-0">
        <Footer />
      </div>
    </div>
  )
}

export default PreLogin
