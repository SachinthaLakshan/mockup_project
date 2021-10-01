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
            <h2>Content 1</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo
              nihil vel voluptatum?
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
