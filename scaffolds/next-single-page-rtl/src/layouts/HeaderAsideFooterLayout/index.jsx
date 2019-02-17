'use strict';

import React from 'react';
import Header from 'components/header/index';
import Footer from 'components/footer/index';
import SideMenu from 'components/side-menu/index';

import { ConfigProvider } from '@alifd/next';
import { asideMenuConfig } from '../../menuConfig';

import './index.scss';

class Layout extends React.Component {
  render() {
    const { rtl, locale } = this.props;
    const localeObj = require(`@alifd/next/lib/locale/${locale}`)
    return (
      <ConfigProvider rtl={rtl} locale={localeObj}>
        <div className="header-aside-footer-layout" dir={ rtl ? 'rtl' : 'ltr' }>
          <Header {...this.props} />
          <div className="body">
            <SideMenu dataSource={asideMenuConfig} className="aside" />
            <div className="main">
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </ConfigProvider>
    );
  }
}

export default Layout;
