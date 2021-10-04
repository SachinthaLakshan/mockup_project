import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <div className="row top">
      <div className="col-2">
        <div className="btn-wrap">
          <div className="left">
            <button
              onClick={() => {
                history.push('/login');
              }}
            >
              <i className="bx bx-user"></i>
              Log in
            </button>
          </div>
          <div className="right">
            <button
              onClick={() => {
                history.push('/register');
              }}
            >
              <i className="fa fa-user-plus"></i>
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="col-1">
        <img src="svg2.svg" alt="" />
      </div>
    </div>
  );
};

export default Home;
