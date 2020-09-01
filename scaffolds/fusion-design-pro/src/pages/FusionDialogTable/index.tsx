import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import DialogTable from './components/DialogTable';

const { Cell } = ResponsiveGrid;

const FusionDialogTable = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="弹窗表格"
          breadcrumbs={[
            { name: '列表页面' },
            { name: '表格列表' },
            { name: '弹窗表格' },
          ]}
          description="弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格"
        />
      </Cell>

      <Cell colSpan={12}>
        <DialogTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FusionDialogTable;
