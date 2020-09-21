// node scripts/generate.js fusion-design-pro
const path = require('path');
const rimraf = require('rimraf');
const Generator = require('/Users/guoda/work/ice/ice-inside/tools/ice-scaffold-generator');

const rootPath = path.join(__dirname, '../scaffolds/', process.argv[2]);

// 清空 scaffold 的文件，除了 .template
rimraf.sync(path.join(rootPath, '!(template|node_modules|tmp)'));

console.log('generate scaffold in', rootPath);

const generate = new Generator({
  rootDir: rootPath,
  // configFile: configPath,
  template: path.join(rootPath, '.template'),
  useLocalBlocks: true,
});
generate.init();
