import React, { Component } from 'react';

import ProgressDataList from './components/ProgressDataList';
import FlowStatistics from './components/FlowStatistics';
import DataStatistics from './components/DataStatistics';
import PieLineChart from './components/PieLineChart';

export default class Analyze extends Component {
  static displayName = 'Analyze';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="analyze-page" >
      <ProgressDataList />
      <FlowStatistics />
      <DataStatistics />
      <PieLineChart />
    </div>;
  }  
}
