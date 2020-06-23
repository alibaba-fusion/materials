import * as React from 'react';
import { Table, Pagination } from '@alifd/next';
import { useFusionTable } from 'ahooks';

const MockData = [
  {
    gender: 'female',
    name: 'Sandø',
    email: 'melissa.sando@example.com',
    phone: '82757809',
    id: '27096632423',
    groupCount: 2,
    groupIndex: 0,
  },
  {
    gender: 'female',
    name: 'Sandø',
    email: 'torvald.ihle@example.com',
    phone: '(18) 2827578509',
    id: '27096632423',
    groupCount: 2,
    groupIndex: 1,
  },
  {
    gender: 'male',
    name: 'Ortega',
    email: 'jesus.ortega@example.com',
    phone: '902-264-345',
    id: '67967111-Y',
    groupCount: 3,
    groupIndex: 0,
  },
  {
    gender: 'male',
    name: 'Ortega',
    email: 'dositeu.daluz@example.com',
    phone: '(98) 2534-5239',
    id: '0b2dffc6a3e282dbee19b432371a1248',
    groupCount: 3,
    groupIndex: 1,
  },
  {
    gender: 'male',
    name: 'Ortega',
    email: 'marcel.rousseau@example.com',
    phone: '077 383 91 73',
    id: '3c51c6551a2a263ee1626d84e6426ea53fa60a3a',
    groupCount: 3,
    groupIndex: 2,
  },
  {
    gender: 'male',
    name: 'Berger',
    email: 'evan.berger@example.com',
    phone: '02-46-03-53-36',
    id: '1NNaN50556983-14',
    groupCount: 1,
    groupIndex: 0,
  },
];

const getTableData = () =>
  Promise.resolve({
    total: 55,
    list: MockData,
  });

const cellProps = (rowIndex, colIndex, dataIndex, record) => {
  // 只合并 name & gender
  if (colIndex === 0 || colIndex === 1) {
    const { groupCount, groupIndex } = record;
    if (groupIndex === 0) {
      return { rowSpan: groupCount };
    }
  }
};

export default function MergeCellTable() {
  const { paginationProps, tableProps, loading } = useFusionTable(
    getTableData,
    {}
  );
  return (
    <>
      <Table {...tableProps} primaryKey="email" cellProps={cellProps}>
        <Table.Column title="name" dataIndex="name" width={240} />
        <Table.Column title="gender" dataIndex="gender" width={500} />
        <Table.Column title="email" dataIndex="email" width={500} />
        <Table.Column title="phone" dataIndex="phone" width={500} />
      </Table>
      <Pagination
        style={{ marginTop: 16, textAlign: 'right' }}
        {...paginationProps}
      />
    </>
  );
}
