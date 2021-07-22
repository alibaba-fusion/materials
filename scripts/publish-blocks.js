/* eslint-disable no-unused-vars */
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const cwd = process.cwd();
const TYPE = process.env.TYPE || 'blocks'; // scaffolds | blocks
const blocksPath = path.join(cwd, TYPE);
const blocksList = fs.readdirSync(blocksPath);
// const blocksList = [
//   'ActionTable',
//   'ClassifiedForm',
//   'ExpandTable',
//   'FlowForm',
//   'FusionCardRankChart',
//   'PageHeader',
//   'WorkTable'
// ];

const published = [];
const failedPublished = [];
const notPublished = [];

const arr = [];
blocksList.forEach(block => {
  const blockDirPath = path.join(cwd, TYPE, block);
  const blockPkgjson = path.join(blockDirPath, 'package.json');

  if (!fs.existsSync(blockDirPath) || !fs.existsSync(blockPkgjson)) {
    console.log(block, 'not exist');
    return false;
  }

  const packageInfo = require(blockPkgjson);
  const {version, name} = packageInfo;

  if (version === 'latest') {
    return;
  }

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
    notPublished.push({
      name, version
    });
    return false;
  }

  try {
    console.log(`publish start: ${name} ${version}`);
    const cmd = TYPE === 'scaffolds'
                  ? `cd ${TYPE}/${block};tnpm update;npm publish;`
                  : `cd blocks/${block};tnpm update;tnpm install bizcharts@3.x @antv/data-set@0.10.x;npm publish;`
    execSync(cmd, {
      stdio: 'inherit'
    });
    published.push({
      name, version
    });

    console.log(`publish success: ${name} ${version}`);
  } catch (err) {
    failedPublished.push({
      name, version
    });
    console.log(`publish failed: ${name} ${version}`, err);
  }
});

console.log('not published', notPublished);
console.log('publish failed', failedPublished);
console.log('publish successed', published);
