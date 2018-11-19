import React, { Component } from 'react';

import SimpleFluencyForm from './components/SimpleFluencyForm';

import Crumb from '../../components/Crumb';

export default class ServerError extends Component {
  static displayName = 'ServerError';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="step-form-page">
        <Crumb match={this.props.match} />

        <SimpleFluencyForm />
      </div>
    );
  }
}
