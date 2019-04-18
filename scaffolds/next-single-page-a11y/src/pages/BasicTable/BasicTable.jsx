import React, { Component } from 'react';
import TabTable from './components/TabTable';

import './BasicTable.scss';

export default class BasicTable extends Component {
  static displayName = 'BasicTable';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="basic-table-page">
        <h2 className="form-title h-title" tabIndex="0">
          基本表格
        </h2>

        <TabTable />
      </div>
    );
  }
}
