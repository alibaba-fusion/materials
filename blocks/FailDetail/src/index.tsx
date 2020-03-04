import * as React from 'react';
import { Button, Message, Card } from '@alifd/next';

import styles from './index.module.scss';

export interface FailDetailProps {
  statusCode: string;
  description: string;
  image: string;
  buttonBackDesc: string;
  buttonContinueDesc: string;
  countDownSecnods: number;
  onButtonBack: () => {};
}

export default function FailDetail(props: FailDetailProps ) {
  const {
    statusCode = '提交失败',
    description = '请核对并修改信息后，再重新提交。',
    image = 'https://img.alicdn.com/tfs/TB1VOSVoqL7gK0jSZFBXXXZZpXa-72-72.png',
    buttonBackDesc = '返回修改',
    onButtonBack = null,
  } = props;

  const gobackHandle = () => {
    if(onButtonBack){
      onButtonBack();
    }else {
      Message.notice('返回修改');
    }
  };

  return (
    <Card free className={styles.FailDetail}>
      <div>
        <img src={image} className={styles.exceptionImage} alt="img" />
        <h1 className={styles.statuscode}>{statusCode}</h1>
        <div className={styles.description}>{description}</div>
        <div className={styles.operationWrap}>
          <Button type="primary" onClick={gobackHandle} className={styles.mainAction}>{buttonBackDesc}</Button>
        </div>
      </div>
    </Card>
  );
}
