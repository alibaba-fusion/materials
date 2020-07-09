import * as React from 'react';
import {
  Form,
  Input,
  Radio,
  Select,
  Checkbox,
  Field,
  Table,
  Grid,
  Button,
  Icon,
  Card,
  Pagination,
} from '@alifd/next';

import { useFusionTable } from 'ahooks';

import styles from './index.module.scss';

const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
};

const { Row, Col } = Grid;

const LANGUAGES = [
  { label: '汉语', value: 'cn' },
  { label: '粤语', value: 'gd' },
  { label: '朝鲜语', value: 'kr' },
  { label: '法语', value: 'fr' },
  { label: '英语', value: 'en' },
  { label: '西班牙语', value: 'sp' },
  { label: '意大利语', value: 'it' },
  { label: '德文', value: 'gm' },
  { label: '其他', value: 'other' },
];

const STAFF_COUNTS = [
  { label: '0-50', value: '0' },
  { label: '50-100', value: '1' },
  { label: '100-200', value: '2' },
  { label: '200-500', value: '3' },
  { label: '500以上', value: '4' },
];

const YES_NO = [
  { label: '是', value: '0' },
  { label: '否', value: '1' },
];

const LOCATIONS = [
  { label: '北京', value: 'bj' },
  { label: '上海', value: 'sh' },
  { label: '深圳', value: 'sz' },
  { label: '广州', value: 'gz' },
  { label: '杭州', value: 'hz' },
];

const getTableData = async ({ current, pageSize }: { current: number; pageSize: number }, formData: Record<string, any>) => {
  const query = Object.entries(formData)
    .map(([key, value]) => (value ? `&${key}=${value}` : ''))
    .reduce((prev, curr) => prev + curr, `page=${current}&size=${pageSize}`);

  return fetch(`https://randomuser.me/api?results=${pageSize}&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: 55,
      list: res.results.slice(0, 10),
    }));
};

export default function SingleColFilterTable() {
  const field = Field.useField();
  const { paginationProps, tableProps, search, loading } = useFusionTable(
    getTableData,
    {
      field,
    }
  );
  const { type, changeType, submit, reset } = search;
  return (
    <Card free>
      <Card.Content>
        <div className={styles.formWrap}>
          <Form {...formItemLayout} field={field} labelTextAlign="left">
            <FormItem label="语言能力:">
              <CheckboxGroup name="languages" dataSource={LANGUAGES} />
            </FormItem>
            <FormItem label="员工人数:">
              <RadioGroup name="staffCount" dataSource={STAFF_COUNTS} />
            </FormItem>
            <FormItem label="公司已上市:">
              <RadioGroup name="ipo" dataSource={YES_NO} />
            </FormItem>
            {type === 'simple' ? null : (
              <>
                <FormItem label="公司所在地:">
                  <Select name="location" dataSource={LOCATIONS} />
                </FormItem>
                <FormItem label="境外办公室设立:">
                  <Select name="overseaOffice" dataSource={YES_NO} />
                </FormItem>
                <FormItem label="服务商名称(中文或英文):">
                  <Input name="isvName" style={{ width: 260 }} />
                </FormItem>
              </>
            )}

            <Row>
              <Col span={14}>
                <Button type="primary" onClick={submit}>
                  搜索
                </Button>
              </Col>
              <Col span={10} style={{ textAlign: 'right' }}>
                {type === 'simple' ? (
                  <Button text onClick={changeType}>
                    展开 <Icon type="arrow-down" />
                  </Button>
                ) : (
                  <Button text onClick={changeType}>
                    收起 <Icon type="arrow-up" />
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </div>
        <Table {...tableProps} primaryKey="email">
          <Table.Column title="name" dataIndex="name.last" width={140} />
          <Table.Column title="email" dataIndex="email" width={500} />
          <Table.Column title="phone" dataIndex="phone" width={500} />
          <Table.Column title="gender" dataIndex="gender" width={500} />
        </Table>
        <Pagination {...paginationProps} className={styles.pagination} />
      </Card.Content>
    </Card>
  );
}
