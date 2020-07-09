import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import ExpandTable from './components/ExpandTable';

const { Cell } = ResponsiveGrid;

const FusionExpandTable = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="可展开表"
          breadcrumbs={[
            { name: '列表页面' },
            { name: '表格列表' },
            { name: '可展开表' },
          ]}
          description="可展开表可展开表可展开表可展开表可展开表可展开表可展开表可展开表可展开表"
        />
      </Cell>

      <Cell colSpan={12}>
        <ExpandTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FusionExpandTable;
