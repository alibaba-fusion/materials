import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import ThreeColumnForm from './components/ThreeColumnForm';

const { Cell } = ResponsiveGrid;

const FormThree = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="三列基础表单"
        description="三列基础表单三列基础表单三列基础表单三列基础表单三列基础表单三列基础表单三列基础表单"
        breadcrumbs={[
          {
            name: '表单页面',
          },
          {
            name: '三列基础表单',
          },
        ]}
      />
    </Cell>

    <Cell colSpan={12}>
      <ThreeColumnForm />
    </Cell>
  </ResponsiveGrid>
);

export default FormThree;
