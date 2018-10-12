/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Input, Button, Checkbox, Grid, Form, Icon, SplitButton } from '@alifd/next';
import './RegisterForm.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

export default class RegisterForm extends Component {
  static displayName = 'RegisterForm';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        account: undefined,
        passwd: undefined,
        rePasswd: undefined,
        checkbox: false,
      },
    };
  }

  checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入新密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    console.log('stateValues:', stateValues);
    if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    return (
      <div className="register-form">
        <div style={styles.formContainer}>
          <h4 style={styles.formTitle}>注册</h4>
          <Form
          value={this.state.value}
          onChange={this.formChange}
          >
            <FormItem required requiredMessage="必填" style={styles.formItem}>
              <Input innerBefore={<Icon type="account" size="small" style={styles.inputIcon} />} name="account" hasBorder={false} maxLength={20} placeholder="会员名/邮箱/手机号"
              />
            </FormItem>

            <FormItem style={styles.formItem} validator={this.checkPasswd} >
              <Input innerBefore={<Icon type="set" size="small" style={styles.inputIcon} />} name="passwd" hasBorder={false} htmlType="password" placeholder="请输入密码" />
            </FormItem>

            <FormItem style={styles.formItem} validator={(rule, values, callback) =>
              this.checkPasswd2(
                rule,
                values,
                callback,
                this.state.value
              )
            }>
              <Input innerBefore={<Icon type="set" size="small" style={styles.inputIcon} />} name="rePasswd" hasBorder={false} htmlType="password" placeholder="两次输入密码保持一致" />
            </FormItem>

            <FormItem style={styles.formItem}>
              <Form.Submit
                type="primary"
                validate
                onClick={this.handleSubmit}
                style={styles.submitBtn}
              >
                登 录
              </Form.Submit >
            </FormItem>

            <Row className="tips" style={styles.tips}>
              <a href="/" style={styles.link}>
                立即登录
                </a>
              <span style={styles.line}>|</span>
              <a href="/" style={styles.link}>
                忘记密码
                </a>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '30px 40px',
    background: '#fff',
    borderRadius: '6px',
    boxShadow: '1px 1px 2px #eee',
  },
  formItem: {
    position: 'relative',
    marginBottom: '25px',
    flexDirection: 'column',
  },
  formTitle: {
    margin: '0 0 20px',
    textAlign: 'center',
    color: '#3080fe',
    letterSpacing: '12px',
  },
  inputIcon: {
    color: '#999',
  },
  submitBtn: {
    width: '240px',
    background: '#3080fe',
  },
  tips: {
    textAlign: 'center',
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontSize: '13px',
  },
  line: {
    color: '#dcd6d6',
    margin: '0 8px',
  },
};
