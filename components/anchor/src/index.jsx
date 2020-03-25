import React from 'react';
import classNames from 'classnames';
import { Affix } from '@alifd/next';
import Link_ from './link';

const ActiveContext = React.createContext('active');

export default class BizAnchor extends React.Component {
  static displayName = 'BizAnchor';

  static defaultProps = {
    content: () => null,
    noHash: false,
  }

  state = {
    content: null,
    childrenList: null,
    activeKey: null,
  }

  componentDidMount() {
    if (this.props.content()) {
      this.setState({})
    }
  }

  computeChildren(originContent) {
    const nodeList = [];
    let maxLevel = 4;

    let content = originContent.children;

    if (content.length === 1 && !content[0].id && content[0].nodeName !== 'H') {
      content = content[0].children;
    }

    for (let index = 0; index < content.length; index++) {
      const ele = content[index];
      if (ele.id) {
        if (ele.nodeName === 'H2' || ele.nodeName === 'H3' || ele.nodeName === 'H4') {
          const level = Number(ele.nodeName.replace('H',''));
          maxLevel = level < maxLevel ? level : maxLevel;

          nodeList.push({
            id: ele.id,
            level: level,
            title: ele.innerText
          });
        }
      }
    }

    return nodeList.map((n, i) => {
      return <Link_ href={`#${n.id}`} level={n.level - maxLevel + 1} key={i} title={n.title} 
        onItemClick={this.onItemClick.bind(this, n.id)}
        active={this.state.activeKey === n.id}
      ></Link_>
    })
  }

  getChildren(childNode, level=1) {
    return React.Children.map(childNode, child => {
      if (child.type && child.type.displayName === 'Link') {
        const activeKey = child.props.href && child.props.href.replace('#','') || '';
        if (child.props.children && child.props.children.length) {
          return [
            React.cloneElement(child, {
              level, 
              children: null, 
              active: this.state.activeKey === activeKey || child.props.active,
              onItemClick: this.onItemClick.bind(this, activeKey),
            }),
            this.getChildren(child.props.children, level + 1)
          ];
        }
        return React.cloneElement(child, {
          level, 
          active: this.state.activeKey === activeKey || child.props.active,
          onItemClick: this.onItemClick.bind(this, activeKey),
        });
      }
      return child;
    })
  }

  onItemClick(key, e){
    if(this.props.noHash) {
      e.preventDefault();
      document.getElementById(key).scrollIntoView();
    }
    this.setState({
      activeKey: key,
    });
  }

  render() {
    const { children, className, component, content, ...others } = this.props;
    const cls = classNames({
      [className]: !!className,
      'biz-anchor': true
    });

    const Tag = component ? component : Affix;

    let childrenList = null;

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

export const Link = Link_;