import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';

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
