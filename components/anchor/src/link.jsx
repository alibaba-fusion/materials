import React from 'react';
import classNames from 'classnames';

const isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i

class Link extends React.Component {
  handleClick = (e) => {
    this.props.onItemClick(e);
  }

  render() {
    const { className, children, href, title, active, level, allowJavaScriptUrls, ...others } = this.props;

    if (isJavaScriptProtocol.test(href) && !allowJavaScriptUrls) {
      console.warn(`Link has blocked a javascript: URL as a security precaution`);
      return null;
    }

    const cls = classNames({
      className: !!className,
      'biz-anchor-link': true,
      [`biz-anchor-link-level-${level}`]: true,
      'biz-anchor-link-active': active
    });

    return (
      <div className={cls} >
        <a className="biz-anchor-link-title" href={href} onClick={this.handleClick}>{title}</a>
        {children}
      </div>
    );
  }
}

Link.displayName = 'Link';

Link.defaultProps = {
  onItemClick: () => {},
  allowJavaScriptUrls: true
};

export default Link;
