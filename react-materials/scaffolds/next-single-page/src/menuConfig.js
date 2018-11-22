// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
];

const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    name: '子页面',
    path: '/subpage',
    icon: 'home',
    children: [
      {
        name: 'page1',
        path: '/subpage/page1',
      },
      {
        name: 'page2',
        path: '/subpage/page2',
      },
    ],
  },
  {
    name: '帮助',
    path: '/help',
    icon: 'help',
  },
];

export { headerMenuConfig, asideMenuConfig };
