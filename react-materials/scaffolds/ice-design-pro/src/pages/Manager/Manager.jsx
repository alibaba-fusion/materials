import React, { Component } from 'react';

import BasicTab from './components/BasicTab';
import EntryCard from './components/EntryCard';
import CompositeFilter from './components/CompositeFilter';
import SimpleTable from './components/SimpleTable';

export default class Manager extends Component {
  static displayName = 'Manager';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="manager-page">
        <BasicTab />
        <EntryCard />
        <CompositeFilter />
        <SimpleTable />˝
      </div>
    );
  }
}
