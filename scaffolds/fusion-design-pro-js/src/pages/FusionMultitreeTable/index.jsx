import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import MultiTreeTable from './components/MultiTreeTable';

const { Cell } = ResponsiveGrid;

const FusionMultitreeTable = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="多层树表"
        breadcrumbs={[
          {
            name: '列表页面',
          },
          {
            name: '表格列表',
          },
          {
            name: '多层树表',
          },
        ]}
        description="多层树表多层树表多层树表多层树表多层树表多层树表多层树表多层树表多层树表"
      />
    </Cell>

    <Cell colSpan={12}>
      <MultiTreeTable />
    </Cell>
  </ResponsiveGrid>
);

export default FusionMultitreeTable;
