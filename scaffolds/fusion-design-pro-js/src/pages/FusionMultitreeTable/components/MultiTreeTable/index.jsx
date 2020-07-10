import React, { useCallback } from 'react';
import {
  Button,
  Table,
  Card,
  Pagination,
  Icon,
  Dropdown,
  Menu,
  Message,
  Dialog,
} from '@alifd/next';
import { useFusionTable, useSetState } from 'ahooks';
import EmptyBlock from './EmptyBlock';
import ExceptionBlock from './ExceptionBlock';
import DialogEdit from './DialogEdit';
import styles from './index.module.scss';
import { getData } from './mock';

const getTableData = ({ current, pageSize }, formData) => {
  console.log(current, pageSize, formData);

  if (!formData.status || formData.status === 'normal') {
    // let query = `page=${current}&size=${pageSize}`;
    // Object.entries(formData).forEach(([key, value]) => {
    //   if (value) {
    //     query += `&${key}=${value}`
    //   }
    // });
    // return fetch(`https://randomuser.me/api?results=${pageSize}&${query}`)
    //   .then(res => res.json())
    //   .then(res => ({
    //     total: 55,
    //     list: res.results.slice(0, 10),
    //   }));
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getData(current, pageSize));
      }, 300);
    });
  }

  if (formData.status === 'empty') {
    return Promise.resolve({
      total: 0,
      list: [],
    });
  }

  if (formData.status === 'exception') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('data exception'));
      }, 1000);
    });
  }

  return Promise.resolve({
    total: 0,
    list: [],
  });
};

const defaultColumnWidth = {
  name: 200,
  email: 450,
  phone: 400,
  gender: 140,
  operation: 200,
};

const MultiTreeTable = () => {
  const [state, setState] = useSetState({
    columnWidth: defaultColumnWidth,
    optCol: null,
    actionVisible: false,
    selectedRowKeys: [],
  });
  const { paginationProps, tableProps, search, error, refresh } = useFusionTable(getTableData, {});
  const { reset } = search;
  const { columnWidth, actionVisible, optCol, selectedRowKeys } = state;
  const handleResizeChange = useCallback(
    (dataIndex, width) => {
      const newWidth = { ...columnWidth };
      newWidth[dataIndex] += width;
      setState({
        columnWidth: newWidth,
      });
    },
    [columnWidth, setState],
  );
  const handleEdit = useCallback(
    dataSource => {
      setState({
        optCol: dataSource,
        actionVisible: true,
      });
    },
    [setState],
  );
  const handleCancel = useCallback(() => {
    setState({
      actionVisible: false,
    });
  }, [setState]);
  const handleOk = useCallback(() => {
    Message.success('编辑成功!');
    reset();
    handleCancel();
  }, [handleCancel, reset]);
  const handleDelete = useCallback(
    dataSource => {
      if (!dataSource) {
        return;
      }

      Dialog.confirm({
        title: '删除提醒',
        content: `确定删除 ${dataSource.name} 吗`,

        onOk() {
          Message.success(`${dataSource.name} 删除成功!`);
          reset();
        },
      });
    },
    [reset],
  );
  const handleChangeSRowKeys = useCallback(
    nextSelectedRowKeys => {
      setState({
        selectedRowKeys: nextSelectedRowKeys,
      });
    },
    [setState],
  );
  const handleSubmitAudit = useCallback(
    dataSource => {
      Message.success(`${dataSource.name} 提交审核成功!`);
      reset();
    },
    [reset],
  );
  const handleBackTo = useCallback(
    dataSource => {
      Message.success(`${dataSource.name} 打回成功!`);
      reset();
    },
    [reset],
  );
  const handleSubmitAuditList = useCallback(() => {
    if (!selectedRowKeys.length) {
      return Message.warning('请先选择条目');
    }

    Message.success(`${selectedRowKeys.join(', ')} 批量提交审核成功!`);
    reset();
  }, [selectedRowKeys, reset]);
  const handleBackToList = useCallback(() => {
    if (!selectedRowKeys.length) {
      return Message.warning('请先选择条目');
    }

    Message.success(`${selectedRowKeys.join(', ')} 批量打回成功!`);
    reset();
  }, [selectedRowKeys, reset]);
  const handleDeleteList = useCallback(() => {
    if (!selectedRowKeys.length) {
      return Message.warning('请先选择条目');
    }

    Dialog.confirm({
      title: '删除提醒',
      content: `确定删除 ${selectedRowKeys.join(', ')} 吗`,

      onOk() {
        Message.success(`${selectedRowKeys.join(', ')} 批量删除成功!`);
        reset();
      },
    });
  }, [selectedRowKeys, reset]);
  const moreCallback = useCallback(
    dataSource => key => {
      console.log(dataSource, key);

      if (key === 'submitAudit') {
        return handleSubmitAudit(dataSource);
      }

      return handleBackTo(dataSource);
    },
    [handleSubmitAudit, handleBackTo],
  );
  const cellOperation = useCallback(
    (value, rowIndex, record) => {
      if (!record) {
        return null;
      }
      // eslint-disable-next-line no-underscore-dangle
      const isHead = record.__level === 0;
      return (
        <div>
          <Button text type="primary" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          &nbsp;&nbsp;
          {!isHead ? null : (
            <>
              <Button text type="primary" onClick={() => handleDelete(record)}>
                删除
              </Button>
              &nbsp;&nbsp;
              <Dropdown
                trigger={
                  <Button text type="primary">
                    更多
                    <Icon type="arrow-down" />
                  </Button>
                }
              >
                <Menu onItemClick={moreCallback(record)}>
                  <Menu.Item key="submitAudit">提交审核</Menu.Item>
                  <Menu.Item key="backTo">打回</Menu.Item>
                </Menu>
              </Dropdown>
            </>
          )}
        </div>
      );
    },
    [handleEdit, handleDelete, moreCallback],
  );
  return (
    <div className={styles.MultiTreeTable}>
      <Card free>
        <Card.Content>
          <div className={styles.actionBar}>
            <Button type="primary" onClick={handleSubmitAuditList}>
              批量提交
            </Button>
            &nbsp;&nbsp;
            <Button onClick={handleBackToList}>批量打回</Button>
            &nbsp;&nbsp;
            <Button type="primary" warning onClick={handleDeleteList}>
              批量删除
            </Button>
            &nbsp;&nbsp; 已选中{' '}
            <span className={styles.selectedData}>{selectedRowKeys.length}</span> 条数据
          </div>
          <Table
            {...tableProps}
            isTree
            hasBorder={false}
            rowSelection={{
              selectedRowKeys,
              onChange: handleChangeSRowKeys,
            }}
            onResizeChange={handleResizeChange}
            emptyContent={error ? <ExceptionBlock onRefresh={refresh} /> : <EmptyBlock />}
          >
            <Table.Column title="name" dataIndex="name" resizable width={columnWidth.name} />
            <Table.Column title="email" dataIndex="email" resizable width={columnWidth.email} />
            <Table.Column title="phone" dataIndex="phone" resizable width={columnWidth.phone} />
            <Table.Column title="gender" dataIndex="gender" resizable width={columnWidth.gender} />
            <Table.Column
              title="操作"
              resizable
              width={columnWidth.operation}
              cell={cellOperation}
            />
          </Table>
          <Pagination
            className={styles.Pagination}
            totalRender={total => (
              <>
                共{' '}
                <Button text type="primary">
                  {total}
                </Button>{' '}
                个记录
              </>
            )}
            {...paginationProps}
          />
        </Card.Content>
      </Card>
      <DialogEdit
        visible={actionVisible}
        dataSource={optCol}
        onOk={handleOk}
        onClose={handleCancel}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default MultiTreeTable;
