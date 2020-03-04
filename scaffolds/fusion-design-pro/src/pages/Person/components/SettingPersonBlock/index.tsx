import React, { useState } from 'react';
import { Box, ResponsiveGrid, Divider, Card, Avatar, Upload, Button, Form, Input, Message } from '@alifd/next';

import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;
const FormItem = Form.Item;

export interface DataSource {
  name?: string;
  phone?: string;
  vcode?: string;
  pic?: UploadProps[];
}

export interface SettingPersonProps {
  dataSource?: DataSource;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const DEFAULT_DATA: DataSource = {
  name: '阿里-Amy',
};

const DEFAULT_ON_SUBMIT = (values: SettingPersonProps, errors: []): void => {
  if (errors) {
    console.log('errors', errors);
    return;
  }
  console.log('values:', values);
  Message.success('更新成功');
};

const SettingPersonBlock: React.SFC<SettingPersonProps> = (props): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
    onSubmit = DEFAULT_ON_SUBMIT,
  } = props;

  const [postData, setValue] = useState<SettingPersonProps>(dataSource);
  const [buttonText, setButtonText] = useState('发送验证码');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const formChange = (values: SettingPersonProps): void => {
    setValue(values);
  };

  let coutDownTimer: NodeJS.Timeout;
  let countDown = 60;

  // 获取验证码按钮点击示例
  const onValideCodeButtonClicked = (): void => {
    setButtonDisabled(true);
    countDown = 60;
    setButtonText(`${countDown}s`);

    coutDownTimer = setInterval(() => {
      if (--countDown <= 0) {
        if (coutDownTimer) clearInterval(coutDownTimer);
        setButtonText('获取验证码');
        setButtonDisabled(false);
        return;
      }

      setButtonText(`${countDown}s`);
    }, 1000);
  };

  return (
    <Card free>
      <Card.Content 
        className={styles.SettingPersonBlock}
      >
        <Form
          value={postData}
          labelAlign="top"
          onChange={formChange}
          responsive
        >
          <FormItem label='' colSpan={12}>
            <ResponsiveGrid gap={10}>
              <Cell colSpan={2}><Avatar shape="circle" size={64} icon="account" /></Cell>
              <Cell colSpan={10} className={styles.changeLogo}>
                <Box spacing={12}>
                  <FormItem>
                    <Upload name='pic'>
                      <Button className={styles.uploadButton} type="normal">更新头像</Button>
                    </Upload>
                  </FormItem>
                  <Box>
                    <p>* 头像尽量上传超过 80px*80px, 但不要太大了。</p>
                    <p>* 请上传两倍图保证清晰度</p>
                  </Box>
                </Box>
              </Cell>
            </ResponsiveGrid>
          </FormItem>
          <FormItem colSpan={12}>
            <Divider />
          </FormItem>
          <FormItem label="昵称" required requiredMessage="必填" colSpan={12}>
            <Input placeholder="请输入昵称" name="name" />
          </FormItem>

          <FormItem label="手机：" colSpan={12}>
            <ResponsiveGrid gap={10} device="desktop">
              <Cell colSpan={8}><Input className={styles.validateCodeInput} placeholder="请输入手机" name="phone" /></Cell>
              <Cell colSpan={4}><Button className={styles.valideCodeButton} type="secondary" disabled={buttonDisabled} onClick={onValideCodeButtonClicked}>{buttonText}</Button></Cell>
            </ResponsiveGrid>
          </FormItem>

          <FormItem label="验证码" colSpan={12}>
            <Input placeholder="请输入验证码" name="vcode" />
          </FormItem>

          <FormItem colSpan={12}>
            <Box spacing={8} direction="row">
              <Form.Submit
                type="primary"
                onClick={onSubmit}
                validate
              >更新信息</Form.Submit>
            </Box>
          </FormItem>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default SettingPersonBlock;
