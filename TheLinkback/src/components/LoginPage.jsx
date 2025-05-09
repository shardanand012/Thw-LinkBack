// LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/loginPage.css"; // Import CSS for styling

const LoginPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/homepage"); // Redirect to the home page on Sign In
  };

  const handleSignUp = () => {
    navigate("/student"); // Redirect to the student page on Sign Up
  };

  const handleSignUpAlumni = () => {
    navigate("/alumni"); // Redirect to the alumni page on Sign Up
  };

  return (
    <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form>
          <h1>Sign Up</h1>

          
          
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
         <div className="user-type-options">
            <button type="button" onClick={handleSignUp}>
              Student Sign Up
            </button>
            <button type="button" onClick={handleSignUpAlumni}>
              Alumni Sign Up
            </button>
          </div>

        </form>
      </div>
      <div className="form-container sign-in-container">
        
        <form>
        
          <h1>Sign In</h1>
          <span>Use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>LinkBack</h1>
            <p>Please login with your personal info</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(false)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>LinkBack</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(true)}>
              Sign Up
              
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
