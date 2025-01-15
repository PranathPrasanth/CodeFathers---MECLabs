import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <h1>AI Mentor Login</h1>
      <form action="#" method="post">
        <div className="login-input-group">
          <input type="email" id="login-email" name="email" required />
          <label htmlFor="login-email">Email</label>
        </div>
        <div className="login-input-group">
          <input type="password" id="login-password" name="password" required />
          <label htmlFor="login-password">Password</label>
        </div>
        <div className="login-button-group">
          <Link to="/twocomponent">
          <button type="submit" className="login-btn">Log In</button>
          </Link>
          <Link to="/signup">
            <button type="button" className="signup-btn">
              Sign Up
            </button>
          </Link>
        </div>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
