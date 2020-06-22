import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function SingleColFilterTable({ value }) {
  return (
    <div className={styles.container}>
      SingleColFilterTable {value}
    </div>
  );
}

SingleColFilterTable.propTypes = {
  value: PropTypes.string,
};

SingleColFilterTable.defaultProps = {
  value: 'block',
};
