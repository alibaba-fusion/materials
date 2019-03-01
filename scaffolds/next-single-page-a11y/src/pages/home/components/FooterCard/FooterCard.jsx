/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';

import { Button, Icon } from '@alifd/next';

import styles from './index.module.scss';

export default class FooterCard extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Button size="large" type="secondary">
          下一步
        </Button>
      </div>
    );
  }
}
