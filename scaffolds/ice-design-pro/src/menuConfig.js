// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: 'DashBoard',
    path: '/dashboard',
    icon: 'home',
    children: [
      {
        name: '管理页',
        path: '/dashboard/manager',
      },
      {
        name: '分析页',
        path: '/dashboard/analyze',
      },
    ],
  },
  {
    name: '前台信息展示',
    path: '/front',
    icon: 'home',
    children: [
      {
        name: '卡片',
        path: '/front/card',
      },
    ],
  },
  {
    name: '表单页',
    path: '/form',
    icon: 'edit',
    children: [
      {
        name: '基础表单',
        path: '/form/basic',
        children: [
          {
            name: '分组表单',
            path: '/form/basic/group',
          },
          {
            name: '分栏表单',
            path: '/form/basic/column',
          },
          {
            name: '步骤表单',
            path: '/form/basic/step',
          },
        ],
      },
      {
        name: '通用业务表单',
        path: '/form/business',
        children: [
          {
            name: '基础设置',
            path: '/form/business/setting',
          },
          {
            name: '内容编辑',
            path: '/form/business/edit',
          },
          {
            name: '富文本编辑器',
            path: '/form/business/richtext',
          },
          {
            name: '登录/注册',
            path: '/form/business/login',
          },
        ],
      },
    ],
  },
  {
    name: '表格',
    path: '/table',
    icon: 'table',
    children: [
      {
        name: '信息筛选',
        path: '/table/filter',
      },
    ],
  },
  {
    name: '列表',
    path: '/list',
    icon: 'ul-list',
    children: [
      {
        name: '文章列表',
        path: '/list/article',
      },
      {
        name: '系统消息列表',
        path: '/list/notice',
      },
    ],
  },
  {
    name: '内容页',
    path: '/portlets',
    icon: 'publish',
    children: [
      {
        name: '基础详情页',
        path: '/portlets/base',
      },
      {
        name: '条款协议页',
        path: '/portlets/terms',
      },
    ],
  },
  {
    name: '异常页',
    path: '/exception',
    icon: 'gaojingxinxi',
    children: [
      {
        name: '204',
        path: '/exception/204',
      },
      {
        name: '403',
        path: '/exception/403',
      },
      {
        name: '404',
        path: '/exception/404',
      },
      {
        name: '500',
        path: '/exception/500',
      },
    ],
  },
  {
    name: '结果页',
    path: '/result',
    icon: 'result',
  },
];

export { headerMenuConfig, asideMenuConfig };
