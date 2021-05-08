import React, { SFC } from 'react';
import { Dialog, Form, Field, Input, Select } from '@alifd/next';

export interface DataSource {
  companyName?: string;
  projectNo?: string;
  projectType?: number;
  projectId?: number;
}
export interface DialogFormProps {
  dataSource?: DataSource;
  visible?: boolean;
  onSubmit?: (data: DataSource) => void;
  onVisibleChange?: (visible: boolean) => void;
}

const DialogForm: React.SFC<DialogFormProps> = (props: DialogFormProps) => {
  const {
    dataSource = {},
    visible = true,
    onSubmit = () => { },
    onVisibleChange = () => { },
  } = props;

  const field = Field.useField({
    values: dataSource,
  });

  const submit = async () => {
    const { errors } = await field.validatePromise();
    if (errors && errors.length > 0) {
      return;
    }

    onSubmit(field.getValues());
    onVisibleChange(false);
  };

  const close = () => {
    onVisibleChange(false);
  };
  return (
    <Dialog
      visible={visible}
      title="新增目标公司"
      style={{ width: 720 }}
      onOk={submit}
      onCancel={close}
    >
      <Form field={field} fullWidth style={{ paddingLeft: 40, paddingRight: 40 }}>
        <Form.Item label="公司简称" required requiredMessage="请输入公司简称">
          <Input name="companyName" placeholder="请输入公司简称" />
        </Form.Item>
        <Form.Item label="项目代号" required requiredMessage="请输入项目代号">
          <Input name="projectNo" placeholder="请输入项目代号" />
        </Form.Item>
        <Form.Item label="项目类型" required requiredMessage="请选择项目类型">
          <Select name="projectType" placeholder="请选择项目类型">
            <Select.Option value={1}>类型一</Select.Option>
            <Select.Option value={2}>类型二</Select.Option>
            <Select.Option value={3}>类型三</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="关联项目" required requiredMessage="请选择关联项目">
          <Select name="projectId" placeholder="请选择关联项目">
            <Select.Option value={1}>项目一</Select.Option>
            <Select.Option value={2}>项目二</Select.Option>
            <Select.Option value={3}>项目三</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Dialog>
  );
};

export default DialogForm;
