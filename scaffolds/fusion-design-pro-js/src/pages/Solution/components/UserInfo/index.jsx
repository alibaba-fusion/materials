import React, { useEffect } from 'react';
import { Avatar, Card } from '@alifd/next';
import { useRequest } from 'ice';

const UserInfo = () => {
  const { data: response, request } = useRequest({
    url: '/api/profile',
    method: 'GET',
  });
  let avatar = '';
  let name = '';

  if (response && response.status === 'SUCCESS') {
    avatar = response.data.avatar;
    name = response.data.name;
  }

  useEffect(() => {
    request();
  }, []);
  return (
    <Card
      free
      style={{
        margin: 20,
      }}
    >
      <Card.Header title="请求 Mock 数据示例" />
      <Card.Divider />
      <Card.Content>
        <Avatar size="small" src={avatar} />
        <span
          style={{
            marginLeft: 10,
          }}
        >
          {name}
        </span>
      </Card.Content>
    </Card>
  );
};

export default UserInfo;
