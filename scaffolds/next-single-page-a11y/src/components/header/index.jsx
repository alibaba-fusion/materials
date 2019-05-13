'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Balloon, Menu, Icon } from '@alifd/next';

import { headerMenuConfig } from '../../menuConfig';

import './index.scss';
const { SubNav, Item: NavItem } = Nav;

@withRouter
class Header extends Component {
  static propTypes = {
    dataSource: PropTypes.object,
    fullHeader: PropTypes.bool,
    defaultSelectedKeys: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  };

  static defaultProps = {
    fullHeader: true,
  };

  constructor(props) {
    super(props);
  }

  header() {
    return (
      <div className="header-logo" role="img" aria-label="logo">
        <img
          src="//img.alicdn.com/tfs/TB1pKookmzqK1RjSZFHXXb3CpXa-240-70.png"
          alt="Alibaba Fusion logo"
        />
      </div>
    );
  }
  footer() {
    const userinfo = {
      avatarUrl: '//img.alicdn.com/tps/TB1kssgNXXXXXc_aXXXXXXXXXXX-56-56.png',
      displayName: '未登录',
    };

    const trigger = (
      <a href="/my" style={{ textDecoration: 'none' }}>
        <img src={userinfo.avatarUrl} className="avatar" alt="头像" />
        <span className="name">{userinfo.displayName}</span>
      </a>
    );

    return (
      <div>
        <Balloon
          autoFocus
          trigger={trigger}
          triggerType={['hover', 'click']}
          closable={false}
          offset={[0, 10]}
          style={{ padding: 4 }}
        >
          <Menu style={{ border: 'none' }}>
            <Menu.Item>
              <a href="/personal/register">个人设置</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/logout">退出登录</a>
            </Menu.Item>
          </Menu>
        </Balloon>
      </div>
    );
  }
  render() {
    const { fullHeader, defaultSelectedKeys } = this.props;

    const content = (
      <Nav
        direction="hoz"
        type="secondary"
        activeDirection={null}
        hozAlign="right"
        defaultSelectedKeys={defaultSelectedKeys}
        header={this.header()}
        footer={this.footer()}
        className="header-nav"
      >
        {headerMenuConfig &&
          headerMenuConfig.length > 0 &&
          headerMenuConfig.map((nav, index) => {
            if (nav.children && nav.children.length > 0) {
              return (
                <SubNav
                  triggerType="click"
                  key={index}
                  title={
                    <span>
                      {nav.icon ? <Icon size="small" type={nav.icon} /> : null}
                      <span>{nav.name}</span>
                    </span>
                  }
                >
                  {nav.children.map(item => {
                    const linkProps = {};
                    if (item.external) {
                      if (item.newWindow) {
                        linkProps.target = '_blank';
                      }

                      linkProps.href = item.path;
                      return (
                        <NavItem key={item.path}>
                          <a {...linkProps}>
                            <span>{item.name}</span>
                          </a>
                        </NavItem>
                      );
                    }
                    linkProps.to = item.path;
                    return (
                      <NavItem key={item.path}>
                        <Link {...linkProps}>
                          <span>{item.name}</span>
                        </Link>
                      </NavItem>
                    );
                  })}
                </SubNav>
              );
            }
            const linkProps = {};
            if (nav.external) {
              if (nav.newWindow) {
                linkProps.target = '_blank';
              }
              linkProps.href = nav.path;
              return (
                <NavItem key={nav.path}>
                  <a {...linkProps}>
                    <span>
                      {nav.icon ? <Icon size="small" type={nav.icon} /> : null}
                      {nav.name}
                    </span>
                  </a>
                </NavItem>
              );
            }
            linkProps.to = nav.path;
            return (
              <NavItem key={nav.path}>
                <Link {...linkProps}>
                  <span>
                    {nav.icon ? <Icon size="small" type={nav.icon} /> : null}
                    {nav.name}
                  </span>
                </Link>
              </NavItem>
            );
          })}
      </Nav>
    );

    return (
      <div className="header" id="header">
        {fullHeader ? content : <div className="header-limit">{content}</div>}
      </div>
    );
  }
}

export default Header;
