/* eslint-disable @iceworks/best-practices/no-secret-info */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Input, Message, Form } from '@alifd/next';
import { useInterval } from './utils';
import styles from './index.module.css';

const { useState } = React;
const { Item } = Form;
export default function RegisterBlock() {
  const [postData, setValue] = useState({
    email: '',
    password: '',
    rePassword: '',
    phone: '',
    code: '',
  });
  const [isRunning, checkRunning] = useState(false);
  const [second, setSecond] = useState(59);
  useInterval(
    () => {
      setSecond(second - 1);

      if (second <= 0) {
        checkRunning(false);
        setSecond(59);
      }
    },
    isRunning ? 1000 : null,
  );

  const formChange = (value) => {
    setValue(value);
  };

  const sendCode = (values, errors) => {
    if (errors) {
      return;
    } // get values.phone

    checkRunning(true);
  };

  const checkPass = (rule, values, callback) => {
    if (values && values !== postData.password) {
      return callback('密码不一致');
    } else {
      return callback();
    }
  };

  const handleSubmit = (values, errors) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }

    console.log('values:', values);
    Message.success('注册成功');
  };

  return (
    <div className={styles.registerBlock}>
      <div className={styles.innerBlock}>
        <a href="#">
          <img
            className={styles.innerBlockLogo}
            src="https://img.alicdn.com/tfs/TB1KtN6mKH2gK0jSZJnXXaT1FXa-1014-200.png"
            alt="logo"
          />
        </a>
        <p className={styles.innerBlockDesc}>注册账号</p>

        <Form value={postData} onChange={formChange} size="large">
          <Item format="email" required requiredMessage="必填">
            <Input name="email" size="large" maxLength={20} placeholder="邮箱" />
          </Item>
          <Item required requiredMessage="必填">
            <Input.Password name="password" size="large" htmlType="password" placeholder="至少六位密码，区分大小写" />
          </Item>
          <Item required requiredTrigger="onFocus" requiredMessage="必填" validator={checkPass}>
            <Input.Password name="rePassword" size="large" htmlType="password" placeholder="确认密码" />
          </Item>
          <Item format="tel" required requiredMessage="必填" asterisk={false}>
            <Input
              name="phone"
              size="large"
              innerBefore={
                <span className={styles.innerBeforeInput}>
                  +86
                  <span className={styles.innerBeforeLine} />
                </span>
              }
              maxLength={20}
              placeholder="手机号"
            />
          </Item>
          <Item required requiredMessage="必填">
            <Input
              name="code"
              size="large"
              innerAfter={
                <span className={styles.innerAfterInput}>
                  <span className={styles.innerAfterLine} />
                  <Form.Submit
                    text
                    type="primary"
                    style={{
                      width: 64,
                    }}
                    disabled={!!isRunning}
                    validate={['phone']}
                    onClick={sendCode}
                    className={styles.sendCode}
                  >
                    {isRunning ? `${second}秒后再试` : '获取验证码'}
                  </Form.Submit>
                </span>
              }
              maxLength={20}
              placeholder="验证码"
            />
          </Item>
          <Item>
            <Form.Submit type="primary" onClick={handleSubmit} className={styles.submitBtn} validate>
              注册账号
            </Form.Submit>
          </Item>
          <Item
            style={{
              textAlign: 'center',
            }}
          >
            <a href="/" className={styles.innerBlockLink}>
              使用已有账号登录
            </a>
          </Item>
        </Form>
      </div>
    </div>
  );
}
RegisterBlock.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  value: PropTypes.object,
};
RegisterBlock.defaultProps = {
  value: {},
};
