'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

class RouteList extends React.Component {
  static propTypes = {
    /**
     * route 列表
     */
    routes: PropTypes.array,
  };

  state = {
    rtl: false,
    locale: 'en-us',
  }
  changeDir = (checked) => {
    this.setState({
      rtl: checked
    })
  }

  changeLang = (lang) => {
    this.setState({
      locale: lang
    })
  }
  render() {
    const { rtl, locale } = this.state;
    const { routes } = this.props;
    return (
      <Switch>
          {routes.map(route => (
            <Route
              exact={route.exact}
              key={route.path}
              path={route.path}
              render={(props) => {
                const newProps = Object.assign({}, props, {
                  locale,
                  rtl,
                  changeLang: this.changeLang,
                  changeDir: this.changeDir
                })

                const component = React.createElement(route.component, newProps);

                if (route.layout) {
                  return React.createElement(route.layout, newProps, component);
                }
                return component;
              }}
            />
          ))}
      </Switch>
    );
  }
}

export default RouteList;
