import React from 'react';
import { Card, Form, ResponsiveGrid, Field, Input, Radio, Select, Button, Box } from '@alifd/next';
import styles from './index.module.scss';

const HierarchicalForm = props => {
  const {
    dataSource = {
      authType: 1,
    },
    onSubmit = () => {},
    onCancel = () => {},
  } = props;
  const field = Field.useField({
    values: dataSource,
  });
  return (
    <Card free className={styles.Card}>
      <Card.Content>
        <Form fullWidth field={field} className={styles.HierarchicalForm}>
          <Form.Item label="项目名称" required requiredMessage="请输入项目名称">
            <Input name="name" placeholder="给项目起个名字" />
          </Form.Item>
          <Form.Item label="项目所属分类" required requiredMessage="请选择项目所属分类">
            <Select name="categoryId" placeholder="请选择项目所属分类">
              <Select.Option value={1}>项目类型一</Select.Option>
              <Select.Option value={2}>项目类型二</Select.Option>
              <Select.Option value={3}>项目类型三</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="项目权限">
            <Radio.Group name="authType">
              <Radio value={1}>私密项目</Radio>
              <Radio value={2}>内部项目</Radio>
              <Radio value={3}>开放项目</Radio>
            </Radio.Group>
            {field.getValue('authType') !== 3 && (
              <ResponsiveGrid gap={[0, 15]} columns={2} className={styles.HierarchicalBlock}>
                <ResponsiveGrid.Cell
                  colSpan={{
                    desktop: 1,
                    tablet: 1,
                    phone: 2,
                  }}
                >
                  <Form.Item label="权限范围">
                    <Select name="authScope" placeholder="请选择权限范围">
                      <Select.Option value={1}>公司内部</Select.Option>
                      <Select.Option value={2}>团队内部</Select.Option>
                      <Select.Option value={3}>个人</Select.Option>
                    </Select>
                  </Form.Item>
                </ResponsiveGrid.Cell>
                <ResponsiveGrid.Cell
                  colSpan={{
                    desktop: 1,
                    tablet: 1,
                    phone: 2,
                  }}
                >
                  <Form.Item label="权限成员">
                    <Select
                      maxTagCount={2}
                      maxTagPlaceholder={values => `+${values.length - 2}`}
                      name="authMembers"
                      mode="multiple"
                      placeholder="请选择权限成员"
                    >
                      <Select.Option value={1}>张三</Select.Option>
                      <Select.Option value={2}>李四</Select.Option>
                      <Select.Option value={3}>王五</Select.Option>
                      <Select.Option value={4}>阮小二</Select.Option>
                      <Select.Option value={5}>阮小五</Select.Option>
                      <Select.Option value={6}>阮小七</Select.Option>
                    </Select>
                  </Form.Item>
                </ResponsiveGrid.Cell>
                {field.getValue('authType') === 1 ? (
                  <>
                    <ResponsiveGrid.Cell
                      key="item 1"
                      colSpan={{
                        desktop: 1,
                        tablet: 1,
                        phone: 2,
                      }}
                    >
                      <Form.Item label="私密ID">
                        <Input name="authId" placeholder="输入私密 ID" />
                      </Form.Item>
                    </ResponsiveGrid.Cell>
                    ,
                    <ResponsiveGrid.Cell
                      key="item 2"
                      colSpan={{
                        desktop: 1,
                        tablet: 1,
                        phone: 2,
                      }}
                    >
                      <Form.Item label="项目通行码">
                        <Input name="authCode" placeholder="请输入项目通行码" />
                      </Form.Item>
                    </ResponsiveGrid.Cell>
                  </>
                ) : null}
              </ResponsiveGrid>
            )}
          </Form.Item>
          <Form.Item label="项目描述">
            <Input.TextArea name="description" placeholder="请输入项目详细信息" rows={4} />
          </Form.Item>
          <Form.Item>
            <Box direction="row" spacing={8}>
              <Form.Submit
                validate
                onClick={(value, errors) => (errors ? null : onSubmit(value))}
                className={styles.Button}
                type="primary"
              >
                提交
              </Form.Submit>
              <Button className={styles.Button} onClick={onCancel}>
                退回
              </Button>
            </Box>
          </Form.Item>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default HierarchicalForm;
