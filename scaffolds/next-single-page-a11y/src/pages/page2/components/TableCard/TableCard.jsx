/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FooterCard from '../FooterCard';
import TableBanner from '../TableBanner';

import { Table, Pagination, Button } from '@alifd/next';

import { renderIcon } from '../../utils';

import styles from './index.module.scss';
import './index.scss';
import mockData from './mockData.json';

const stepState = [
  'step1',
  'step2',
  'step3',
  'step4',
  'step5',
  'step6',
  'step7',
  'step8',
];

export default class TableCard extends Component {
  state = {
    loading: false,
    selectedRowKeys: [1, 4],
  };
  onChange = ids => {
    this.setState({ selectedRowKeys: ids });
  };
  onPaginationChange = currentPage => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        dataSource: mockData,
        loading: false,
      });
    }, 200);
  };
  actions = (value, index, recored) => {
    const { readOnly } = this.props;
    return readOnly ? (
      <div>
        <Button type="primary" size="small">
          下载数据
        </Button>
        <Button type="primary" size="small" style={{ margin: '0px 3px' }}>
          退回
        </Button>
        <Button type="primary" size="small">
          提交审核
        </Button>
      </div>
    ) : (
      <div style={{ 'text-align': 'center' }}>
        <Button type="primary" size="small">
          下载数据
        </Button>
        <Button type="primary" size="small" style={{ marginLeft: '5px' }}>
          开始计算
        </Button>
      </div>
    );
  };
  render() {
    const { readOnly } = this.props;
    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.tableWrapper}>
          <TableBanner />
          <Table
            loading={this.state.loading}
            align="center"
            dataSource={mockData}
            rowSelection={
              readOnly
                ? undefined
                : {
                    mode: 'multiple',
                    selectedRowKeys: this.state.selectedRowKeys,
                    onChange: this.onChange,
                  }
            }
          >
            <Table.Column title="Id" dataIndex="id" lock width={100} />
            {stepState.map(key => (
              <Table.Column
                title={key}
                dataIndex={key}
                align="center"
                width={120}
                cell={renderIcon}
              />
            ))}
            <Table.Column
              title="操作"
              lock="right"
              width={200}
              cell={this.actions}
            />
          </Table>
          <Pagination
            onChange={this.onPaginationChange}
            className={styles.pagination}
          />
        </div>
        <FooterCard />
      </div>
    );
  }
}
