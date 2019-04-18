'use strict';

import React, { Component } from 'react';
import { KEYCODE } from '../../utils';

import './index.scss';

class SkipTo extends Component {
  render() {
    const { dist } = this.props;
    return (
      <button
        tabIndex="0"
        className="skip-to-main"
        onKeyDown={e => {
          if ([KEYCODE.ENTER, KEYCODE.SPACE].indexOf(e.keyCode) > -1) {
            const item = document.getElementById(dist || 'main');
            const savedTabIndex = item.getAttribute('tabindex');
            item.setAttribute('tabindex', '-1');
            item.focus();
            item.setAttribute('tabindex', savedTabIndex);
          }
        }}
      >
        skip to main content
      </button>
    );
  }
}

export default SkipTo;
