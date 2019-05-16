import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Message } from '@alifd/next';

@withRouter
class FailDetail extends Component {
  handleBackClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div style={styles.container}>
        <img
          src="https://img.alicdn.com/tfs/TB1tNe6UVzqK1RjSZFvXXcB7VXa-156-156.png"
          style={styles.img}
          alt=""
        />
        <h1 style={styles.title}>提交失败</h1>
        <p style={styles.summarize}>
          如果有更多细节需要展示，可以补充在下面这里
        </p>
        <div style={styles.button}>
          <Button type="normal" onClick={this.handleBackClick}>
            返回首页
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

export default FailDetail;
