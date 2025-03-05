import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import PreLogin from './custom_components/prelogin/PreLogin'
import PostLogin from './custom_components/postlogin/PostLogin'
// import Profile from './Profile';

// Component to protect routes

const App = () => {
  return ( 
    <div className=''>
    
    <Router>
      <div className='h-[inherit] flex flex-col w-[inherit] bg-black'>
      
        {/* <Register/> */}
        <div className='h-[inherit]'>
        <Routes>
          
       
          <Route path="/*" element={<PreLogin />}/>

          
          <Route path="/dashboard/*" element={<PostLogin />} />
         
          
        </Routes>
        </div>
       
      </div>
    </Router>
    </div>
  );
};

export default App;
