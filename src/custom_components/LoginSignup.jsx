import './LoginSignup.css';
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import pass_icon from '../images/password.png';
import { useState } from 'react';

const LoginSignup = () => {
  const [action, setAction] = useState("Log In");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <button onClick={toggleModal} className="open-modal-button">
        Open Login/Signup
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="container">
              <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
              </div>
              <div className="inputs">
                {action === "Log In" ? null : (
                  <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" />
                  </div>
                )}

                <div className="input">
                  <img src={email_icon} alt="" />
                  <input type="email" placeholder="Email" />
                </div>

                <div className="input">
                  <img src={pass_icon} alt="" />
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              {action === "Sign Up" ? null : (
                <div className="forgot-password">
                  Forgot Password? <span>Click Here!</span>
                </div>
              )}
              <div className="submit-container">
                <div
                  className={action === "Log In" ? "submit gray" : "submit"}
                  onClick={() => setAction("Sign Up")}
                >
                  Sign Up
                </div>
                <div
                  className={action === "Sign Up" ? "submit gray" : "submit"}
                  onClick={() => setAction("Log In")}
                >
                  Log In
                </div>
              </div>
              <button className="close-button" onClick={toggleModal}>
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignup;
