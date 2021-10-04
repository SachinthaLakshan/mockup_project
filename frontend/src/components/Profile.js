import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { get_users } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [joinedDate, setJoinedDate] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/user/get');
        dispatch({
          type: 'GET_USER_LIST_SUCCESS',
          payload: res.data,
        });
      } catch (err) {
        if (err.response.status === 400) {
          toast.error(err.response.data.msg);
        }
      }
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (get_users.loading === false) {
      const currentUser = get_users.users
        .filter((person) => person._id === auth.user.id)
        .map((user) => {
          return user;
        });
      setUserName(currentUser[0].userName);
      setName(currentUser[0].name);
      setEmail(currentUser[0].email);
      setPhoneNumber(currentUser[0].phoneNumber);
      setAddress(currentUser[0].address);
      let date = new Date(currentUser[0].joinedTime);
      setJoinedDate(
        `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      );
    }
  }, [get_users.loading]);

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    window.localStorage.removeItem('auth');
    history.push('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        name,
        email,
        userName,
        phoneNumber,
        address,
      };

      const res = await axios.put(`/user/update/${auth.user.id}`, user);
      if (res.data && auth.user.email && email) {
        if (auth.user.email !== email || auth.user === null) {
          logout();
        }
        return toast.success('User update success');
      }
    } catch (err) {
      if (err.response.status === 400) {
        toast.error(err.response.data.msg);
      }
    }
  };

  return (
    <div className="row top">
      <div className="col-2">
        <div className="profile">
          <div className="form-card">
            <div className="avatar">
              <img src="/profile.jpg" alt="profile" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row-modal2">
                <label>Full Name</label>
                <label>Email</label>
              </div>
              <div className="row-modal">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder={'Email'}
                  required
                />
              </div>
              <div className="row-modal2">
                <label>User Name</label>
                <label>Joined Date</label>
              </div>
              <div className="row-modal">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  type="text"
                  placeholder="User Name"
                  required
                />
                <input
                  value={joinedDate}
                  type="text"
                  placeholder="Joined Date"
                  disabled
                />
              </div>
              <div className="row-modal2">
                <label>Phone Number</label>
                <label>Address</label>
              </div>
              <div className="row-modal">
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="text"
                  placeholder="Phone Number"
                  required
                />
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  type="text"
                  placeholder="Address"
                  required
                />
              </div>
              <div className="row-modal-btn">
                <button type="submit" className="green">
                  Update
                </button>

                <button
                  className="yellow"
                  onClick={() => history.push('/welcome')}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-1">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Peple you may know</th>
            </tr>
          </thead>
          <tbody>
            {get_users.users.map((get_emp) => {
              return (
                <tr key={get_emp._id}>
                  <td>
                    <div className="char-avater">
                      {get_emp.name.charAt(0).toUpperCase()}
                    </div>
                  </td>
                  <td>{get_emp.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
