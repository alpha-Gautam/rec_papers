import './LoginSignup.css'; // Or Login.css if modularized
import email_icon from '../images/email.png';
import pass_icon from '../images/password.png';

const Login = () => {
  return ( 
    <div className='container m-5 '>
      <div className='flex flex-col justify-center items-center'>
        <div className='text'>Log In</div>
        <div className='underline'></div>
        <div className='w-full mt-3 flex justify-center items-center gap-3  text-red-800'>
          <button className='p-2 bg-slate-700 text-white rounded-lg'>Student</button>
          <button className='p-2 bg-slate-700 text-white rounded-lg'>Mentor</button>
        </div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <img src={pass_icon} alt='' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className='forgot-password'>
        Forgot Password? <span>Click Here!</span>
      </div>
      <div className='submit-container'>
        <div className='submit'>Log In</div>
      </div>
    </div>
  );
};

export default Login;
