import { renderNotFound, isInIcestark } from '@ice/stark-app';
import BasicLayout from '@/layouts/BasicLayout';
import Detail from '@/pages/Detail';
import List from '@/pages/List';
import NotFound from '@/components/NotFound';

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
        // 微应用独立运行 404 路由渲染 NotFound 组件
        component: isInIcestark() ? () => renderNotFound() : NotFound,
      },
    ],
  },
];

export default routerConfig;
