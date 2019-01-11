'use strict';

import React from 'react';
import ReactDom from 'react-dom';
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
