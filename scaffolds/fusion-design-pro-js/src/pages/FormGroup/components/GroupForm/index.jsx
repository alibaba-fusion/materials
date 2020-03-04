import React, { useState, useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Card,
  Form,
  Input,
  Select,
  Button,
  Table,
  Box,
  Divider,
  MenuButton,
  Dialog,
  Field,
} from '@alifd/next';
import styles from './index.module.scss';

const DEFAULT_DATA = {
  basic: {},
  member: {},
  company: [
    {
      id: '1',
      name: '蚂蚁证券投资有限公司 A',
      business: '金融证券代理',
      address: '1569 Cronin Ways Apt. 082',
      creatorName: '欧鹏',
    },
    {
      id: '2',
      name: '蚂蚁证券投资有限公司 B',
      business: '金融证券代理',
      address: '4016 Kautzer Route Suite 366',
      creatorName: '阮小五',
    },
    {
      id: '3',
      name: '蚂蚁证券投资有限公司 C',
      business: '金融证券代理',
      address: '22 Haag Manor',
      creatorName: '阮小二',
    },
    {
      id: '4',
      name: '蚂蚁证券投资有限公司 D',
      business: '金融证券代理',
      address: '1014 McLaughlin Unions',
      creatorName: '阮小七',
    },
    {
      id: '5',
      name: '蚂蚁证券投资有限公司 E',
      business: '金融证券代理',
      address: '8748 Devante Center',
      creatorName: '公孙胜',
    },
    {
      id: '6',
      name: '蚂蚁证券投资有限公司 F',
      business: '金融证券代理',
      address: '1014 McLaughlin Unions',
      creatorName: '曹正',
    },
    {
      id: '7',
      name: '蚂蚁证券投资有限公司 G',
      business: '金融证券代理',
      address: '8748 Devante Center',
      creatorName: '李立',
    },
    {
      id: '8',
      name: '蚂蚁证券投资有限公司 H',
      business: '金融证券代理',
      address: '1569 Cronin Ways Apt. 082',
      creatorName: '樊瑞',
    },
  ],
};

const GroupForm = props => {
  const {
    dataSource: defaultDataSource = DEFAULT_DATA,
    onSubmit = () => {},
    onCancel = () => {},
  } = props;
  const [dataSource, setDataSouce] = useState(defaultDataSource);
  const basicField = Field.useField({
    values: dataSource.basic,
  });
  const memberField = Field.useField({
    values: dataSource.member,
  });
  const containerRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line react/no-find-dom-node
    const dom = findDOMNode(containerRef.current);
    const rect = (dom && dom.getBoundingClientRect()) || {};
    setLeft(rect.left);
    setRight(document.documentElement.offsetWidth - rect.left - rect.width);
  }, []);

  const changeRowData = (index, key, value) => {
    const company = [...dataSource.company];
    company[index][key] = value;
    setDataSouce({ ...dataSource, company });
  };

  const deleteRow = index => {
    const company = [...dataSource.company];

    if (!company[index].id) {
      company.splice(index, 1);
      setDataSouce({ ...dataSource, company });
      return;
    }

    Dialog.confirm({
      content: `确定要删除公司：${company[index].name} ?`,
      onOk: () => {
        company.splice(index, 1);
        setDataSouce({ ...dataSource, company });
      },
    });
  };

  const addRow = () => {
    setDataSouce({
      ...dataSource,
      company: [
        ...dataSource.company,
        {
          edited: true,
        },
      ],
    });
  };

  const submit = () => {
    onSubmit({
      basic: basicField.getValues(),
      member: memberField.getValues(),
      company: dataSource.company,
    });
  };

  const renderEditCell = (v, i, row, key) => {
    if (row.edited) {
      return (
        <Input
          style={{
            width: '100%',
          }}
          onChange={value => changeRowData(i, key, value)}
          value={v || ''}
        />
      );
    }

    return v;
  };

  return (
    <div className={styles.GroupForm}>
      <Card ref={containerRef} free className={styles.Card}>
        <Card.Header title="项目成员信息" />
        <Card.Divider />
        <Card.Content>
          <Form field={basicField} responsive fullWidth labelAlign="top">
            <Form.Item colSpan={4} label="公司简称" required>
              <Input name="companyName" placeholder="请输入公司简称" />
            </Form.Item>
            <Form.Item colSpan={4} label="项目代号" required>
              <Input name="projectNo" placeholder="请输入项目代号" />
            </Form.Item>
            <Form.Item colSpan={4} label="投资委员会" required>
              <Input name="investmentsCommittee" placeholder="请输入投资委员会" />
            </Form.Item>
            <Form.Item colSpan={4} label="项目类型" required>
              <Input name="projectType" placeholder="请输入项目类型" />
            </Form.Item>
            <Form.Item colSpan={4} label="关联项目" required>
              <Select name="projectId" id="relativeId" placeholder="请选择关联项目">
                <Select.Option value={1}>项目一</Select.Option>
                <Select.Option value={2}>项目二</Select.Option>
                <Select.Option value={3}>项目三</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Card.Content>
      </Card>
      <Card free className={styles.Card}>
        <Card.Header title="基础信息" />
        <Card.Divider />
        <Card.Content>
          <Form field={memberField} responsive fullWidth labelAlign="top">
            <Form.Item colSpan={4} label="合同类型" required>
              <Select name="contractType" placeholder="请选择合同类型">
                <Select.Option value={1}>合同一</Select.Option>
                <Select.Option value={2}>合同二</Select.Option>
                <Select.Option value={3}>合同三</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item colSpan={4} label="IC成员" required>
              <Select name="icMemberId" placeholder="请选择IC成员">
                <Select.Option value={1}>成员一</Select.Option>
                <Select.Option value={2}>成员二</Select.Option>
                <Select.Option value={3}>成员三</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item colSpan={4} label="法务评审会" required>
              <Select name="forensicId" placeholder="请选择法务评审">
                <Select.Option value={1}>法务一</Select.Option>
                <Select.Option value={2}>法务二</Select.Option>
                <Select.Option value={3}>法务三</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item colSpan={4} label="财务评审" required>
              <Select name="financeId" placeholder="请选择财务评审">
                <Select.Option value={1}>财务一</Select.Option>
                <Select.Option value={2}>财务二</Select.Option>
                <Select.Option value={3}>财务三</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item colSpan={4} label="项目评审" required>
              <Select name="projectId" placeholder="请选择项目评审">
                <Select.Option value={1}>项目一</Select.Option>
                <Select.Option value={2}>项目二</Select.Option>
                <Select.Option value={3}>项目三</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Card.Content>
      </Card>
      <Card free className={styles.Card}>
        <Card.Header title="基础信息" />
        <Card.Divider />
        <Card.Content>
          <Box direction="row" margin={[0, 0, 16, 0]}>
            <Button onClick={addRow} className={styles.Button} type="primary">
              {' '}
              新增
            </Button>
          </Box>
          <Table dataSource={dataSource.company} hasBorder={false} className={styles.Table}>
            <Table.Column
              title="目标公司"
              cell={(v, i, row) => renderEditCell(v, i, row, 'name')}
              dataIndex="name"
            />
            <Table.Column
              title="主营业务"
              cell={(v, i, row) => renderEditCell(v, i, row, 'business')}
              dataIndex="business"
            />
            <Table.Column
              title="注册地"
              cell={(v, i, row) => renderEditCell(v, i, row, 'address')}
              dataIndex="address"
            />
            <Table.Column
              title="创始人"
              cell={(v, i, row) => renderEditCell(v, i, row, 'creatorName')}
              dataIndex="creatorName"
            />
            <Table.Column
              title="操作"
              cell={(v, i, row) => {
                if (row.edited) {
                  return (
                    <div>
                      <Button text type="primary" onClick={() => changeRowData(i, 'edited', false)}>
                        保存
                      </Button>
                      <Divider direction="ver" />
                      <Button text type="primary" onClick={() => deleteRow(i)}>
                        删除
                      </Button>
                    </div>
                  );
                }

                return (
                  <div>
                    <Button type="primary" onClick={() => changeRowData(i, 'edited', true)} text>
                      编辑
                    </Button>
                    <Divider direction="ver" />
                    <Button type="primary" text onClick={() => deleteRow(i)}>
                      删除
                    </Button>
                    <Divider direction="ver" />
                    <MenuButton type="primary" popupTriggerType="hover" label="更多" text>
                      <MenuButton.Item>操作一</MenuButton.Item>
                      <MenuButton.Item>操作二</MenuButton.Item>
                      <MenuButton.Item>操作三</MenuButton.Item>
                    </MenuButton>
                  </div>
                );
              }}
            />
          </Table>
        </Card.Content>
      </Card>
      <Box
        direction="row"
        spacing={16}
        style={{
          left,
          right,
        }}
        align="center"
        justify="center"
        className={styles.fixedButtons}
      >
        <Button className={styles.Button} onClick={submit} type="primary">
          提交
        </Button>
        <Button className={styles.Button} onClick={onCancel}>
          取消
        </Button>
      </Box>
    </div>
  );
};

export default GroupForm;
