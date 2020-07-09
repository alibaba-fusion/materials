import React, { useCallback } from 'react';
import { Button, Table, Card, Pagination, Icon, Dropdown, Menu } from '@alifd/next';
import { useFusionTable, useSetState } from 'ahooks';

import EmptyBlock from './EmptyBlock';
import ExceptionBlock from './ExceptionBlock';

import styles from './index.module.scss';

import data, { DataItem } from './data';

interface Result {
  total: number;
  list: DataItem[];
}

interface ColumnWidth {
  name: number;
  email: number;
  phone: number;
  gender: number;
  operation: number;
}

interface DialogState {
  columnWidth: ColumnWidth;
  // optCol: any;
  // actionType: ActionType;
  // actionVisible: boolean;
  selectedRowKeys: string[];
}

type SelectedRowKeysRecord = DataItem & {
  [key: string]: any;
}

const getTableData = (
  { current, pageSize }: { current: number; pageSize: number },
  formData: { status: 'normal' | 'empty' | 'exception' }
): Promise<Result> => {
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
    return new Promise<Result>(resolve => {
      setTimeout(() => {
        resolve({
          total: 55,
          list: data,
        });
      }, 1000);
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

const defaultColumnWidth: ColumnWidth = {
  name: 200,
  email: 450,
  phone: 400,
  gender: 140,
  operation: 200,
};

const MultiTreeTable: React.FC = () => {
  const [state, setState] = useSetState<DialogState>({
    columnWidth: defaultColumnWidth,
    // optCol: any;
    // actionType: ActionType;
    // actionVisible: boolean;
    selectedRowKeys: [],
  });
  const { paginationProps, tableProps, search, error, refresh } = useFusionTable<Result>(getTableData, {});
  const { reset } = search;
  const { columnWidth} = state;

  const handleResizeChange = useCallback((dataIndex: keyof ColumnWidth, width: number) => {
    const newWidth = {
      ...columnWidth,
    };
    newWidth[dataIndex] += width;
    setState({ columnWidth: newWidth });
  }, [columnWidth, setState]);

  const handleChange = useCallback((nextSelectedRowKeys: string[], records: SelectedRowKeysRecord[]): void => {
    console.log(nextSelectedRowKeys, records);
    setState({
      selectedRowKeys: nextSelectedRowKeys,
    });
  }, [setState]);

  const moreCallback = useCallback((record: DataItem) => (key: string) => {
    console.log(record, key);
  }, []);

  const cellOperation = useCallback((...args: any[]): React.ReactNode => {
    const record = args[2];
    console.log(args)
    return (
      <div>
        <Button
          text
          type="primary"
          // onClick={() => operationCallback({ actionType: 'edit', dataSource: record })}
        >
          编辑
        </Button>
        &nbsp;&nbsp;
        <Button
          text
          type="primary"
          // onClick={() => handleDelete(record)}
        >
          删除
        </Button>
        &nbsp;&nbsp;
        <Dropdown
          trigger={
            <Button
              text
              type="primary"
              // onClick={() => operationCallback({ actionType: 'preview', dataSource: record })}
            >
              更多<Icon type="arrow-down" />
            </Button>
          }
        >
          <Menu onItemClick={moreCallback(record)}>
            <Menu.Item key="submitAudit">提交审核</Menu.Item>
            <Menu.Item key="backTo">打回</Menu.Item>
          </Menu>
        </Dropdown>
      </div>
    );
  }, [moreCallback]);

  return (
    <div className={styles.MultiTreeTable}>
      <Card free>
        <Card.Content>
          <Table
            {...tableProps}
            isTree
            rowSelection={{
              selectedRowKeys: state.selectedRowKeys,
              onChange: handleChange,
            }}
            onResizeChange={handleResizeChange}
            emptyContent={error ? <ExceptionBlock onRefresh={refresh} /> : <EmptyBlock />}
          >
            <Table.Column title="name" dataIndex="name" resizable width={columnWidth.name} />
            <Table.Column title="email" dataIndex="email" resizable width={columnWidth.email} />
            <Table.Column title="phone" dataIndex="phone" resizable width={columnWidth.phone} />
            <Table.Column title="gender" dataIndex="gender" resizable width={columnWidth.gender} />
            <Table.Column title="操作" resizable width={columnWidth.operation} cell={cellOperation} />
          </Table>
          <Pagination
            className={styles.Pagination}
            totalRender={total => <>共 <Button text type="primary">{total}</Button> 个记录</>}
            {...paginationProps}
          />
        </Card.Content>
      </Card>
    </div>
  );
}

export default MultiTreeTable;
