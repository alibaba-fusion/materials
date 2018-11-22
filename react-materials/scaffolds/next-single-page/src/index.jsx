'use strict';

import ReactDom from 'react-dom';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';

import { HashRouter as Router } from 'react-router-dom';
import RouteList from 'components/route-list';
import routes from './routerConfig';

import './index.scss';

ReactDom.render(
  <Router>
    <RouteList routes={routes} />
  </Router>,
  document.getElementById('container')
);
