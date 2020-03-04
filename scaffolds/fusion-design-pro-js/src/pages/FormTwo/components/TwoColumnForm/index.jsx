import React, { useState } from 'react';
import { Input, Box, Button, Form, Card, DatePicker, Message, Radio, Upload } from '@alifd/next';
import styles from './index.module.scss';

const FormItem = Form.Item;
const formItemLayout = {
  colSpan: 6,
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

const TwoColumnForm = props => {
  const { dataSource = DEFAULT_DATA, onSubmit = DEFAULT_ON_SUBMIT, onCancel = () => {} } = props;
  const [postData, setValue] = useState(dataSource);

  const formChange = value => {
    setValue(value);
  };

  return (
    <Card free className={styles.TwoColumnForm}>
      <Card.Content>
        <Form responsive fullWidth value={postData} labelAlign="top" onChange={formChange}>
          <FormItem {...formItemLayout} label="项目名称：" required>
            <Input placeholder="请输入项目名称" name="name" />
          </FormItem>

          <FormItem {...formItemLayout} label="项目所属分类：" required>
            <Input placeholder="请输入你的分类" name="category" />
          </FormItem>

          <FormItem {...formItemLayout} label="可访问日期：" required>
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

          <FormItem {...formItemLayout} colSpan={12} label="项目描述：">
            <Input.TextArea placeholder="请输入项目详细信息" name="desc" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            colSpan={12}
            help="请选择大小不超过5M的文件，支持doc，docx，xls，xlsx，zip格式"
          >
            <Upload
              name="pic"
              action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            >
              <Button
                type="normal"
                style={{
                  margin: '0 0 10px',
                }}
              >
                上传文件
              </Button>
            </Upload>
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

export default TwoColumnForm;
