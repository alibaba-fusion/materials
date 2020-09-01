import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import SingleTreeTable from './components/SingleTreeTable';

const { Cell } = ResponsiveGrid;

const FusionSingletreeTable = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="单层树表"
          breadcrumbs={[
            { name: '列表页面' },
            { name: '表格列表' },
            { name: '单层树表' },
          ]}
          description="单层树表单层树表单层树表单层树表单层树表单层树表单层树表单层树表单层树表合并单元格"
        />
      </Cell>

      <Cell colSpan={12}>
        <SingleTreeTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FusionSingletreeTable;
