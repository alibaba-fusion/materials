import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Message } from '@alifd/next';

@withRouter
class SuccessDetail extends Component {
  handleBackClick = () => {
    this.props.history.push('/');
  };

  handleMoreClick = () => {
    Message.success('自定义查看更多的内容');
  };

  render() {
    return (
      <div style={styles.container}>
        <img
          src="https://img.alicdn.com/tfs/TB1Tr6bU7zoK1RjSZFlXXai4VXa-156-156.png"
          style={styles.img}
          alt=""
        />
        <h1 style={styles.title}>提交成功</h1>
        <p style={styles.summarize}>
          如果有更多细节需要展示，可以补充在下面这里
        </p>
        <div style={styles.button}>
          <Button
            type="normal"
            style={{ marginRight: '6px' }}
            onClick={this.handleBackClick}
          >
            返回首页
          </Button>
          <Button type="primary" onClick={this.handleMoreClick}>
            查看更多
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '80px 40px',
    textAlign: 'center',
  },
  img: {
    Width: '58px',
    height: '58px',
  },
  title: {
    margin: '20px 0',
    fontSize: '22px',
    fontWeight: 'normal',
  },
  summary: {
    margin: '0',
    fontSize: '14px',
    color: '#666',
  },
};

export default SuccessDetail;
