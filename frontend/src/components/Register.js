import React from 'react';

const Register = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Register</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fa fa-users"></i>
              <select id="dropdown">
                <option value="N/A">User type</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="row">
              <i className="bx bx-user"></i>
              <input type="text" placeholder="User name *" required />
            </div>
            <div className="row">
              <i className="fa fa-envelope"></i>
              <input type="text" placeholder="Email *" required />
            </div>
            <div className="row">
              <i className="bx bx-lock"></i>
              <input type="password" placeholder="Password *" required />
            </div>
            <div className="row">
              <i className="fa fa-check-square-o"></i>
              <input
                type="password"
                placeholder="Confirm password *"
                required
              />
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Alredy have an account?? <a href="/login">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="form-box">
    //   <form className="input-group-register">
    //     <div className="text">
    //       <h1>Register</h1>
    //     </div>
    //     <div>
    //       <select id="dropdown">
    //         <option value="N/A">Selct role</option>
    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //       </select>
    //     </div>
    //     <div>
    //       <input
    //         type="userName"
    //         id="userName"
    //         placeholder="Enter User Name *"
    //         required
    //         //onChange={(e) => setEmail(e.target.value)}
    //       ></input>
    //     </div>
    //     <div>
    //       <input
    //         type="email"
    //         id="email"
    //         placeholder="Enter email *"
    //         required
    //         //onChange={(e) => setEmail(e.target.value)}
    //       ></input>
    //     </div>
    //     <div>
    //       <input
    //         type="password"
    //         id="password"
    //         placeholder="Enter password *"
    //         required
    //         //onChange={(e) => setPassword(e.target.value)}
    //       ></input>
    //     </div>
    //     <div>
    //       <input
    //         type="password"
    //         id="confirmPassword"
    //         placeholder="Enter Confirm password *"
    //         required
    //         // onChange={(e) => setConfirmPassword(e.target.value)}
    //       ></input>
    //     </div>
    //     <div className="btnWraper">
    //       <button className="primary" type="submit">
    //         Register
    //       </button>
    //     </div>
    //     <div className="asking">
    //       <a href="/login"> </a>
    //     </div>
    //   </form>
    // </div>
  );
};

export default Register;
