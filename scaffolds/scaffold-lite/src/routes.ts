import { IRouterConfig } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
