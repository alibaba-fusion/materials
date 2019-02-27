/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';

import { Table, Button, Icon } from '@alifd/next';
import FooterCard from '../FooterCard';

import styles from './index.module.scss';
import './index.scss';

const mockData = [
  {
    id: 1,
    state: 'todo',
    reason: '',
  },
  {
    id: 2,
    state: 'done',
    reason: '',
  },
  {
    id: 3,
    state: 'failed',
    reason: '利润率异常',
  },
];
const renderIcon = state => {
  let type;
  switch (state) {
    case 'todo':
      type = 'ellipsis';
      break;
    case 'doing':
      type = 'clock';
      break;
    case 'done':
      type = 'success-filling';
      break;
    case 'failed':
      type = 'delete-filling';
      break;
    default:
      break;
  }
  return <Icon type={type} className={state} />;
};

const oprations = () => {
  const map = {
    todo: '待进行',
    doing: '进行中',
    done: '已完成',
    failed: '异常',
  };
  return Object.keys(map).map(key => {
    return (
      <Button text>
        {renderIcon(key)}
        {map[key]}
      </Button>
    );
  });
};

const actions = (value, index, recored) => {
  return (
    <div>
      <a href="javascript:void(0)">下载</a>
    </div>
  );
};
export default class TableCard extends Component {
  render() {
    return (
      <div className={styles.tableWrapper}>
        <div className={styles.oprations}>
          <div className={styles.leftOp} />
          <div className={styles.rightOp}>{oprations()}</div>
        </div>
        <Table dataSource={mockData}>
          <Table.Column title="Id" dataIndex="id" lock width={80} />
          <Table.Column
            title="审核状态"
            dataIndex="state"
            align="center"
            cell={renderIcon}
          />
          <Table.Column title="驳回原因" dataIndex="reason" align="center" />
          <Table.Column title="操作" lock="right" width={200} cell={actions} />
        </Table>
      </div>
    );
  }
}
