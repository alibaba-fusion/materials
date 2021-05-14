import { IRouterConfig } from 'ice';
import Layout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
