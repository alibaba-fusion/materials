// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from 'layouts/HeaderAsideLayout';
import HeaderLayout from 'layouts/HeaderLayout';

import Home from 'pages/home/index';
import Page1 from 'pages/page1/index';
import Help from 'pages/help/index';
import Register from 'pages/Form/index';
import BasicTable from 'pages/BasicTable/index';

import Detail from './pages/Detail/index';
import ServerError from './pages/Exception/ServerError';
import Empty from './pages/Exception/Empty';
import Forbidden from './pages/Exception/Forbidden';
import NotFound from './pages/Exception/NotFound';
import Success from './pages/Success/index';
import Fail from './pages/Fail/index';

const routerConfig = [
  {
    path: '/',
    exact: true,
    layout: HeaderAsideLayout,
    component: BasicTable,
  },
  {
    path: '/list/baseTable',
    exact: true,
    layout: HeaderAsideLayout,
    component: BasicTable,
  },
  {
    path: '/list/highLevelTable',
    exact: true,
    layout: HeaderAsideLayout,
    component: Home,
  },
  {
    path: '/subpage/page1',
    exact: true,
    layout: HeaderAsideLayout,
    component: Page1,
  },
  {
    path: '/individual/help',
    exact: true,
    layout: HeaderLayout,
    component: Help,
  },
  {
    path: '/form/register',
    exact: true,
    layout: HeaderAsideLayout,
    component: Register,
  },
  {
    path: '/list/table',
    exact: true,
    layout: HeaderAsideLayout,
    component: BasicTable,
  },
  {
    path: '/detail/baseDetail',
    exact: true,
    layout: HeaderAsideLayout,
    component: Detail,
  },
  {
    path: '/exception/500',
    layout: HeaderLayout,
    component: ServerError,
  },
  {
    path: '/exception/403',
    layout: HeaderLayout,
    component: Forbidden,
  },
  {
    path: '/exception/204',
    layout: HeaderLayout,
    component: Empty,
  },
  {
    path: '/exception/404',
    layout: HeaderLayout,
    component: NotFound,
  },
  {
    path: '/result/success',
    layout: HeaderLayout,
    component: Success,
  },
  {
    path: '/result/fail',
    layout: HeaderLayout,
    component: Fail,
  },
];

export default routerConfig;
