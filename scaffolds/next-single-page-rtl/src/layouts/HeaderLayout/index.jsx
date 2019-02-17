'use strict';

import React from 'react';
import Header from 'components/header/index';

import { ConfigProvider } from '@alifd/next';

import './index.scss';

class Layout extends React.Component {
  render() {
    const { rtl, locale } = this.props;
    const localeObj = require(`@alifd/next/lib/locale/${locale}`)

    return (
      <ConfigProvider rtl={rtl} locale={localeObj}>
        <div className="header-layout" dir={ rtl ? 'rtl' : 'ltr' }>
          <Header {...this.props} />
          <div className="body">
            <div className="main">
              {this.props.children}
            </div>
          </div>
        </div>
      </ConfigProvider>
    );
  }
}

export default Layout;
