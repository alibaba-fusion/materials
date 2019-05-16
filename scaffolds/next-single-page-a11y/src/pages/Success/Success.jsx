import React, { Component } from 'react';
import SuccessDetail from './components/SuccessDetail';

import './Success.scss';

export default class Success extends Component {
  static displayName = 'Success';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result-page">
        <SuccessDetail />
      </div>
    );
  }
}
