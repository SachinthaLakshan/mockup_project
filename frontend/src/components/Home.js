import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  console.log(auth);
  return (
    <div>
      <h1>Home {JSON.stringify(auth)}</h1>
    </div>
  );
};

export default Home;
