import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import TwoColumnForm from './components/TwoColumnForm';

const { Cell } = ResponsiveGrid;

const FormTwo = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="双列基础表单"
        description="双列基础表单双列基础表单双列基础表单双列基础表单双列基础表单双列基础表单双列基础表单"
        breadcrumbs={[
          {
            name: '表单页面',
          },
          {
            name: '双列基础表单',
          },
        ]}
      />
    </Cell>

    <Cell colSpan={12}>
      <TwoColumnForm />
    </Cell>
  </ResponsiveGrid>
);

export default FormTwo;
