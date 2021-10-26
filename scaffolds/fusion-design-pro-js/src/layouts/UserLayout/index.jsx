import * as React from 'react';
import styles from './index.module.css';

export default function UserLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
