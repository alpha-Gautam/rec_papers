import './LoginSignup.css'; // Or SignUp.css if modularized
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import pass_icon from '../images/password.png';

const SignUp = () => {
  return ( 
    <div className='container m-5'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt='' />
          <input type='text' placeholder='Name' />
        </div>
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <img src={pass_icon} alt='' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className='submit-container'>
        <div className='submit'>Sign Up</div>
      </div>
    </div>
  );
};

export default SignUp;
