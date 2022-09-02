import React from 'react';
import classNames from 'classnames';
import { Affix } from '@alifd/next';
import ALink from './link';

import './main.scss';

const ActiveContext = React.createContext('active');

class BizAnchor extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      activeKey: null,
    }
    this.nodeIdList = {};

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    if (this.props.content()) {
      this.setState({})
      setTimeout( () => {
        this.onScroll();
      }, 200);
    }
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const keys = Object.keys(this.nodeIdList);
    const activeKeyList = [];
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const node = document.getElementById(key);
      if (node?.getBoundingClientRect) {
        const { top } = node.getBoundingClientRect();
        activeKeyList.push({
          key,
          top
        })
      }
    }
    if (!activeKeyList.length) {
      return;
    }

    const minKey = activeKeyList.reduce((x, y) => Math.abs(x.top) < Math.abs(y.top) ? x : y);

    if (minKey && (minKey.key !== this.state.activeKey)) {
      this.setState({
        activeKey: minKey.key,
      });
    }
  }

  onItemClick = (key, e) => {
    if(this.props.noHash) {
      e.preventDefault();
      document.getElementById(key).scrollIntoView();
    }
    this.setState({
      activeKey: key,
    });
  }

  /**
   * 手写菜单
   * @returns 
   */
  getChildren(childNode, level=1) {
    return React.Children.map(childNode, child => {
      if (child.type && child.type.displayName === 'Link') {
        const key = child.props.href && child.props.href.replace('#','') || '';
        key && (this.nodeIdList[key] = true);
        if (child.props.children && child.props.children.length) {
          return [
            React.cloneElement(child, {
              level, 
              children: null, 
              active: this.state.activeKey === key || child.props.active,
              onItemClick: this.onItemClick.bind(this, key),
            }),
            this.getChildren(child.props.children, level + 1)
          ];
        }
        return React.cloneElement(child, {
          level, 
          active: this.state.activeKey === key || child.props.active,
          onItemClick: this.onItemClick.bind(this, key),
        });
      }
      return child;
    })
  }

  /**
   * 根据内容自动生成菜单
   */
  computeChildren(originContent) {
    const nodeList = [];
    let maxLevel = 4;

    let content = originContent.children;

    // 防止外面包一个div
    if (content.length === 1 && !content[0].id && content[0].nodeName !== 'H') {
      content = content[0].children;
    }

    for (let index = 0; index < content.length; index++) {
      const ele = content[index];
      if (ele.id) {
        if (ele.nodeName === 'H1' || ele.nodeName === 'H2' || ele.nodeName === 'H3' || ele.nodeName === 'H4') {
          const level = Number(ele.nodeName.replace('H',''));
          maxLevel = level < maxLevel ? level : maxLevel;

          ele.id && (this.nodeIdList[ele.id] = true);

          nodeList.push({
            id: ele.id,
            level,
            title: ele.innerText
          });
        }
      }
    }

    return nodeList.map((n, i) => {
      const onClick = (...args) => {
        this.onItemClick(n.id, ...args);
      };
      return <ALink href={`#${n.id}`} level={n.level - maxLevel + 1} key={i} title={n.title} 
        onItemClick={onClick}
        active={this.state.activeKey === n.id}
      />
    })
  }

  render() {
    const { children, className, component, content, ...others } = this.props;
    const cls = classNames({
      [className]: !!className,
      'biz-anchor': true
    });

    const Tag = component || Affix;

    let childrenList = null;

    this.nodeIdList = {};
    if (children) {
      childrenList = this.getChildren(children, 1);
    } else if (content()){
      childrenList = this.computeChildren(content());
    }

    return (
      <Tag className={cls} {...others}>
        {childrenList}
      </Tag>
    );
  }
}

BizAnchor.displayName = 'BizAnchor';
BizAnchor.defaultProps = {
  content: () => null,
  noHash: false,
  /**
   * 菜单距离顶部偏离的固定高度
   */
  offsetTop: 0,
};
export default BizAnchor;
export const Link = ALink;
