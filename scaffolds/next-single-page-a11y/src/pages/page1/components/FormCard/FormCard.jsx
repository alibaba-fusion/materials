/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';

import { Form, Input, Radio, Field, Message } from '@alifd/next';

import './index.module.scss';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const gender = [
  {
    value: 'male',
    label: 'male',
    disabled: false,
  },
  {
    value: 'female',
    label: 'female',
    disabled: false,
  },
];

export default class FormCard extends Component {
  field = new Field(this);
  invalidName = {};

  userExists(rule, value) {
    return new Promise((resolve, reject) => {
      if (!value) {
        resolve();
      } else {
        setTimeout(() => {
          if (value === 'frank') {
            reject([new Error('抱歉，用户名已被占用.')]);
          } else {
            resolve();
          }
        }, 500);
      }
    });
  }

  checkPass(rule, value, callback) {
    const { validate } = this.field;
    if (value) {
      validate(['rePasswd']);
    }
    callback();
  }

  checkPass2(rule, value, callback) {
    const { getValue } = this.field;
    if (value && value !== getValue('passwd')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  }

  validate = () => {
    this.field.validate();
    console.log(this.field.getErrors());
  };

  onSubmit = e => {
    e.preventDefault(); // form will auto submit if remove this line

    this.field.validate((errors, value) => {
      this.invalidName = {};

      for (const name in errors) {
        this.invalidName[name] = true;
      }

      console.log(errors, this.invalidName);
      for (const name in errors) {
        if (errors && errors[name]) {
          Message.error(`您有通过的校验项: ${errors[name].errors.join()}`);
          return false;
        }
      }
      Message.success('Submit form success');
    });
  };

  invalidNameFun = name => {
    return this.invalidName && this.invalidName[name];
  };

  render() {
    const { getState, getError } = this.field;

    return (
      <Form {...formItemLayout} field={this.field} onSubmit={this.onSubmit}>
        <FormItem
          label="用户名:"
          hasFeedback
          required
          validator={this.userExists.bind(this)}
          help={
            getState('username') === 'loading'
              ? 'Checking ...'
              : getError('username')
          }
        >
          <Input
            aria-required
            aria-invalid={this.invalidNameFun('username') ? true : undefined}
            placeholder="请输入用户名"
            name="username"
          />
        </FormItem>

        <FormItem
          label="密码:"
          hasFeedback
          required
          requiredMessage="请输入密码"
          validator={this.checkPass.bind(this)}
        >
          <Input
            aria-required
            aria-invalid={this.invalidNameFun('passwd') ? true : undefined}
            placeholder="请输入密码"
            htmlType="password"
            name="passwd"
          />
        </FormItem>

        <FormItem
          label="确认密码:"
          hasFeedback
          required
          requiredMessage="请再次输入您的密码"
          validator={this.checkPass2.bind(this)}
        >
          <Input
            aria-required
            aria-invalid={this.invalidNameFun('rePasswd') ? true : undefined}
            htmlType="password"
            placeholder="请输入相同的密码"
            name="rePasswd"
          />
        </FormItem>

        <FormItem
          label="性别:"
          hasFeedback
          required
          requiredMessage="请选择性别"
        >
          <RadioGroup
            aria-required
            aria-invalid={this.invalidNameFun('sex') ? true : undefined}
            id="sex"
            name="sex"
            dataSource={gender}
          />
        </FormItem>
        <FormItem wrapperCol={{ offset: 4 }}>
          <Form.Submit
            validate
            htmlType="submit"
            type="primary"
            style={{
              margin: '0 10px',
              'background-color': '#006159',
            }}
          >
            Submit
          </Form.Submit>
          <Form.Reset>Reset</Form.Reset>
        </FormItem>
      </Form>
    );
  }
}
