import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import FailDetail from './components/FailDetail';

const { Cell } = ResponsiveGrid;

const FeedbackFail = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="失败页面"
        breadcrumbs={[
          {
            name: 'Feedback页面',
          },
          {
            name: '结果页面',
          },
          {
            name: '失败页面',
          },
        ]}
        description="失败页面描述失败页面描述失败页面描述失败页面描述失败页面描述失败页面描述失败页面描述"
      />
    </Cell>

    <Cell colSpan={12}>
      <FailDetail />
    </Cell>
  </ResponsiveGrid>
);

export default FeedbackFail;
