import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

import { LoopCircleLoading } from 'react-loadingg';

const Welcome = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const logedUser = auth.user.isAdmin;

  const [toggleState, setToggleState] = useState(logedUser ? 2 : 1);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState(null);
  const [department, setDepartment] = useState(0);

  const dispatch = useDispatch();
  const empDelete = useSelector((state) => state.delete_emp);
  const { get_emp } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/emp/get');
        dispatch({
          type: 'GET_EMP_LIST_SUCCESS',
          payload: res.data,
        });
      } catch (err) {
        if (err.response.status === 400) {
          toast.error(err.response.data.msg);
        }
      }
    }
    fetchData();
    dispatch({ type: 'EMP_DELETE_RESET' });
  }, [dispatch, modalVisible, empDelete.success]);

  const deleteHandler = (employeeId) => {
    async function employeeDeleteAction() {
      dispatch({ type: 'EMP_DELETE_REQUEST' });
      try {
        const { data } = axios.delete(`/emp/${employeeId}`);
        dispatch({ type: 'EMP_DELETE_SUCCESS' });
        toast.success('Employee delete success');
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: 'EMP_DELETE_FAIL', payload: message });
      }
    }
    if (window.confirm('Are you sure to delete this employee?')) {
      employeeDeleteAction();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const employee = {
        department,
        name,
        position,
        salary,
      };

      const res = await axios.post('/emp/register', employee);
      if (res.data) {
        setName('');
        setPosition('');
        setSalary('');
        setDepartment('');

        return toast.success('Employee register success');
      }
    } catch (err) {
      if (err.response.status === 400) {
        toast.error(err.response.data.msg);
      }
    }
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName('');
    setPosition('');
    setSalary('');
    setDepartment('');
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
              {get_emp.loading === true ? (
                <LoopCircleLoading />
              ) : (
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
                    {get_emp.employees.map((get_emp) => {
                      return (
                        <tr key={get_emp._id}>
                          <td>{get_emp.name}</td>
                          <td>{get_emp.position}</td>
                          <td>{get_emp.salary}</td>
                          <td>
                            {get_emp.department === 'MA'
                              ? 'Marketing'
                              : get_emp.department}
                          </td>
                          <td>
                            <button
                              onClick={() => deleteHandler(get_emp._id)}
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
                      );
                    })}
                  </tbody>
                </table>
              )}
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
                    <form onSubmit={handleSubmit}>
                      <div className="row-modal">
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder="Full Name *"
                          required
                        />
                        <input
                          value={salary}
                          onChange={(e) => setSalary(e.target.value)}
                          type="number"
                          placeholder={'LKR Salary *'}
                          required
                        />
                      </div>
                      <div className="row-modal">
                        <input
                          onChange={(e) => setPosition(e.target.value)}
                          value={position}
                          type="text"
                          placeholder="Position *"
                          required
                        />
                        <select
                          placeholder="Department *"
                          id="dropdown"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                        >
                          <option value="N/A">Department *</option>
                          <option value="HR">HR</option>
                          <option value="QA">QA</option>
                          <option value="SE">SE</option>
                          <option value="MA"> Marketing</option>
                        </select>
                      </div>
                      <div className="row-modal-btn">
                        <button type="submit" className="green">
                          Create
                        </button>
                        <button
                          type="reset"
                          onClick={handleReset}
                          className="red"
                        >
                          Reset
                        </button>
                        <button
                          className="yellow"
                          onClick={() => setModalVisible(false)}
                        >
                          Back
                        </button>
                      </div>
                    </form>
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
