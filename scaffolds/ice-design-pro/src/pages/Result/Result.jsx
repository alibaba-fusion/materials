

import React, { Component } from 'react';

import SimpleStep from './components/SimpleStep';
import SuccessDetail from './components/SuccessDetail';
import FailureDetail from './components/FailureDetail';

import './Result.scss';

export default class Result extends Component {
  static displayName = 'Result';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result-page">
        <SimpleStep />
        <SuccessDetail />
        <FailureDetail />
      </div>
    );
  }
}
