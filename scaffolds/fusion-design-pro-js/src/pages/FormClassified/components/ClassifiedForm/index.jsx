import React from 'react';
import {
  Box,
  Button,
  Card,
  Form,
  Input,
  Select,
  Radio,
  Field,
  Divider,
  Message,
} from '@alifd/next';
import styles from './index.module.scss';

const DEFAULT_DATA = {
  job: {
    address: '美国 洛杉矶',
  },
  treatment: {
    rsu: true,
  },
};

const ClassifiedForm = props => {
  const { dataSource = DEFAULT_DATA, onSubmit = () => {}, onCancel = () => {} } = props;
  const jobField = Field.useField({
    values: dataSource.job,
  });
  const treatmentField = Field.useField({
    values: dataSource.treatment,
  });

  const handleSubmit = async () => {
    const { errors: jobErrors } = await jobField.validatePromise();
    const { errors: treatmentErrors } = await treatmentField.validatePromise();

    if (treatmentErrors || jobErrors) {
      console.log('errors', jobErrors, treatmentErrors);
      return;
    }

    const values = {
      basic: jobField.getValues(),
      member: treatmentField.getValues(),
    };
    console.log('values:', values);
    onSubmit(values);
    Message.success('提交成功');
  };

  return (
    <div className={styles.ClassifiedForm}>
      <Card free className={styles.Card}>
        <Card.Header title="工作经历" />
        <Card.Divider />
        <Card.BulletHeader title="分类信息" />
        <Card.Content>
          <Form field={jobField} responsive fullWidth labelAlign="top">
            <Form.Item colSpan={4} label="工作地址">
              <Input name="address" placeholder="请输入工作地址" />
            </Form.Item>
            <Form.Item colSpan={4} label="职位">
              <Input name="position" placeholder="请输入职位名称" />
            </Form.Item>
            <Form.Item colSpan={4} label="公司名称">
              <Input name="companyName" placeholder="请输入公司名称" />
            </Form.Item>
            <Form.Item colSpan={4} label="币种" required>
              <Select name="currency" placeholder="请选择币种">
                <Select.Option value="CNY">¥ CNY</Select.Option>
                <Select.Option value="USD">$ USD</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item colSpan={4} label="年薪" required>
              <Input name="annualSalary" placeholder="请输入薪资信息" textAfter="CNY" />
            </Form.Item>
            <Form.Item colSpan={4} label="期望年薪">
              <Input name="expectAnnualSalary" placeholder="请输入期望薪资" textAfter="CNY" />
            </Form.Item>
          </Form>
        </Card.Content>

        <Card.BulletHeader title="分类信息" />
        <Card.Content>
          <Form field={treatmentField} responsive fullWidth labelAlign="top">
            <Form.Item colSpan={4} label="月薪" required>
              <Input name="monthlySalary" placeholder="请输入月薪" />
            </Form.Item>
            <Form.Item colSpan={4} label="月数">
              <Input name="monthNumber" placeholder="请输入在职月数" />
            </Form.Item>
            <Form.Item colSpan={4} label="津贴">
              <Input name="bonus" placeholder="请输入津贴" />
            </Form.Item>
            <Form.Item colSpan={4} label="年度目标奖金">
              <Input name="targetBonus" placeholder="请输入年度目标奖金" />
            </Form.Item>
            <Form.Item colSpan={4} label="去年实际奖金">
              <Input name="lastYearBonus" placeholder="请输入实际奖金" />
            </Form.Item>
            <Form.Item colSpan={4} label="选项/RSU">
              <Radio.Group name="rsu" aria-labelledby="rsu">
                <Radio id="has-rsu" value>
                  是
                </Radio>
                <Radio id="has-not-rsu" value={false}>
                  否
                </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item colSpan={8} label="选项/RSU 描述">
              <Input.TextArea name="rsuDesc" placeholder="请输入" hasLimitHint maxLength={500} />
            </Form.Item>
          </Form>
          <Divider />
          <Form.Item colSpan={12}>
            <Box spacing={8} direction="row">
              <Form.Submit type="primary" onClick={handleSubmit} validate>
                提交
              </Form.Submit>
              <Button onClick={onCancel} type="secondary">
                取消
              </Button>
            </Box>
          </Form.Item>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ClassifiedForm;
