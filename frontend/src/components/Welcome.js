import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const logedUser = auth.user.isAdmin;

  const [toggleState, setToggleState] = useState(logedUser ? 2 : 1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="tab-view">
      <div className="tab-container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)}
          >
            Employees
          </button>
          <button
            className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(2)}
          >
            Departments
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? 'content  active-content' : 'content'
            }
          >
            <div>
              <div className="row">
                <button
                  type="button"
                  className="create-emp-btn"
                  onClick={() => {
                    alert('clicked');
                  }}
                >
                  <i className="fa fa-plus" />
                  Create Product
                </button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>product._id</td>
                    <td>product.name</td>
                    <td>product.price</td>
                    <td>product.category</td>

                    <td>
                      <button
                        onClick={() => {
                          alert('clicked');
                        }}
                        type="button"
                        className="table-acton-btn"
                      >
                        <i className="fa fa-trash-o" />
                      </button>
                      <button
                        onClick={() => {
                          alert('clicked');
                        }}
                        type="button"
                        className="table-acton-btn"
                      >
                        <i className="fa fa-pencil-square-o" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="row center pagination"></div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
            <div className="dep-contanier">
              <div className="dep-card">
                <h1>Marketing Management</h1>
                <p>Employees : 1</p>
              </div>
              <div className="dep-card">
                <h1>HR Management</h1>
                <p>Employees : 1</p>
              </div>
              <div className="dep-card">
                <h1>QA</h1>
                <p>Employees : 1</p>
              </div>
              <div className="dep-card">
                <h1>Software Engineering</h1>
                <p>Employees : 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
