import React, { useEffect } from 'react';
import { useRequest } from 'ice';
import { hello } from '@/apis/lambda';
import styles from './index.module.scss';

export default function Home() {
  const { data, loading, request } = useRequest(() => hello());

  useEffect(() => {
    request();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div>
        <>请求函数结果：{ loading ? 'loading....' : data?.message }</>
      </div>
    </div>
  );
}
