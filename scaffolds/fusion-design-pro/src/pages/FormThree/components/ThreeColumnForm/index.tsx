import React, { useState } from 'react';
import { Input, Box, Button, Select, Form, DatePicker, Message, Radio, Upload, Card } from '@alifd/next';

import { UploadProps } from '@alifd/next/types/upload';
import { Moment } from 'moment';

import styles from './index.module.scss';

const FormItem = Form.Item;

const formItemLayout = {
  colSpan: 4,
};

export interface DataSource {
  name?: string;
  category?: string;
  date?: [Moment, Moment];
  type?: string;
  pic?: UploadProps[];
  desc?: string;
  person?: string;
  state?: string;
}

export interface ThreeColumnFormProps {
  dataSource?: DataSource;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const DEFAULT_DATA: DataSource = {
  type: 'private',
};

const DEFAULT_ON_SUBMIT = (values: ThreeColumnFormProps, errors: []): void => {
  if (errors) {
    console.log('errors', errors);
    return;
  }
  console.log('values:', values);
  Message.success('提交成功');
};

const ThreeColumnForm: React.SFC<ThreeColumnFormProps> = (props): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
    onSubmit = DEFAULT_ON_SUBMIT,
    onCancel = () => { },
  } = props;

  const [postData, setValue] = useState<ThreeColumnFormProps>(dataSource);

  const formChange = (value: ThreeColumnFormProps) => {
    setValue(value);
  };

  return (
    <Card free className={styles.ThreeColumnForm}>
      <Card.Content>
        <Form
          responsive
          fullWidth
          value={postData}
          labelAlign="top"
          onChange={formChange}
        >
          <FormItem {...formItemLayout} label="项目名称：" required >
            <Input placeholder="请输入项目名称" name="name" />
          </FormItem>

          <FormItem {...formItemLayout} label="项目所属分类：" required >
            <Input placeholder="请输入你的分类" name="category" />
          </FormItem>

          <FormItem {...formItemLayout} label="申请日期：" required >
            <DatePicker.RangePicker name="date" />
          </FormItem>

          <FormItem {...formItemLayout} label="申请人：" required >
            <Input placeholder="申请人" name="person" />
          </FormItem>

          <FormItem {...formItemLayout} label="状态：" required>
            <Select name="state" aria-labelledby="state of project">
              <Select.Option id="step1" value="step1">阶段一</Select.Option>
              <Select.Option id="step2" value="step2">阶段二</Select.Option>
              <Select.Option id="step3" value="step3">阶段三</Select.Option>
            </Select>
          </FormItem>

          <FormItem {...formItemLayout} label="项目权限：" >
            <Radio.Group name="type" aria-labelledby="authority of project">
              <Radio id="private" value="private">私密项目</Radio>
              <Radio id="internal" value="internal">内部项目</Radio>
              <Radio id="publish" value="publish">开放目</Radio>
            </Radio.Group>
          </FormItem>

          <FormItem {...formItemLayout} colSpan={8} label="项目描述：" >
            <Input.TextArea placeholder="请输入项目详细信息" name="desc" />
          </FormItem>

          <FormItem {...formItemLayout} colSpan={12} help="请选择大小不超过5M的文件，支持doc，docx，xls，xlsx，zip格式">
            <Upload name="pic" action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload">
              <Button type="normal" style={{ margin: '0 0 10px' }}>上传文件</Button>
            </Upload>
          </FormItem>

          <FormItem colSpan={12}>
            <Box spacing={8} direction="row">
              <Form.Submit
                type="primary"
                onClick={onSubmit}
                validate
              >提交</Form.Submit>
              <Button onClick={onCancel} type="secondary">取消</Button>
            </Box>
          </FormItem>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default ThreeColumnForm;
