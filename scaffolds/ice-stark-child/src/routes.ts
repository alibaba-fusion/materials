import { renderNotFound } from '@ice/stark-app';
import BasicLayout from '@/layouts/BasicLayout';

import Detail from '@/pages/Detail';
import List from '@/pages/List';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: List,
      },
      {
        path: '/detail',
        component: Detail,
      },
      {
        component: () => {
          return renderNotFound();
        },
      },
    ],
  },
];

export default routerConfig;
