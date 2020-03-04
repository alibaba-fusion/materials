import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicList from './components/BasicList';

const { Cell } = ResponsiveGrid;

const TableListPage = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="表格列表"
        breadcrumbs={[
          {
            name: '列表页面',
          },
          {
            name: '表格列表',
          },
        ]}
        description="表格列表描述表格列表描述表格列表描述表格列表描述表格列表描述表格列表描述表格列表描述"
      />
    </Cell>

    <Cell colSpan={12}>
      <BasicList />
    </Cell>
  </ResponsiveGrid>
);

export default TableListPage;
