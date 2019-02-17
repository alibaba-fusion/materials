'use strict';

import React from 'react';
import FormCard from './components/FormCard';
import './index.scss';

class Page1 extends React.Component {
  render() {
    return (
      <div className="redux-demo-home">
        <FormCard />
      </div>
    );
  }
}


export default Page1;
