import React from 'react';
import { Card } from '@alifd/next';
import styles from './index.module.scss';

const Exception = props => {
  const {
    statusCode = '404',
    description = '服务器好像挂了你要等会了',
    image = 'https://img.alicdn.com/tfs/TB14c1VoET1gK0jSZFhXXaAtVXa-200-200.png',
  } = props;
  return (
    <Card free className={styles.exception}>
      <div>
        <img src={image} className={styles.exceptionImage} alt="img" />
        <h1 className={styles.statuscode}>{statusCode}</h1>
        <div className={styles.description}>{description}</div>
      </div>
    </Card>
  );
};

export default Exception;
