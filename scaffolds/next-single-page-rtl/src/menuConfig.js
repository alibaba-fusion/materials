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
    path: 'https://github.com/alibaba-fusion/next',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '更改配置',
    path: '/subpage/page1',
  },
  {
    name: '帮助中心',
    path: '/help',
  },
];

export { headerMenuConfig, asideMenuConfig };
