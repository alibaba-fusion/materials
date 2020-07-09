import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import MergeCellTable from './components/MergeCellTable';

const { Cell } = ResponsiveGrid;

const FusionMergecellTable = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="合并单元格"
          breadcrumbs={[
            { name: '列表页面' },
            { name: '表格列表' },
            { name: '合并单元格' },
          ]}
          description="合并单元格合并单元格合并单元格合并单元格合并单元格合并单元格合并单元格合并单元格合并单元格合并单元格"
        />
      </Cell>

      <Cell colSpan={12}>
        <MergeCellTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FusionMergecellTable;
