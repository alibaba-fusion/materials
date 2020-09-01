import * as React from 'react';
import { Card, Table, Pagination, Field, Button } from '@alifd/next';
import { useFusionTable } from 'ahooks';

import styles from './index.module.scss';

const { useState } = React;

const getTableData = ({ current, pageSize }, formData: any): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });
  return fetch(`https://randomuser.me/api?results=${pageSize}&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: 55,
      list: res.results.slice(0, 10),
    }));
};

function tableActions(val: string, index: number, record: any) {
  return <div className={styles.tableActions}>
    <Button type="primary" text onClick={() => console.log(record, '操作1')}>操作1</Button>
    <Button type="primary" text onClick={() => console.log(record, '操作2')}>操作2</Button>
    <Button type="primary" text onClick={() => console.log(record, '操作3')}>操作3</Button>
  </div>
}
function subTableActions(val: string, index: number, record: any) {
  return <div className={styles.tableActions}>
    <Button type="primary" text onClick={() => console.log(record, '子表格操作1')}>子表格操作1</Button>
  </div>
}


function SubTable(props: any) {
  return <Table dataSource={props.dataSource} size="small"  hasBorder={false} primaryKey="postcode">
    <Table.Column title="country" dataIndex="country" />
    <Table.Column title="state" dataIndex="state" />
    <Table.Column title="city" dataIndex="city" />
    <Table.Column title="street" dataIndex="street.name" />
    <Table.Column  cell={subTableActions} />
  </Table>;
}

export default function ExpandTable() {
  const field = Field.useField([]);
  const { paginationProps, tableProps } = useFusionTable(getTableData, {
    field,
  });
  const [openRows, setOpenrows] = useState([]);
  return (
    <Card free className={styles.container}>
      <Card.Content>
        <Table.StickyLock {...tableProps} 
          tableWidth={1000} 
          hasBorder={false} 
          primaryKey="email" 
          expandedRowRender={record => <SubTable dataSource={[record.location]} /> }
          openRowKeys={openRows}
          onRowOpen={keys => setOpenrows(keys)}
          expandedRowIndent={[0, 0]}>
          <Table.Column title="name" dataIndex="name.last" lock width={140} />
          <Table.Column title="email" dataIndex="email" width={500} />
          <Table.Column title="phone" dataIndex="phone" width={300} />
          <Table.Column title="username" dataIndex="login.username" width={300} />
          <Table.Column title="uuid" dataIndex="login.uuid" width={300} />
          <Table.Column title="gender" dataIndex="gender" width={200} />
          <Table.Column width={500} cell={tableActions}/>
        </Table.StickyLock>
        <Pagination style={{ marginTop: 16, textAlign: 'right' }} {...paginationProps} />
      </Card.Content>
    </Card>
  );
}
