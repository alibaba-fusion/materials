import React, { Component } from 'react';

import BasicDetailInfo from './components/BasicDetailInfo';

import './Profile.scss';

export default class Detail extends Component {
  static displayName = 'Profile';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile-page">
        <BasicDetailInfo />
      </div>
    );
  }
}
