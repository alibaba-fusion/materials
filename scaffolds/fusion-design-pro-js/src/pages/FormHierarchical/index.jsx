import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import HierarchicalForm from './components/HierarchicalForm';

const { Cell } = ResponsiveGrid;

const FormHierarchical = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="分级表单"
        description="分级表单分级表单分级表单分级表单分级表单分级表单分级表单"
        breadcrumbs={[
          {
            name: '表单页面',
          },
          {
            name: '分级表单',
          },
        ]}
      />
    </Cell>

    <Cell colSpan={12}>
      <HierarchicalForm />
    </Cell>
  </ResponsiveGrid>
);

export default FormHierarchical;
