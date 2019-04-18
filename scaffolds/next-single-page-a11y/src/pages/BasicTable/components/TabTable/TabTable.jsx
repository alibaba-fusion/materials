import React, { Component } from 'react';

import { Tab, Button, Input, Pagination } from '@alifd/next';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';
import SearchTable from './components/SearchTable';

import data from './data';
import './TabTable.scss';

export default class TabTable extends Component {
  static displayName = 'TabTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: data,
      tabKey: 'all',
    };
    this.columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '发布时间',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '操作',
        key: 'action',
        render: (value, index, record) => {
          return (
            <span>
              <EditDialog
                index={index}
                record={record}
                getFormValues={this.getFormValues}
              />
              <DeleteBalloon
                handleRemove={() => this.handleRemove(value, index, record)}
              />
            </span>
          );
        },
      },
    ];
  }

  getFormValues = (dataIndex, values) => {
    const { dataSource, tabKey } = this.state;
    dataSource[tabKey][dataIndex] = values;
    this.setState({
      dataSource,
    });
  };

  handleRemove = (value, index) => {
    const { dataSource, tabKey } = this.state;
    dataSource[tabKey].splice(index, 1);
    this.setState({
      dataSource,
    });
  };

  handleTabChange = key => {
    this.setState({
      tabKey: key,
    });
  };

  render() {
    const { dataSource } = this.state;
    const {} = this.props;
    const tabs = [
      { tab: '全部', key: 'all' },
      { tab: '审核中', key: 'review' },
      { tab: '已发布', key: 'released' },
      { tab: '已拒绝', key: 'rejected' },
    ];

    return (
      <div style={{ backgroundColor: 'white', padding: '0 0 5px 0px' }}>
        <Tab onChange={this.handleTabChange}>
          {tabs.map(item => {
            return (
              <Tab.Item title={item.tab} key={item.key}>
                <SearchTable />

                <CustomTable
                  dataSource={dataSource[this.state.tabKey]}
                  columns={this.columns}
                  hasBorder={false}
                  style={{ padding: '0 10px' }}
                />
              </Tab.Item>
            );
          })}
        </Tab>

        <Pagination defaultCurrent={1} className="pagination" />
      </div>
    );
  }
}
