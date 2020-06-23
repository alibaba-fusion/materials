import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function MergeCellTable({ value }) {
  return (
    <div className={styles.container}>
      MergeCellTable {value}
    </div>
  );
}

MergeCellTable.propTypes = {
  value: PropTypes.string,
};

MergeCellTable.defaultProps = {
  value: 'block',
};
