'use strict';

import React from 'react';
import Header from 'components/header/index';
import SkipTo from 'components/skip-to/index';

import './index.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="header-layout">
        <SkipTo />
        <Header {...this.props} />
        <div className="body">
          <div id="main" className="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
