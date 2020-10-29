import React from 'react';
import { Icon } from '@alifd/next';
import styles from './index.module.scss';

export default function () {
  return (
    <div className={styles.other}>
      其他登录方式&nbsp;
      <Icon type="chart-pie" size="small" title="淘宝" />
      &nbsp;
      <Icon type="atm" size="small" title="旺旺" />
      &nbsp;
      <Icon type="smile" size="small" title="钉钉" />
    </div>
  );
}
