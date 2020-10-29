import React from 'react';
import classNames from 'classnames';

class Link extends React.Component {
  handleClick = (e) => {
    this.props.onItemClick(e);
  };

  render() {
    const { className, children, href, title, active, level, ...others } = this.props;

    const cls = classNames({
      className: !!className,
      'biz-anchor-link': true,
      [`biz-anchor-link-level-${level}`]: true,
      'biz-anchor-link-active': active,
    });

    return (
      <div className={cls}>
        <a className="biz-anchor-link-title" href={href} onClick={this.handleClick}>
          {title}
        </a>
        {children}
      </div>
    );
  }
}

Link.displayName = 'Link';

Link.defaultProps = {
  onItemClick: () => {},
};

export default Link;
