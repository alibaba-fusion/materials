import React from 'react';

import styles from './index.module.scss';

interface IProps {
  value: string;
}

const MultiColFilterTable: React.FC<IProps> = ({ value }) => {
  return (
    <div className={styles.container}>
      MultiColFilterTable {value}
    </div>
  );
}

export default MultiColFilterTable;
