import React from 'react';
import Exception from '../../components/Exception';

const Empty = () => {
  return (
    <Exception
      statusCode="204"
      image="https://img.alicdn.com/tfs/TB1P9j4GpzqK1RjSZFCXXbbxVXa-780-780.png"
      description="抱歉，您访问的内容为空"
      backText="返回首页"
    />
  );
};

export default Empty;
