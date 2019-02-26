'use strict';

import React from 'react';
import Header from 'components/header/index';

import './index.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="header-layout">
        <Header {...this.props} />
        <div className="body">
          <div className="main">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
