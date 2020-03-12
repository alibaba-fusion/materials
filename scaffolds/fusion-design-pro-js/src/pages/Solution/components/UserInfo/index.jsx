import React, { useEffect } from 'react';
import { Avatar, Card } from '@alifd/next';
import { store as appStore } from 'ice';

const UserInfo = () => {
  const [userInfo, userActions] = appStore.useModel('user');
  useEffect(() => {
    userActions.fetchUserProfile();
  }, []);
  return (
    <Card free>
      <Card.Header title="状态管理 - 全局状态" />
      <Card.Divider />
      <Card.Content>
        <Avatar size="small" src={userInfo.avatar} />
        <span
          style={{
            marginLeft: 10,
          }}
        >
          {userInfo.name}
        </span>
      </Card.Content>
    </Card>
  );
};

export default UserInfo;
