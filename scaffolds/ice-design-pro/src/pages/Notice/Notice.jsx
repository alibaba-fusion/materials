import React, { Component } from 'react';

import TagMessageList from './components/TagMessageList';

export default class Analyze extends Component {
  static displayName = 'Analyze';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="analyze-page" >
      <TagMessageList />
    </div>;
  }  
}
