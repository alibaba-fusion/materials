// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
import Home from './pages/Home';
import Manager from './pages/Manager';
import Analyze from './pages/Analyze';

import GroupedForm from './pages/GroupedForm';
import Column from './pages/Column';
import StepForm from './pages/StepForm';
import SettingsForm from './pages/SettingsForm';
import ContentEditor from './pages/ContentEditor';
import Editor from './pages/Editor';
import Login from './pages/Login';

import FilterTable from './pages/FilterTable';
import Article from './pages/Article';
import Notice from './pages/Notice';

import Portlets from './pages/Portlets';
import Terms from './pages/Terms';

import Card from './pages/Card';
import Result from './pages/Result';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import Forbidden from './pages/Forbidden';
import Empty from './pages/Empty';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideFooterLayout,
    component: Manager,
  },
  {
    path: '/dashboard',
    layout: HeaderAsideFooterLayout,
    component: Manager,
    children: [
      {
        path: 'manager',
        layout: HeaderAsideFooterLayout,
        component: Manager,
      },
      {
        path: 'analyze',
        layout: HeaderAsideFooterLayout,
        component: Analyze,
      },
    ],
  },
  {
    path: '/front',
    layout: HeaderAsideFooterLayout,
    component: Card,
    children: [
      {
        path: 'card',
        layout: HeaderAsideFooterLayout,
        component: Card,
      },
    ],
  },
  {
    path: '/form',
    layout: HeaderAsideFooterLayout,
    component: GroupedForm,
    children: [
      {
        path: 'basic',
        layout: HeaderAsideFooterLayout,
        component: GroupedForm,
        children: [
          {
            path: 'group',
            layout: HeaderAsideFooterLayout,
            component: GroupedForm,
          },
          {
            path: 'column',
            layout: HeaderAsideFooterLayout,
            component: Column,
          },
          {
            path: 'step',
            layout: HeaderAsideFooterLayout,
            component: StepForm,
          },
        ],
      },
      {
        path: 'business',
        layout: HeaderAsideFooterLayout,
        component: SettingsForm,
        children: [
          {
            path: 'setting',
            layout: HeaderAsideFooterLayout,
            component: SettingsForm,
          },
          {
            path: 'edit',
            layout: HeaderAsideFooterLayout,
            component: ContentEditor,
          },
          {
            path: 'richtext',
            layout: HeaderAsideFooterLayout,
            component: Editor,
          },
          {
            path: 'login',
            layout: HeaderAsideFooterLayout,
            component: Login,
          },
        ],
      },
    ],
  },
  {
    path: '/table',
    layout: HeaderAsideFooterLayout,
    component: GroupedForm,
    children: [
      {
        path: 'filter',
        layout: HeaderAsideFooterLayout,
        component: FilterTable,
      },
    ],
  },
  {
    path: '/list',
    layout: HeaderAsideFooterLayout,
    component: Article,
    children: [
      {
        path: 'article',
        layout: HeaderAsideFooterLayout,
        component: Article,
      },
      {
        path: 'notice',
        layout: HeaderAsideFooterLayout,
        component: Notice,
      },
    ],
  },
  {
    path: '/portlets',
    layout: HeaderAsideFooterLayout,
    component: Portlets,
    children: [
      {
        path: 'base',
        layout: HeaderAsideFooterLayout,
        component: Portlets,
      },
      {
        path: 'terms',
        layout: HeaderAsideFooterLayout,
        component: Terms,
      },
    ],
  },
  {
    path: '/result',
    layout: HeaderAsideFooterLayout,
    component: Result,
  },
  {
    path: '/exception',
    layout: HeaderAsideFooterLayout,
    component: ServerError,
    children: [
      {
        path: '500',
        layout: HeaderAsideFooterLayout,
        component: ServerError,
      },
      {
        path: '403',
        layout: HeaderAsideFooterLayout,
        component: Forbidden,
      },
      {
        path: '204',
        layout: HeaderAsideFooterLayout,
        component: Empty,
      },
      {
        path: '404',
        layout: HeaderAsideFooterLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '*',
    layout: HeaderAsideFooterLayout,
    component: NotFound,
  },
];

export default routerConfig;
