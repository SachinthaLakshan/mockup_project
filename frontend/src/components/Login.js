import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        email,
        password,
      };

      const res = await axios.post('/login', user);
      if (res.data) {
        window.localStorage.setItem('auth', JSON.stringify(res.data));
        dispatch({
          type: 'LOGIN',
          payload: res.data,
        });
        console.log('login user', res.data);
        history.push('/welcome');
        return toast.success('Login success');
      }
    } catch (err) {
      if (err.response.status === 400) {
        toast.error(err.response.data.msg);
      }
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Login</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <i className="bx bx-user"></i>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div className="row">
              <i className="bx bx-lock"></i>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
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
