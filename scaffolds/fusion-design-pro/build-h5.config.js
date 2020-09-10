module.exports = {
  define: {
    // env: process.env.NODE_ENV,
    env: 'production',
  },
  plugins: [
    ['build-plugin-fusion', {
      importOptions: {
        libraryDirectory: 'lib',
        customName: (name) => {
          console.log(name, '===========')
          if(['config-provider'].indexOf(name) !== -1) {
            console.log('========--------')
            return `@alifd/next/lib/${name}`;
          }

          return `@alifd/next/lib/${name}/mobile`;
        },
        style: false
        // customStyleName: (name) => {
        //   console.log(name, '===========style.js')
        //   return `@alifd/next/lib/${name}/style.js`;
        // }
      }
    }]
  ],
}
