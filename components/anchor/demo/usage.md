---
title: basic
order: 1
importStyle: true
---

基础用法。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Anchor, {Link} from '@alifd/biz-anchor';

class App extends Component {
  render() {
    return (
      <div style={{position: 'relative', paddingRight: 200}}>
      <div id="content">
        <h2 id="components-guide">Guide</h2>
        <h2 id="components-example">Example</h2>
        <p>Fusion 是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。</p>
        <h2 id="API">API</h2>
          <h3 id="api-type">usage of type</h3>
          <p>Fusion Design 产品创建于2015年底，阿里巴巴集团中台战略背景下，由国际UED（现国际用户体验事业部）与B2B技术部成立中台DPL项目。从国际UED，天猫，商家等各类业务形态中抽象解构，通过一套设计系统协议提升设计与开发效率，以统一的物料分发工具提升团队协同能力，借助灵活的在线样式配置支撑业务的设计创新。</p>
          <h3 id="api-size">usage of size</h3>
          <li>不同品牌下的中台系统构建问题</li>
          <li>设计规范一致性问题</li>
      </div>
      <div style={{right: 0, top: 0, position: 'absolute'}}>
        <Anchor offsetTop={140} style={{width: 200, float: 'right'}} >
          <Link href="#components-guide" title="Guide" />
          <Link href="#components-example" title="Example" />
          <Link href="#API" title="API">
            <Link href="#api-type" title="usage of type" />
            <Link href="#api-size" title="usage of size" />
          </Link>
        </Anchor>
      </div>
    </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
```
