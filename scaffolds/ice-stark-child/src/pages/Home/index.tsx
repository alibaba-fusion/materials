import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appHistory } from '@ice/stark-app';
import { Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import PageTitle from '@/components/PageTitle';

export default function Home() {
  useEffect(() => {
    console.log('Home Page mounted');
    return () => {
      console.log('Home Page unmounted');
    };
  }, []);

  return (
    <IceContainer>
      <PageTitle title="商家首页" />

      <Link to="/detail">子应用内跳转</Link>
      <br />
      <Button
        type="primary"
        onClick={() => {
          appHistory.push('/message');
        }}
      >子应用间跳转
      </Button>
      <br />
    </IceContainer>
  );
}
