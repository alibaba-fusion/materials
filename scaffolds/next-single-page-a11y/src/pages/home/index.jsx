'use strict';

import React from 'react';
import Schedule from './components/Schedule';
import './index.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="index-page">
        <Schedule />
      </div>
    );
  }
}

export default Home;
