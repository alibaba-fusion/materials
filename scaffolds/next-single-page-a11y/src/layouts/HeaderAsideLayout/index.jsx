'use strict';

import React from 'react';
import Header from 'components/header/index';
import SideMenu from 'components/side-menu/index';
import SkipTo from 'components/skip-to/index';

import { asideMenuConfig } from '../../menuConfig';

import './index.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-aside-layout">
        <SkipTo />
        <Header {...this.props} />
        <div className="body">
          <SideMenu dataSource={asideMenuConfig} className="aside" />
          <div id="main" className="main" role="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
