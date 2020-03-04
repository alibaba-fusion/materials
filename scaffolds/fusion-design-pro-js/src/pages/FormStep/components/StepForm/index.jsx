import React, { useState } from 'react';
import { Card, Form, Input, Icon, Radio, Field, Step, Button, Box, Typography } from '@alifd/next';
import styles from './index.module.scss';

const DEFAULT_DATA = {
  name: '',
  category: '',
  authority: 'private',
  desc: '',
};

const StepForm = props => {
  const { dataSource = DEFAULT_DATA, onSubmit = () => {} } = props;
  const projectField = Field.useField({
    values: dataSource,
  });
  const [currentStep, setStep] = useState(0);
  const steps = ['填写信息', '确认信息', '完成'].map((item, index) => (
    <Step.Item aria-current={index === currentStep ? 'step' : null} key={index} title={item} />
  ));

  const submit = () => {
    const values = projectField.getValues();
    console.log('values:', values);
    onSubmit(values);
    setStep(currentStep + 1);
  };

  const goNext = async () => {
    const { errors } = await projectField.validatePromise();

    if (errors) {
      console.log('errors', errors);
      return;
    }

    setStep(currentStep + 1);
  };

  const goPrev = () => {
    setStep(currentStep - 1);
  };

  const goInitial = () => {
    setStep(0);
  };

  let actions;
  let mainbody;

  switch (currentStep) {
    case 0:
      actions = (
        <Button type="primary" onClick={goNext}>
          下一步
        </Button>
      );
      break;

    case 1:
      actions = (
        <>
          <Button
            onClick={goPrev}
            style={{
              marginRight: '5px',
            }}
          >
            上一步
          </Button>
          <Form.Submit type="primary" onClick={submit} validate>
            下一步
          </Form.Submit>
        </>
      );
      break;

    case 2:
      mainbody = (
        <>
          <Box align="center">
            <Icon type="success-filling" size={72} className={styles.succesIcon} />
            <Typography.H1>提交成功</Typography.H1>
            <Typography.Text>5s 后自动跳转至工单页</Typography.Text>
            <Box margin={20} direction="row">
              <Button
                type="primary"
                style={{
                  marginRight: '5px',
                }}
                onClick={goInitial}
              >
                返回主页
              </Button>
              <Button onClick={goInitial}>继续创建</Button>
            </Box>
          </Box>
        </>
      );
      break;

    default:
      break;
  }

  if (!mainbody) {
    mainbody = (
      <>
        <Form
          field={projectField}
          isPreview={currentStep === 1}
          className={styles.form}
          responsive
          fullWidth
          labelAlign="top"
        >
          <Form.Item colSpan={12} label="项目名称" required requiredMessage="必填">
            <Input placeholder="给项目起个名字" name="name" />
          </Form.Item>

          <Form.Item colSpan={12} label="项目所属分类" required>
            <Input placeholder="请输入你的分类" name="category" />
          </Form.Item>

          <Form.Item colSpan={12} label="项目权限">
            <Radio.Group name="authority" aria-labelledby="authority of project">
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
          </Form.Item>

          <Form.Item colSpan={12} label="项目描述">
            <Input.TextArea placeholder="请输入项目详细信息" name="desc" />
          </Form.Item>

          <Form.Item colSpan={12}>{actions}</Form.Item>
        </Form>
      </>
    );
  }

  return (
    <div>
      <Card free>
        <Card.Content className={styles.StepForm}>
          <Step current={currentStep} shape="circle">
            {steps}
          </Step>
          {mainbody}
        </Card.Content>
      </Card>
    </div>
  );
};

export default StepForm;
