import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicDetail from './components/BasicDetail';

const { Cell } = ResponsiveGrid;

const BasicDetailPage = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="详情页面"
        breadcrumbs={[
          {
            name: '详情页面',
          },
          {
            name: '基础详情',
          },
        ]}
        description="基础详情描述基础详情描述基础详情描述基础详情描述基础详情描述基础详情描述基础详情描述"
      />
    </Cell>

    <Cell colSpan={12}>
      <BasicDetail />
    </Cell>
  </ResponsiveGrid>
);

export default BasicDetailPage;
