// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from 'layouts/HeaderAsideFooterLayout';
import HeaderLayout from 'layouts/HeaderLayout';

import Home from 'pages/home/index';
import Page1 from 'pages/page1/index';
import Help from 'pages/help/index';

const routerConfig = [
  {
    path: '/',
    exact: true,
    layout: HeaderAsideFooterLayout,
    component: Home,
  },
  {
    path: '/subpage/page1',
    exact: true,
    layout: HeaderAsideFooterLayout,
    component: Page1,
  },
  {
    path: '/help',
    exact: true,
    layout: HeaderAsideFooterLayout,
    component: Help,
  },
];

export default routerConfig;
