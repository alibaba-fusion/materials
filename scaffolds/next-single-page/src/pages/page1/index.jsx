'use strict';

import React from 'react';
import './index.scss';

class Page1 extends React.Component {
  render() {
    return (
      <div className="redux-demo-home">
        <div className="words">
          <span>当前页面为 只包含 React-Router 的案例页面， 这里是Page1路由页 </span>
        </div>
      </div>
    );
  }
}


export default Page1;
