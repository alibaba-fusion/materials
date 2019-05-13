/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';

import { Menu, Card } from '@alifd/next';

import styles from './index.module.scss';

const { Item, Group, Divider } = Menu;

const mockData = {
  'new-1': {
    question: '快速上手',
    answer: '快速上手快速上手快速上手快速上手',
  },
  'group-1-1': {
    question: '配置组件主题样式',
    answer: '配置组件主题样式配置组件主题样式配置组件主题样式配置组件主题样式',
  },
  'group-1-2': {
    question: '配置ICON',
    answer: '配置ICON配置ICON配置ICON配置ICON',
  },
  'group-2-1': {
    question: '使用主题包',
    answer: '使用主题包使用主题包使用主题包使用主题包',
  },
  'group-2-2': {
    question: '使用模块模板',
    answer: '使用模块模板使用模块模板使用模块模板使用模块模板',
  },
};

export default class FormCard extends Component {
  state = {
    selectedKeys: 'new-1',
  };

  handleSelect = selectedKeys => {
    this.setState({
      selectedKeys,
    });
  };
  onItemClick = key => {
    document.getElementById('answers').focus();
  };
  render() {
    return (
      <div className={styles.helpeCenter}>
        <Menu
          className={styles.menu}
          selectMode="single"
          selectedKeys={this.state.selectedKeys}
          onSelect={this.handleSelect}
          onItemClick={this.onItemClick}
        >
          <Group label="新手指南">
            <Item key="new-1">快速上手</Item>
          </Group>
          <Divider />
          <Group label="设计师指南">
            <Item key="group-1-1">配置组件主题样式</Item>
            <Item key="group-1-2">配置ICON</Item>
          </Group>
          <Divider />
          <Group label="开发者指南">
            <Item key="group-2-1">使用主题包</Item>
            <Item key="group-2-2">使用模块模板</Item>
          </Group>
        </Menu>
        <Card
          id="answers"
          className={styles.card}
          title={mockData[this.state.selectedKeys].question}
          contentHeight="auto"
          role="main"
        >
          {mockData[this.state.selectedKeys].answer}
        </Card>
      </div>
    );
  }
}
