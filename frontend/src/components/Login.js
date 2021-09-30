import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Login</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="bx bx-user"></i>
              <input type="text" placeholder="Email" required />
            </div>
            <div className="row">
              <i className="bx bx-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="/register">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
