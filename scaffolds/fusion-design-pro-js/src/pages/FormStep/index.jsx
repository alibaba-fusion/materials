import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import StepForm from './components/StepForm';

const { Cell } = ResponsiveGrid;

const FormStep = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="分步表单"
        description="分步表单分步表单分步表单分步表单分步表单分步表单分步表单"
        breadcrumbs={[
          {
            name: '表单页面',
          },
          {
            name: '分步表单',
          },
        ]}
      />
    </Cell>

    <Cell colSpan={12}>
      <StepForm />
    </Cell>
  </ResponsiveGrid>
);

export default FormStep;
