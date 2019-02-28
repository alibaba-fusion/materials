'use strict';

import React from 'react';
import TableCard from './components/TableCard';
import AuditTableCard from './components/AuditTableCard';
import './index.scss';

import { Step } from '@alifd/next';

const steps = [
  ['Step 1', '上传台账'],
  ['Step2', '底稿查看与提交'],
  ['Step3', '审核列表'],
];

class Page2 extends React.Component {
  state = {
    current: 0,
  };
  stepItemClick = index => {
    this.setState({
      current: index,
    });
  };
  render() {
    const { current } = this.state;
    return (
      <div className="whale-page">
        <div class="whale-page-title">{steps[current][1]}</div>
        <div class="whale-page-content">
          <div className="step-wrapper">
            <Step current={current} shape="circle">
              {steps.map((item, index) => (
                <Step.Item
                  key={index}
                  title={item[0]}
                  content={item[1]}
                  onClick={this.stepItemClick}
                />
              ))}
            </Step>
          </div>
          {current === 0 ? (
            <TableCard />
          ) : current === 1 ? (
            <TableCard readOnly />
          ) : (
            <AuditTableCard />
          )}
        </div>
      </div>
    );
  }
}

export default Page2;
