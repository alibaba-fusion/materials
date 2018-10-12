import React, { Component } from 'react';

import Crumb from '../../components/Crumb';
import ColumnForm from './components/ColumnForm';

export default class Column extends Component {
  static displayName = 'Column';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="column-page" >
      <Crumb match={this.props.match} />
      <ColumnForm />
    </div>;
  }
}
