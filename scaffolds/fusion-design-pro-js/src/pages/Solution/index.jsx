import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import Tasks from './components/Tasks';
import UserInfo from './components/UserInfo';
import SelectLang from './components/SelectLang';

const { Cell } = ResponsiveGrid;

const Solution = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="官方推荐方案"
        description="包括状态管理方案、多语言切换的示例"
        breadcrumbs={[]}
      />
    </Cell>

    <Cell colSpan={12}>
      <Tasks />
    </Cell>

    <Cell colSpan={12}>
      <UserInfo />
    </Cell>

    <Cell colSpan={12}>
      <SelectLang />
    </Cell>
  </ResponsiveGrid>
);

export default Solution;
