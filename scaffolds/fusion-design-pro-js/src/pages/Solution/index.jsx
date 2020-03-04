import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import SelectLang from './components/SelectLang';
import UserInfo from './components/UserInfo';

const { Cell } = ResponsiveGrid;

const Solution = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <SelectLang />
    </Cell>

    <Cell colSpan={12}>
      <UserInfo />
    </Cell>
  </ResponsiveGrid>
);

export default Solution;
