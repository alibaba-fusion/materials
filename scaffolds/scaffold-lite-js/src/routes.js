import { lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
