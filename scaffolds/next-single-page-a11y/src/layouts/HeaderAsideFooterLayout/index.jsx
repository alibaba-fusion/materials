'use strict';

import React from 'react';
import Header from 'components/header/index';
import Footer from 'components/footer/index';
import SideMenu from 'components/side-menu/index';
import SkipTo from 'components/skip-to/index';

import { asideMenuConfig } from '../../menuConfig';

import './index.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="header-aside-footer-layout">
        <SkipTo dist="main-content" />
        <Header {...this.props} />
        <div className="body">
          <SideMenu dataSource={asideMenuConfig} className="aside" />
          <div id="main-content" className="main">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
