import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import ActionTable from './components/ActionTable';

const { Cell } = ResponsiveGrid;

const FusionActionTable = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="带操作列"
          breadcrumbs={[
            { name: '列表页面' },
            { name: '表格列表' },
            { name: '带操作列' },
          ]}
          description="带操作列带操作列带操作列带操作列带操作列带操作列带操作列带操作列带操作列带操作列"
        />
      </Cell>

      <Cell colSpan={12}>
        <ActionTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FusionActionTable;
