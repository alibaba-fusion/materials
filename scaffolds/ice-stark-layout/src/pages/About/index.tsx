import React from 'react';
import { Link } from 'ice';

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/seller/list">sellerlist</Link></div>
    </div>
  );
};

export default About;
