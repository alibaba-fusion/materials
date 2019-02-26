'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer-inner">
          <p>
            {' '}
            Powered By{' '}
            <a target="_blank" rel="noopener noreferrer" href="/">
              Fusion.Design
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
