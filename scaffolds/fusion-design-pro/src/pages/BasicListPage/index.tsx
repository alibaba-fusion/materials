import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicList from './components/BasicList';

const { Cell } = ResponsiveGrid;

const BasicListPage = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="小卡片列表"
          breadcrumbs={[{ name: '列表页面' }, { name: '小卡片列表' }]}
          description="小卡片列表描述小卡片列表描述小卡片列表描述小卡片列表描述小卡片列表描述小卡片列表描述小卡片列表描述"
        />
      </Cell>

      <Cell colSpan={12}>
        <BasicList />
      </Cell>
    </ResponsiveGrid>
  );
};

export default BasicListPage;
