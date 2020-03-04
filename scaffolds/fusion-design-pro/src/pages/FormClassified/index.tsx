import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import ClassifiedForm from './components/ClassifiedForm';

const { Cell } = ResponsiveGrid;

const FormClassified = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="分类表单"
          description="分类表单分类表单分类表单分类表单分类表单分类表单分类表单"
          breadcrumbs={[{ name: '表单页面' }, { name: '分类表单' }]}
        />
      </Cell>

      <Cell colSpan={12}>
        <ClassifiedForm />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FormClassified;
