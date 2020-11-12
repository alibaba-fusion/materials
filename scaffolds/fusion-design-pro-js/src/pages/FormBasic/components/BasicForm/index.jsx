import React, { useState } from 'react';
import { Input, Form, Box, Button, Card, DatePicker, Message, Radio, Upload } from '@alifd/next';
import styles from './index.module.scss';

const FormItem = Form.Item;
const formItemLayout = {
  colSpan: 12,
};
const DEFAULT_DATA = {
  type: 'private',
};

const DEFAULT_ON_SUBMIT = (values, errors) => {
  if (errors) {
    console.log('errors', errors);
    return;
  }

  console.log('values:', values);
  Message.success('提交成功');
};

const BasicForm = (props) => {
  const { dataSource = DEFAULT_DATA, onSubmit = DEFAULT_ON_SUBMIT, onCancel = () => {} } = props;
  const [postData, setValue] = useState(dataSource);

  const formChange = (values) => {
    setValue(values);
  };

  return (
    <Card free>
      <Card.Content>
        <Form className={styles.BasicForm} responsive fullWidth value={postData} labelAlign="top" onChange={formChange}>
          <FormItem {...formItemLayout} label="项目名称：" required requiredMessage="必填">
            <Input placeholder="请输入项目名称" name="name" />
          </FormItem>

          <FormItem {...formItemLayout} label="项目所属分类：" required requiredMessage="必填">
            <Input placeholder="请输入你的分类" name="category" />
          </FormItem>

          <FormItem {...formItemLayout} label="可访问日期：" required requiredMessage="必填">
            <DatePicker.RangePicker name="date" />
          </FormItem>

          <FormItem {...formItemLayout} label="项目权限：">
            <Radio.Group name="type" aria-labelledby="authority of project">
              <Radio id="private" value="private">
                私密项目
              </Radio>
              <Radio id="internal" value="internal">
                内部项目
              </Radio>
              <Radio id="publish" value="publish">
                开放目
              </Radio>
            </Radio.Group>
          </FormItem>

          <FormItem {...formItemLayout} label="上传封面：">
            <Upload shape="card" name="pic">
              上传图片
            </Upload>
          </FormItem>

          <FormItem {...formItemLayout} label="项目描述：">
            <Input.TextArea placeholder="请输入项目详细信息" name="desc" />
          </FormItem>

          <FormItem colSpan={12}>
            <Box spacing={8} direction="row">
              <Form.Submit type="primary" onClick={onSubmit} validate>
                提交
              </Form.Submit>
              <Button onClick={onCancel} type="secondary">
                取消
              </Button>
            </Box>
          </FormItem>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default BasicForm;
