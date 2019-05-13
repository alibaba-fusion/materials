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
    path: 'https://github.com/alibaba-fusion/next',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://fusion.design/help.html#/',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  // {
  //   name: '更改配置',
  //   path: '/subpage/page1',
  //   icon: 'home',
  // },
  // {
  //   name: '帮助中心',
  //   path: '/help',
  //   icon: 'help',
  // },
  {
    name: '列表页',
    path: '/list',
    icon: 'list',
    children: [
      {
        name: '基础表格',
        path: '/list/baseTable',
      },
      {
        name: '高级表格',
        path: '/list/highLevelTable',
        icon: 'home',
      },
    ],
  },
  {
    name: '表单页',
    path: '/form',
    icon: 'form',
    children: [
      {
        name: '基础表单',
        path: '/form/register',
      },
    ],
  },
  {
    name: '详情页',
    path: '/detail',
    icon: 'detail',
    children: [
      {
        name: '基础详情',
        path: '/detail/baseDetail',
      },
    ],
  },
  {
    name: '个人页',
    path: '/individual',
    icon: 'individual',
    children: [
      {
        name: '帮助中心',
        path: '/individual/help',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
