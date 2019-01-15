import React, { Component } from 'react';
import IceContainer from '@alifd/ice-container';
import { Table, Pagination, Progress, Button, SplitButton } from '@alifd/next';
import EditDialog from './EditDialog';

import response from './complex-progress-table.json';

let tableData = {};

export default class ComplexProgressTable extends Component {
  static displayName = 'ComplexProgressTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    // 缓存 table 的请求参数
    this.queryCache = {};
    this.state = {

    };
  }

  // ICE: React Component 的生命周期

  componentWillMount() {
    this.setState({
      tableData: response.data
    })
  }

  changePage = (currentPage) => {
    const data = this.state.tableData;
    data.currentPage = currentPage;
    this.setState({
      tableData: data
    })
  };

  renderTitle = (value, index, record) => {
    return (
      <div>
        <div style={styles.title}>{record.title}</div>
        <div style={styles.subTitle}>创建时间 {record.createTime}</div>
      </div>
    );
  };

  editItem = (index, record) => {
    EditDialog.show({
      onClose: () => {
        EditDialog.hide();
      },
      onCancel: () => {
        EditDialog.hide();
      },
      onOk: (value) => {
        // TODO: 更新接口，并重新获取数据
        // this.props.updateBindingData('updateRow', {
        //   method: 'post',
        //   data: value
        // }, () => {
        //   this.fetchData();
        // });
        console.log('value', value);
        EditDialog.hide();
      },
      value: record,
    });
  };

  renderOperations = (value, index, record) => {
    return (
      <div style={styles.operations}>
        <Button
          style={styles.operationButton}
          onClick={() => this.editItem(index, record)}
          text
        >
          编辑
        </Button>
        <Button style={styles.operationButton} text>
          删除
        </Button>
      </div>
    );
  };

  renderProgress = (value) => {
    return <Progress percent={value} />;
  };

  render() {
    const tableData = this.state.tableData;
    
    return (
      <div className="complex-progress-table">
        <IceContainer style={styles.tableCard}>
          <Table
            dataSource={tableData.list}
            loading={
              tableData.__loading
            } /* eslint no-underscore-dangle: "off" */
            className="basic-table"
            style={styles.basicTable}
            hasBorder={false}
          >
            <Table.Column
              title="问题描述"
              cell={this.renderTitle}
              width={320}
            />
            <Table.Column
              title="完成进度"
              dataIndex="progress"
              width={230}
              cell={this.renderProgress}
            />
            <Table.Column
              title="优先级"
              dataIndex="priority"
              width={60}
              style={styles.priority}
            />
            <Table.Column
              title="操作"
              width={100}
              cell={this.renderOperations}
            />
          </Table>
          <div style={styles.pagination}>
            <Pagination
              current={tableData.currentPage}
              pageSize={tableData.pageSize}
              total={tableData.total}
              onChange={this.changePage}
            />
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  tableCard: {
    padding: '10px',
  },
  subTitle: {
    marginTop: '4px',
    fontSize: '12px',
    color: '#999999',
  },
  operationButton: {
    marginRight: '10px',
  },
  priority: {
    width: '70px',
    textAlign: 'center',
  },
  operations: {
    lineHeight: '28px',
  },
  pagination: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};
