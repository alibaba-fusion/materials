import React, { useState } from 'react';
import { Button, Message, Card } from '@alifd/next';
import { useInterval } from './utils';
import styles from './index.module.scss';

export default function SuccessDetail(props) {
  const {
    statusCode = '提交成功',
    description = 's 后自动跳转至工单页',
    image = 'https://img.alicdn.com/tfs/TB1UOSVoqL7gK0jSZFBXXXZZpXa-73-72.png',
    buttonBackDesc = '返回列表',
    buttonContinueDesc = '继续创建',
    countDownSecnods = 5,
    onButtonBack = null,
    onButtonContinue = null,
  } = props;
  const [second, setSecond] = useState(countDownSecnods);

  const gobackHandle = () => {
    if (onButtonBack) {
      onButtonBack();
    } else {
      Message.notice('返回列表函数响应');
    }
  };

  useInterval(
    () => {
      setSecond(second - 1);

      if (second <= 0) {
        gobackHandle();
      }
    },
    second >= 0 ? 1000 : null,
  );

  const goContinueHandle = () => {
    if (onButtonContinue) {
      onButtonContinue();
    } else {
      Message.notice('继续创建函数响应');
    }
  };

  return (
    <Card free className={styles.SuccessDetail}>
      <div>
        <img src={image} className={styles.exceptionImage} alt="img" />
        <h1 className={styles.statuscode}>{statusCode}</h1>
        <div className={styles.description}>{`${second > 0 ? second : 0}${description}`}</div>
        <div className={styles.operationWrap}>
          <Button type="primary" onClick={gobackHandle} className={styles.mainAction}>
            {buttonBackDesc}
          </Button>
          <Button onClick={goContinueHandle}>{buttonContinueDesc}</Button>
        </div>
      </div>
    </Card>
  );
}
