import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Register';


const PreLogin = () => {
  return (
<div className='w-[100%] h-[100%] flex flex-col justify-between bg-black '>
    <div className="w-[100%] shrink-0">
        <Navbar />
    </div>
    <div className='relative'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login open={true}/>} />
          <Route path="/signup" element={<Signup open={true}/>}/>
        </Routes>
      
    </div>
    <div className="w-[100%] relative pb-0 bg-slate-500">
        <Footer />
      </div>
    </div>
  )
}

export default PreLogin
