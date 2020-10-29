/* eslint-disable no-unused-vars */
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const cwd = process.cwd();
const blocksPath = path.join(cwd, 'blocks');
const blocksList = fs.readdirSync(blocksPath);

const updateMap = [

];
const arr = [];
blocksList.forEach(block => {
  const blockDirPath = path.join(cwd, 'blocks', block);
  const blockPkgjson = path.join(blockDirPath, 'package.json');

  if (!fs.existsSync(blockDirPath) || !fs.existsSync(blockPkgjson)) {
    console.log(block, 'not exist');
    return false;
  }

  const packageInfo = require(blockPkgjson);
  const { version, name } = packageInfo;

  // 升级 updateMap 中区块的版本号
  // if (updateMap.indexOf(block) > -1) {
  // const versions = packageInfo.version.split('.');
  // versions[2] = parseInt(versions[2]) + 1;
  // packageInfo.version = versions.join('.');

  // fs.writeJsonSync(blockPkgjson, packageInfo, { spaces: 2 });
  // }

  // 修改package json 中的 files
  // packageInfo.files = [
  //   "build/",
  //   "screenshot.png",
  //   "src/!(style.d.ts)"
  // ];

  // fs.writeJsonSync(blockPkgjson, packageInfo, { spaces: 2 });


  // 批量写入 tsconfig.json
  // fs.writeJSONSync(path.join(blockDirPath, 'tsconfig.json'), {
  //   "extends": "../../tsconfig.block.json",
  //   "include": [
  //     "./src/**/*.ts",
  //     "./src/**/*.tsx"
  //   ],
  //   "exclude": ["node_modules", "build"]
  // }, {
  //   spaces: 2,
  // });

  // 批量写入 src/style.d.ts
  //   fs.writeFileSync(path.join(blockDirPath, 'src/style.d.ts'), `declare module '*.module.scss' {
  //   const classes: { [key: string]: string };
  //   export default classes;
  // }`);


  // 批量修改 package.json
  // if (!fs.existsSync(blockPkgjson)) {
  //   console.log(blockPkgjson, 'not exist');
  //   return false;
  // }
  // // const {version, name} = packageInfo;
  // if (!name.match('@alifd/fusion-')) {
  //   console.log(name, 'not match @alifd/fusion-');
  //   return false;
  // }
  // packageInfo.scripts.design = '../../node_modules/.bin/build-scripts build --design --config ../../build.block.json';

  // packageInfo.scripts.prepublishOnly = 'npm run build -- --design && npm run screenshot';

  // if (!('publishConfig' in packageInfo)) {
  // packageInfo.publishConfig = {
  //   'access': 'public',
  // };
  // packageInfo.repository ={
  //   'type': 'git',
  //   'url': `https://github.com/alibaba-fusion/materials/tree/master/blocks/${block}`,
  // };
  // }
  // if (!('views' in packageInfo.blockConfig)) {
  //   packageInfo.blockConfig.views = [{
  //     'title': '',
  //     'props': {},
  //     'screenshot': '',
  //     'html': '',
  //   }];
  // }
  // fs.writeJSONSync(blockPkgjson, packageInfo, {
  //   spaces: 2
  // });


  // 批量发布区块
  let stdout = '';
  try {
    stdout = execSync(`npm view ${name} version`).toString();
  } catch (err) {
    console.log(`==========${name} 区块从未发布过，将直接发布====================`);
  }

  if (stdout.match(version)) {
    console.error(`${name} ${version} 已存在！！！！`);
    arr.push(`${name}@${version}`);
    return false;
  }

  try {
    // execSync(`cd blocks/${block}; tnpm install; tnpm install build-plugin-fusion-material; tnpm uninstall @alifd/next;tnpm install @alifd/next@1.19.2; npm publish;`);
    execSync(`cd blocks/${block};tnpm install bizcharts;npm publish;`);
  } catch (err) {
    console.log(err);
  }
});
