import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import GroupForm from './components/GroupForm';

const { Cell } = ResponsiveGrid;

const FormGroup = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="分组表单"
          description="分组表单分组表单分组表单分组表单分组表单分组表单分组表单"
          breadcrumbs={[{ name: '表单页面' }, { name: '分组表单' }]}
        />
      </Cell>

      <Cell colSpan={12}>
        <GroupForm />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FormGroup;
