import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>Alibaba Fusion & ICE</span>
      <br />
      <span className={styles.copyright}>@ 2020 Alibaba 前端</span>
    </p>
  );
}
