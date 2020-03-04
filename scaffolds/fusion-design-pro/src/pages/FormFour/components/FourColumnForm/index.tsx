import React, { useState } from 'react';
import { Input, Box, Button, Select, Form, Card, DatePicker, Message, Radio } from '@alifd/next';

import { Moment } from 'moment';

import styles from './index.module.scss';

const FormItem = Form.Item;

const formItemLayout = {
  colSpan: 3,
};

export interface DataSource {
  name?: string;
  category?: string;
  date?: [Moment, Moment];
  type?: string;
  person?: string;
  state?: string;
  relative?: string;
  relaventProject?: string;
};

export interface FourColumnFormProps {
  dataSource?: DataSource;
  onSubmit?: () => void;
  onCancel?: () => void;
};

const DEFAULT_DATA: DataSource = {
  type: 'private',
};

const DEFAULT_ON_SUBMIT = (values: FourColumnFormProps, errors: []): void => {
  if (errors) {
    console.log('errors', errors);
    return;
  }
  console.log('values:', values);
  Message.success('提交成功');
};

const FourColumnForm: React.SFC<FourColumnFormProps> = (props): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
    onSubmit = DEFAULT_ON_SUBMIT,
    onCancel = () => {},
  } = props;

  const [postData, setValue] = useState<FourColumnFormProps>(dataSource);

  const formChange = (value: FourColumnFormProps) => {
    setValue(value);
  };

  return (
    <Card free className={styles.FourColumnForm}>
      <Card.Content>
        <Form 
          responsive
          fullWidth
          value={postData} 
          labelAlign="top" 
          onChange={formChange}
        >
          <FormItem {...formItemLayout} label="项目名称：" required >
            <Input placeholder="请输入项目名称" name="name"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目所属分类：" required >
            <Input placeholder="请输入你的分类" name="category"/>
          </FormItem>

          <FormItem {...formItemLayout} label="申请人：" required >
            <Input placeholder="申请人" name="person"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目权限：" >
            <Radio.Group name="type" aria-labelledby="authority of project">
              <Radio id="private" value="private">私密项目</Radio>
              <Radio id="internal" value="internal">内部项目</Radio>
              <Radio id="publish" value="publish">开放目</Radio>
            </Radio.Group>
          </FormItem>

          <FormItem {...formItemLayout} label="状态：" required>
            <Select name="state" aria-labelledby="state of project">
              <Select.Option id="step1" value="step1">阶段一</Select.Option>
              <Select.Option id="step2" value="step2">阶段二</Select.Option>
              <Select.Option id="step3" value="step3">阶段三</Select.Option>
            </Select>
          </FormItem>

          <FormItem {...formItemLayout} label="联系人：" required >
            <Input placeholder="请输入联系人" name="relative"/>
          </FormItem>

          <FormItem {...formItemLayout} label="关联项目：" required >
            <Input placeholder="请输入关联项目" name="relaventProject"/>
          </FormItem>

          <FormItem {...formItemLayout} label="申请日期：" required >
            <DatePicker.RangePicker name="date" />
          </FormItem>

          <FormItem {...formItemLayout} label="项目编号1：" >
            <Input placeholder="请输入" name="data1"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目编号2：" >
            <Input placeholder="请输入" name="data2"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目编号3：" >
            <Input placeholder="请输入" name="data3"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目编号4：" >
            <Input placeholder="请输入" name="data4"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目编号5：" >
            <Input placeholder="请输入" name="data5"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目编号6：" >
            <Input placeholder="请输入" name="data6"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目编号7：" >
            <Input placeholder="请输入" name="data7"/>
          </FormItem>

          <FormItem {...formItemLayout} label="项目编号8：" >
            <Input placeholder="请输入" name="data8"/>
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

export default FourColumnForm;
