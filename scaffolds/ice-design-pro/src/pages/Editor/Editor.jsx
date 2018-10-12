import React, { Component } from 'react';

import Crumb from '../../components/Crumb';
import RichEditor from './components/RichEditor';

export default class Editor extends Component {
  static displayName = 'Editor';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="editor-page" >
      <Crumb match={this.props.match} />
      <RichEditor />
    </div>;
  }
}
