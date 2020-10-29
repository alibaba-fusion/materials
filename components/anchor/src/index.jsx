import React from 'react';
import classNames from 'classnames';
import { Affix } from '@alifd/next';
import ALink from './link';

const ActiveContext = React.createContext('active');

class BizAnchor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null,
    };
  }

  componentDidMount() {
    if (this.props.content()) {
      this.setState({});
    }
  }

  onItemClick = (key, e) => {
    if (this.props.noHash) {
      e.preventDefault();
      document.getElementById(key).scrollIntoView();
    }
    this.setState({
      activeKey: key,
    });
  };

  getChildren(childNode, level = 1) {
    return React.Children.map(childNode, (child) => {
      if (child.type && child.type.displayName === 'Link') {
        const activeKey = (child.props.href && child.props.href.replace('#', '')) || '';
        if (child.props.children && child.props.children.length) {
          return [
            React.cloneElement(child, {
              level,
              children: null,
              active: this.state.activeKey === activeKey || child.props.active,
              onItemClick: this.onItemClick.bind(this, activeKey),
            }),
            this.getChildren(child.props.children, level + 1),
          ];
        }
        return React.cloneElement(child, {
          level,
          active: this.state.activeKey === activeKey || child.props.active,
          onItemClick: this.onItemClick.bind(this, activeKey),
        });
      }
      return child;
    });
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
          const level = Number(ele.nodeName.replace('H', ''));
          maxLevel = level < maxLevel ? level : maxLevel;

          nodeList.push({
            id: ele.id,
            level,
            title: ele.innerText,
          });
        }
      }
    }

    return nodeList.map((n, i) => {
      const onClick = (...args) => {
        this.onItemClick(n.id, ...args);
      };
      return (
        <ALink
          href={`#${n.id}`}
          level={n.level - maxLevel + 1}
          key={i}
          title={n.title}
          onItemClick={onClick}
          active={this.state.activeKey === n.id}
        />
      );
    });
  }

  render() {
    const { children, className, component, content, ...others } = this.props;
    const cls = classNames({
      [className]: !!className,
      'biz-anchor': true,
    });

    const Tag = component || Affix;

    let childrenList = null;

    if (children) {
      childrenList = this.getChildren(children, 1);
    } else if (content()) {
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
};
export default BizAnchor;
export const Link = ALink;
