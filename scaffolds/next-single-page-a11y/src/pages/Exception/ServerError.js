import React from 'react';
import Exception from '../../components/Exception';

const ServerError = () => {
  return (
    <Exception
      statusCode="500"
      image="https://img.alicdn.com/tfs/TB1ODH2GAvoK1RjSZPfXXXPKFXa-780-780.png"
      description="抱歉，服务器出错"
      backText="返回首页"
    />
  );
};

export default ServerError;
