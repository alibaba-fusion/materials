module.exports = {
  plugins: [
    ['build-plugin-fusion', {
      usePx2Vw: true,
      importOptions: {
        libraryDirectory: 'lib',
        customName: (name) => {
          if (['config-provider'].indexOf(name) !== -1) {
            return `@alifd/next/lib/${name}`;
          }
          return `@alifd/next/lib/${name}/mobile`;
        },
        customStyleName: (name) => {
          return `@alifd/next/lib/${name}/style.js`;
        },
      },
    }],
    [
      'build-plugin-moment-locales',
      {
        locales: ['zh-cn'],
      },
    ],
  ],
};
