import './LoginSignup.css'; // Or Login.css if modularized
import email_icon from '../images/email.png';
import pass_icon from '../images/password.png';

const Login = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Log In</div>
        <div className='underline'></div>
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
