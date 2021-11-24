import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
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
