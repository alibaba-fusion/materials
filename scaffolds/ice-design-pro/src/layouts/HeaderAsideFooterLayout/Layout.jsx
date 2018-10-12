/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import cx from 'classnames';
import Layout from '@alifd/ice-layout';
import { Icon, Menu, Nav } from '@alifd/next';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import FoundationSymbol from '@alifd/ice-foundation-symbol';
import { enquire } from 'enquire-js';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Logo from './../../components/Logo';
import { asideMenuConfig } from './../../menuConfig';
import './scss/light.scss';
import './scss/dark.scss';

const NavItem = Nav.Item;
const SubNav = Nav.SubNav;

// 设置默认的皮肤配置，支持 dark 和 light 两套皮肤配置
const theme = typeof THEME === 'undefined' ? 'dark' : THEME;
@withRouter
export default class HeaderAsideFooterLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
      isScreen: undefined,
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  /**
   * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
   */
  enquireScreenRegister = () => {
    const isMobile = 'screen and (max-width: 720px)';
    const isTablet = 'screen and (min-width: 721px) and (max-width: 1199px)';
    const isDesktop = 'screen and (min-width: 1200px)';

    enquire.register(isMobile, this.enquireScreenHandle('isMobile'));
    enquire.register(isTablet, this.enquireScreenHandle('isTablet'));
    enquire.register(isDesktop, this.enquireScreenHandle('isDesktop'));
  };

  enquireScreenHandle = (type) => {
    let collapse;
    if (type === 'isMobile') {
      collapse = false;
    } else if (type === 'isTablet') {
      collapse = true;
    } else {
      collapse = this.state.collapse;
    }

    const handler = {
      match: () => {
        this.setState({
          isScreen: type,
          collapse,
        });
      },
      unmatch: () => {
        // handler unmatched
      },
    };

    return handler;
  };

  /**
   * 响应式通过抽屉形式切换菜单
   */
  toggleMenu = () => {
    const { openDrawer } = this.state;
    this.setState({
      openDrawer: !openDrawer,
    });
  };

  /**
   * 左侧菜单收缩切换
   */
  onMenuClick = () => {
    this.toggleMenu();
  };

  /**
   * 当前展开的菜单项
   */
  getOpenKeys = () => {
    const { match } = this.props;
    const matched = match.path;
    let openKeys = [];

    Array.isArray(asideMenuConfig) &&
      asideMenuConfig.forEach((item, index) => {
        if (matched.startsWith(item.path)) {
          openKeys = [`${index}`];
          item.children && item.children.forEach((sitem, idx) => {
            if (matched.startsWith(sitem.path)) {
              openKeys.push(`${index}.${idx}`);
            }
          });
        }
      });

    return openKeys;
  };

  renderNavItem(nav) {
    const linkProps = {};
    if (nav.newWindow) {
      linkProps.href = nav.path;
      linkProps.target = '_blank';
    } else if (nav.external) {
      linkProps.href = nav.path;
    } else {
      linkProps.to = nav.path;
    }
    return (
      <NavItem key={nav.path}>
        <Link {...linkProps}>
          <span>
            {nav.icon ? (
              <FoundationSymbol size="small" type={nav.icon} />
            ) : null}
            <span className="ice-menu-collapse-hide">
              {nav.name}
            </span>
          </span>
        </Link>
      </NavItem>
    );
  }
  render() {
    const { location } = this.props;
    const { pathname } = location;

    return (
      <Layout
        style={{ minHeight: '100vh' }}
        className={cx(`ice-design-header-aside-footer-layout-${theme}`, {
          'ice-design-layout': true,
        })}
      >
        <Header theme={theme} isMobile={this.state.isScreen !== 'isDesktop'} />
        <Layout.Section className="ice-design-layout-body">
          {this.state.isScreen !== 'isDesktop' && (
            <a className="menu-btn" onClick={this.toggleMenu}>
              <Icon type="category" size="small" />
            </a>
          )}

          {this.state.openDrawer && (
            <div className="open-drawer-bg" onClick={this.toggleMenu} />
          )}

          <Layout.Aside
            width="auto"
            theme={theme}
            className={cx('ice-design-layout-aside', {
              'open-drawer': this.state.openDrawer,
            })}
          >
            {this.state.isScreen !== 'isDesktop' && <Logo />}
            <Nav
              style={{ width: 200 }}
              onClick={this.onMenuClick}
              selectedKeys={[pathname]}
              defaultSelectedKeys={[pathname]}
              defaultOpenKeys={this.getOpenKeys()}
              activeDirection={null}
              type="primary"
              direction="ver"
            >
              {asideMenuConfig &&
                asideMenuConfig.length > 0 &&
                asideMenuConfig.map((nav, index) => {
                  if (nav.children && nav.children.length > 0) {
                    return (
                      <SubNav
                        key={index}
                        icon={<FoundationSymbol size="small" type={nav.icon} />}
                        label={nav.name}
                      >
                        {nav.children.map((item, idx) => {
                          if (item.children && item.children.length > 0) {
                            return (
                              <SubNav
                                key={`${index}.${idx}`}
                                icon={<FoundationSymbol size="small" type={item.icon} />}
                                label={item.name}
                              >
                                {item.children.map((citem) => {
                                  return this.renderNavItem(citem);
                                })}
                              </SubNav>)
                          } else {
                            return this.renderNavItem(item);
                          }
                        })}
                      </SubNav>
                    );
                  }
                  return this.renderNavItem(nav);
                })}
            </Nav>
            {/* 侧边菜单项 end */}
          </Layout.Aside>
          {/* 主体内容 */}
          <Layout.Main>{this.props.children}</Layout.Main>
        </Layout.Section>
        <Footer />
      </Layout>
    );
  }
}
