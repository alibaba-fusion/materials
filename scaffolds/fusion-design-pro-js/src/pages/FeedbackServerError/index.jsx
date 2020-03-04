import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import ServerError from './components/ServerError';

const { Cell } = ResponsiveGrid;

const FeedbackServerError = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="500页面"
        breadcrumbs={[
          {
            name: 'Feedback页面',
          },
          {
            name: '结果页面',
          },
          {
            name: '500页面',
          },
        ]}
        description="500页面描述500页面描述500页面描述500页面描述500页面描述500页面描述500页面描述"
      />
    </Cell>

    <Cell colSpan={12}>
      <ServerError />
    </Cell>
  </ResponsiveGrid>
);

export default FeedbackServerError;
