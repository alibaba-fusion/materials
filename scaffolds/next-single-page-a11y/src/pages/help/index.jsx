'use strict';

import React from 'react';
import HelpCenter from './components/HelpCenter';
import './index.scss';

class Help extends React.Component {
  render() {
    return (
      <div className="help-page">
        <HelpCenter />
      </div>
    );
  }
}

export default Help;
