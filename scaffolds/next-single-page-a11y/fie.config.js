module.exports = {
  // 当前项目使用的fie套件
  toolkit: 'fie-toolkit-next',

  toolkitConfig: {
    // 本地服务器端口号
    port: 9000,
    // 是否自动打开浏览器
    open: true,
    // 打开浏览器后 自动打开的 目标页面
    openTarget: 'demos/index.html',
    // 文件修改后是否自动刷新浏览器
    liveload: true,
  },

  tasks: {
    start: [
      {
        // 将当前目录链接到fie 本地cdn目录
        command: 'fie link',
      },
      {
        // 执行build目录的copy
        command: 'node build.js',
      },
    ],
    build: [
      {
        // 清空文件
        command: 'rm -rf build',
      },
      {
        // 同步版本号
        command: 'fie git sync',
      },
      {
        // 同步类库到build/lib目录
        command: 'node build.js',
      },
      {
        // 检测dependencies中的版本依赖
        command: 'fie check',
      },
      {
        // console检测
        command: 'fie console detect --force',
      },
    ],
    publish: [],
    open: [
      {
        // 打开gitlab上的项目
        command: 'fie git open',
      },
    ],
  },
};
