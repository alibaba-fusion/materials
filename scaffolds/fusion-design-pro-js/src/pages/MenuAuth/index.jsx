import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';

const { Cell } = ResponsiveGrid;

const MenuAuth = () => (
  <ResponsiveGrid>
    <Cell colSpan={12}>
      <PageHeader title="菜单权限页面" description="菜单权限页面" />
    </Cell>
  </ResponsiveGrid>
);

export default MenuAuth;
