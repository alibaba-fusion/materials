'use strict';

import React from 'react';
import Header from 'components/header/index';
import SideMenu from 'components/side-menu/index';

import { asideMenuConfig } from '../../menuConfig';

import './index.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="header-aside-layout">
        <Header {...this.props} />
        <div className="body">
          <SideMenu dataSource={asideMenuConfig} className="aside" />
          <div className="main">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
