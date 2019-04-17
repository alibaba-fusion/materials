/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';

import { Button, Icon, Dialog, Upload } from '@alifd/next';

import { renderIcon } from '../../utils';

import styles from './index.module.scss';

const defaultValue = [
  {
    uid: '0',
    name: 'IMG.png',
    state: 'done',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    size: 2000,
  },
  {
    uid: '1',
    name: 'IMG.png',
    percent: 50,
    state: 'uploading',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  },
  {
    uid: '2',
    name: 'IMG.png',
    state: 'error',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    errorMsg: 'fail to upload something',
  },
  {
    uid: '3',
    name: 'IMG.png',
    state: 'error',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  },
];

const oprations = () => {
  const map = {
    todo: '待进行',
    doing: '进行中',
    done: '已完成',
    failed: '异常',
  };
  return Object.keys(map).map(key => {
    return (
      <Button text tabIndex="-1">
        {renderIcon(key)}
        {map[key]}
      </Button>
    );
  });
};
const uploadFiles = () => {
  Dialog.confirm({
    title: '上传台账',
    content: (
      <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        defaultValue={defaultValue}
      >
        <Button type="secondary" style={{ margin: '0 0 10px' }}>
          Upload File
        </Button>
      </Upload>
    ),
    onOk: () => console.log('ok'),
    onCancel: () => console.log('cancel'),
  });
};

export default class FooterCard extends Component {
  render() {
    return (
      <div className={styles.oprations}>
        <div className={styles.leftOp}>
          <Button onClick={uploadFiles}>上传台账</Button>
          <Button text>
            <Icon type="set" />
            设置暂不上传
          </Button>
          <Button text>
            <Icon type="download" />
            下载模版
          </Button>
        </div>
        <div className={styles.rightOp} aria-hidden aria-label="示例说明">
          {oprations()}
        </div>
      </div>
    );
  }
}
