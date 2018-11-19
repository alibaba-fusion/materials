import React, { Component } from 'react';

import TabArticle from './components/TabArticle';

export default class Analyze extends Component {
  static displayName = 'Analyze';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="analyze-page" >
      <TabArticle />
    </div>;
  }  
}
