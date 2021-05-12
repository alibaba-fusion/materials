import * as React from 'react';
import { Dialog, Select, Form, Field, Input } from '@alifd/next';
import { ValidateResults } from '@alifd/field';
import { DialogProps } from '@alifd/next/types/dialog';
import { DataItem } from './types';

const { useCallback, useEffect } = React;
const FormItem = Form.Item;

interface IProps {
  dataSource: DataItem;
}

const DialogEdit: React.FC<DialogProps & IProps> = (props) => {
  const field = Field.useField([]);
  const { dataSource, onOk = (event: React.MouseEvent, value: ValidateResults) => { }, ...lastProps } = props;

  useEffect(() => {
    field.reset();
    if (dataSource) {
      const newValues = {
        name: dataSource.name,
        email: dataSource.email,
        phone: dataSource.phone,
        gender: dataSource.gender,
      };
      field.setValues(newValues);
    }
  }, [field, dataSource]);

  const handleOk = useCallback(() => {
    field.validate((errors, values): void => {
      if (errors) {
        return;
      }
      onOk(undefined, values);
    });
  }, [field, onOk]);

  return (
    <Dialog
      shouldUpdatePosition
      isFullScreen
      title="编辑员工"
      style={{ width: 600 }}
      footerAlign="center"
      {...lastProps}
      onOk={handleOk}
    >
      <Form
        fullWidth
        labelAlign="top"
        field={field}
      >
        <FormItem
          label="姓名:"
          required
          requiredMessage="必填"
        >
          <Input
            {...field.init('name')}
          />
        </FormItem>
        <FormItem
          label="邮箱:"
          format="email"
          required
          requiredMessage="必填"
        >
          <Input
            name="email"
          />
        </FormItem>
        <FormItem
          label="手机号:"
          format="tel"
          required
          requiredMessage="必填"
        >
          <Input
            name="phone"
          />
        </FormItem>
        <FormItem
          label="性别:"
          required
          requiredMessage="必填"
        >
          <Select
            name="gender"
            dataSource={[
              { value: 'male', label: '男' },
              { value: 'female', label: '女' },
            ]}
          />
        </FormItem>
      </Form>
    </Dialog>
  );
};

export default DialogEdit;
