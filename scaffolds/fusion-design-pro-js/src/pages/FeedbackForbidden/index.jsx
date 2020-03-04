import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import Forbidden from './components/Forbidden';

const { Cell } = ResponsiveGrid;

const FeedbackForbidden = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="403页面"
        breadcrumbs={[
          {
            name: 'Feedback页面',
          },
          {
            name: '结果页面',
          },
          {
            name: '403页面',
          },
        ]}
        description="403页面描述403页面描述403页面描述403页面描述403页面描述403页面描述403页面描述"
      />
    </Cell>

    <Cell colSpan={12}>
      <Forbidden />
    </Cell>
  </ResponsiveGrid>
);

export default FeedbackForbidden;
