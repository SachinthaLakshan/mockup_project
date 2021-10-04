import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    window.localStorage.removeItem('auth');
    history.push('/login');
  };

  return (
    <div className={open ? 'sidebar open' : 'sidebar'}>
      <div className="logo-details">
        {open ? (
          <i className="fa fa-american-sign-language-interpreting"></i>
        ) : (
          <></>
        )}
        <div className="logo_name"> ABC</div>
        <i
          className={`bx ${!open ? 'bx-menu' : 'bx-menu-alt-right'}`}
          id="btn"
          onClick={() => {
            setOpen(!open);
          }}
        ></i>
      </div>
      <ul className="nav-list">
        {auth !== null ? (
          <>
            <li>
              <Link to="/">
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </Link>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <Link to="/welcome">
                <i className="fa fa-handshake-o"></i>
                <span className="links_name">Welcome</span>
              </Link>
              <span className="tooltip">Welcome</span>
            </li>
            <li>
              <Link to="/profile">
                <i className="fa fa fa-user"></i>
                <span className="links_name">Profile</span>
              </Link>
              <span className="tooltip">Profile</span>
            </li>
            <li>
              <Link to="/login" onClick={logout}>
                <i className="fa fa fa-sign-out"></i>
                <span className="links_name">Log out</span>
              </Link>
              <span className="tooltip">Log out</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <i className="fa fa-sign-in"></i>
                <span className="links_name">Login</span>
              </Link>
              <span className="tooltip">Login</span>
            </li>
            <li>
              <Link to="/register">
                <i className="fa fa-user-plus"></i>
                <span className="links_name">Register</span>
              </Link>
              <span className="tooltip">Register</span>
            </li>
          </>
        )}

        <li className="profile">
          <div className="profile-details">
            <img src="logo192.png" alt="profileImg" />
            <div className="name_job">
              <div className="name">ABC</div>
              <div className="job">company</div>
            </div>
          </div>
          <i
            className={`bx bx-log-${open ? 'out' : 'in'}`}
            id="log_out"
            onClick={() => {
              setOpen(false);
            }}
          ></i>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
