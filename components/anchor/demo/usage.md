---
title: basic
order: 1
importStyle: true
---

基础用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Anchor, {Link} from '@alifd/biz-anchor';

class App extends Component {
  render() {
    return (
      <div style={{height: 120}}>
        <Anchor offsetTop={140} style={{width: 200, float: 'right'}} >
          <Link href="#components-guide" title="Guide" />
          <Link href="#components-example" title="Example" />
          <Link href="#API" title="API">
            <Link href="#api-type" title="usage of type" />
            <Link href="#api-size" title="usage of size" />
          </Link>
        </Anchor>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
