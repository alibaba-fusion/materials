import React from 'react';
import { Link } from 'ice';

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/seller">seller</Link></div>
    </div>
  );
};

export default Home;
