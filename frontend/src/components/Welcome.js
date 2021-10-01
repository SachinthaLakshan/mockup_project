import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const logedUser = auth.user.isAdmin;

  const [toggleState, setToggleState] = useState(logedUser ? 2 : 1);
  const [modalVisible, setModalVisible] = useState(false);

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
              <div className="row2">
                <button
                  onClick={() => setModalVisible(true)}
                  className="create-emp-btn"
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
                          alert('sad');
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
              <div className="row2 center pagination"></div>
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
        <div>
          {modalVisible ? (
            <div className="modal">
              <div id="popup1" className="overlay">
                <div className="popup">
                  <h2>Create Employee</h2>
                  <hr />
                  <div className="modal-form">
                    <form>
                      <div className="row-modal">
                        <input
                          //value={name}
                          // onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder="Full Name *"
                          required
                        />
                        <input
                          //value={name}
                          // onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder={'LKR Salary *'}
                          required
                        />
                      </div>
                      <div className="row-modal">
                        <input
                          // onChange={(e) => setEmail(e.target.value)}
                          // value={email}
                          type="text"
                          placeholder="Position *"
                          required
                        />
                        <select
                          placeholder="Department *"
                          id="dropdown"
                          //value={isAdmin}
                          //onChange={(e) => setIsAdmin(e.target.value)}
                        >
                          <option value="N/A">Department *</option>
                          <option value="HR">HR</option>
                          <option value="QA">QA</option>
                          <option value="SE">SE</option>
                          <option value="MA"> Marketing</option>
                        </select>
                      </div>
                    </form>
                    <div className="row-modal-btn">
                      <button className="green">Create</button>
                      <button className="red">Reset</button>
                      <button
                        className="yellow"
                        onClick={() => setModalVisible(false)}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
