import React, { PureComponent } from 'react';
import { Breadcrumb } from '@alifd/next';
import { asideMenuConfig } from './../menuConfig';

export default class Crumb extends PureComponent {
  getPath(matched, items) {
    let pathItem = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (matched.startsWith(item.path)) {
        pathItem.push(item);

        if (item.children) {
          pathItem = pathItem.concat(this.getPath(matched, item.children));
        }
        break;
      }
    }

    return pathItem;
  }

  render() {
    const { match } = this.props;
    const path = this.getPath(match.path, asideMenuConfig);
    return (
      <Breadcrumb style={{ marginBottom: 20 }}>
        {path.map((p, i) => {
          return (
            <Breadcrumb.Item key={i} link={p.path} style={{ color: 'white' }}>
              {p.name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  }
}
