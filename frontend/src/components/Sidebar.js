import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

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
        <li>
          <i
            className="bx bx-search"
            onClick={() => {
              setOpen(!open);
            }}
          ></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to="/">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
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
