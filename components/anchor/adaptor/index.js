import React from 'react';
import { parseData } from '@alifd/adaptor-helper';

import MainComponent, { Link } from '../src';

export default {
  name: 'Anchor', // 组件名称
  editor: () => {
    return {
      props: [{
        name: 'width',
        type: 'number',
        default: 200
      }],
      data: {
        default: 'Basic demo\n*Static demo\nAPI\n\tusage of type\n\tusage of size'
      }
    };
  },
  adaptor: (props) => {
    const { width, data, ...others } = props;
    const list = parseData(data);

    const children = list.map(item => {
      if (!item.children.length) {
        return <Link title={item.value} key={item.value} active={item.state === 'active'}/>
      } else {
        return <Link title={item.value} key={item.value} active={item.state === 'active'}>
          {item.children.map(child => {
            return <Link title={child.value} key={child.value} active={child.state === 'active'}/>
          })}
        </Link>
      }
    });

    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <MainComponent component="div" {...others} style={{width}}>{children}</MainComponent>
    );
  },
};
