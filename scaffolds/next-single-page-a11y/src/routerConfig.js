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
];

export default routerConfig;
