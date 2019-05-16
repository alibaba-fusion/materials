import React, { Component } from 'react';
import FailDetail from './components/Fail';

import './Fail.scss';

export default class Fail extends Component {
  static displayName = 'Fail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result-page">
        <FailDetail />
      </div>
    );
  }
}
