import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicForm from './components/BasicForm';

const { Cell } = ResponsiveGrid;

const FormBasic = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="单列基础表单"
          description="单列基础表单单列基础表单单列基础表单单列基础表单单列基础表单单列基础表单单列基础表单"
          breadcrumbs={[{ name: '表单页面' }, { name: '单列基础表单' }]}
        />
      </Cell>

      <Cell colSpan={12}>
        <BasicForm />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FormBasic;
