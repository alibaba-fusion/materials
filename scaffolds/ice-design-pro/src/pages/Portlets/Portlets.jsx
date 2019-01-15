

import React, { Component } from 'react';

import BasicDetailInfo from './components/BasicDetailInfo';
import DetailTable from './components/DetailTable';
import SimpleTable from './components/SimpleTable';

import './Portlets.scss';

export default class Portlets extends Component {
  static displayName = 'Portlets';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="portlets-page">
        <BasicDetailInfo />
        <DetailTable />
        <SimpleTable />
      </div>
    );
  }
}
