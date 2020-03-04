import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import CardList from './components/CardList';

const { Cell } = ResponsiveGrid;

const CardListPage = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="大卡片列表"
        breadcrumbs={[
          {
            name: '列表页面',
          },
          {
            name: '大卡片列表',
          },
        ]}
        description="大卡片列表描述大卡片列表描述大卡片列表描述大卡片列表描述大卡片列表描述大卡片列表描述大卡片列表描述"
      />
    </Cell>

    <Cell colSpan={12}>
      <CardList />
    </Cell>
  </ResponsiveGrid>
);

export default CardListPage;
