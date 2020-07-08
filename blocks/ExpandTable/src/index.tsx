import * as React from 'react';
import { Table, Pagination, Field, Button } from '@alifd/next';
import { useFusionTable } from 'ahooks';

import styles from './index.module.scss';

const { useState } = React;

const getTableData = ({ current, pageSize }, formData: Object): Promise<Result> => {
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
    <Button type="primary" text={true} onClick={() => console.log(record, '操作1')}>操作1</Button>
    <Button type="primary" text={true} onClick={() => console.log(record, '操作2')}>操作2</Button>
    <Button type="primary" text={true} onClick={() => console.log(record, '操作3')}>操作3</Button>
  </div>
}
function subTableActions(val: string, index: number, record: any) {
  return <div className={styles.tableActions}>
    <Button type="primary" text={true} onClick={() => console.log(record, '子表格操作1')}>子表格操作1</Button>
  </div>
}


function SubTable(props: any) {
  return <Table dataSource={props.dataSource} size="small"  hasBorder={true} primaryKey="postcode">
    <Table.Column title="country" dataIndex="country" width={140} />
    <Table.Column title="state" dataIndex="state" width={500} />
    <Table.Column title="city" dataIndex="city" width={500} />
    <Table.Column title="street" dataIndex="street.name" width={500} />
    <Table.Column  width={500} cell={subTableActions} />
  </Table>;
}




export default function ExpandTable() {
  const field = Field.useField([]);
  const { paginationProps, tableProps } = useFusionTable(getTableData, {
    field,
  });
  const [openRows, setOpenrows] = useState([]);
  return (
    <div className={styles.container}>
      <Table {...tableProps} primaryKey="email" expandedRowRender={record => <SubTable dataSource={[record.location]} /> }
        openRowKeys={openRows}
        onRowOpen={keys => setOpenrows(keys)}
        expandedRowIndent={[0, 0]}>
        <Table.Column title="name" dataIndex="name.last" width={140} />
        <Table.Column title="email" dataIndex="email" width={500} />
        <Table.Column title="phone" dataIndex="phone" width={500} />
        <Table.Column title="gender" dataIndex="gender" width={500} />
        <Table.Column width={500} cell={tableActions}/>

      </Table>
      <Pagination style={{ marginTop: 16, textAlign: "right" }} {...paginationProps} />
    </div>
  );
}
