import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import FilterTable from './components/FilterTable';

const { Cell } = ResponsiveGrid;

const FusionFilterTable = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="基础过滤"
          breadcrumbs={[
            { name: '列表页面' },
            { name: '表格列表' },
            { name: '基础过滤' },
          ]}
          description="基础过滤基础过滤基础过滤基础过滤基础过滤基础过滤基础过滤基础过滤基础过滤基础过滤"
        />
      </Cell>

      <Cell colSpan={12}>
        <FilterTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FusionFilterTable;
