import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function DialogTable({ value }) {
  return (
    <div className={styles.container}>
      DialogTable {value}
    </div>
  );
}

DialogTable.propTypes = {
  value: PropTypes.string,
};

DialogTable.defaultProps = {
  value: 'block',
};
