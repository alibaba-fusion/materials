import React from 'react';
import styles from './index.module.scss';

export default props => {
  return (
    <div className="icestark-child-app">
      <h3 className={styles.title}>商家平台</h3>
      {props.children}
    </div>
  );
};
