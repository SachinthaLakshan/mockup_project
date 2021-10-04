import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const user = {
          name,
          email,
          isAdmin,
          password,
        };

        const res = await axios.post('/register', user);
        if (res.data) {
          setName('');
          setIsAdmin('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          return toast.success('Register success');
        }
      } catch (err) {
        if (err.response.status === 400) {
          toast.error(err.response.data.msg);
        }
      }
    } else {
      toast.error('Check confirm password');
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Register</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <i className="fa fa-users"></i>
              <select
                id="dropdown"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
              >
                <option value="N/A">User type</option>
                <option value={true}>Admin</option>
                <option value={false}>User</option>
              </select>
            </div>
            <div className="row">
              <i className="bx bx-user"></i>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="User name *"
                required
              />
            </div>
            <div className="row">
              <i className="fa fa-envelope"></i>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email *"
                required
              />
            </div>
            <div className="row">
              <i className="bx bx-lock"></i>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password *"
                required
              />
            </div>
            <div className="row">
              <i className="fa fa-check-square-o"></i>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                placeholder="Confirm password *"
                required
              />
            </div>
            <div className="row button">
              <input type="submit" value="Register" />
            </div>
            <div className="signup-link">
              Alredy have an account?? <a href="/login">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
