'use strict';

import React from 'react';
// import PropTypes from 'prop-types';
import Header from 'components/header/index';
import SideMenu from 'components/side-menu/index';
// import classNames from 'classnames';
import { asideMenuConfig } from '../../menuConfig';

import './index.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="header-aside-footer-layout">
        <Header />
        <div className="body">
          <SideMenu dataSource={asideMenuConfig} className="aside" />
          <div className="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
