import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import SuccessDetail from './components/SuccessDetail';

const { Cell } = ResponsiveGrid;

const FeedbackSuccess = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="成功页面"
          breadcrumbs={[
            {
              name: 'Feedback页面',
            },
            {
              name: '结果页面',
            },
            {
              name: '成功页面',
            },
          ]}
          description="成功页面描述成功页面描述成功页面描述成功页面描述成功页面描述成功页面描述成功页面描述"
        />
      </Cell>

      <Cell colSpan={12}>
        <SuccessDetail />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FeedbackSuccess;
