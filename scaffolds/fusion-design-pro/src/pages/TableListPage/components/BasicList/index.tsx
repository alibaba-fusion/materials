import React, { useState, useEffect } from 'react';
import { Card, Table, Pagination, Divider, ResponsiveGrid, Button, Box, Form, Input, Select, Icon, Loading } from '@alifd/next';

import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;
const { Option } = Select;
const FormItem = Form.Item;

export interface IDataSource {
  tableData: object[];
  tableColumn: {};
};
const mockTableData: object[] = [];
for (let i = 0; i <= 10; i += 1) {
  mockTableData.push({
    name: `品牌营销服务设计 ${String.fromCharCode(97 + i).toUpperCase()}`,
    type: Math.random() > 0.5 ? '24小时页面' : 'Banner 广告A',
    demand: ['曾庆超', '阮小五', '公孙胜'][i % 3],
    interface: ['阮小二', '谢莉莉', '樊瑞'][i % 3],
    supplier: '博彦-李强',
    designer: ['李立', '曹正', '姚越洋'][i % 3],
  });
}

const DEFAULT_DATA: IDataSource = {
  tableData: mockTableData,
  tableColumn: {
    name: '需求名称',
    type: '类型数量',
    demand: '需求方',
    interface: '接口人',
    supplier: '供应商接口人',
    designer: '设计师',
  },
};

interface ITableListProps {
  dataSource: IDataSource;
}

const TableList: React.FunctionComponent<ITableListProps> = (props: ITableListProps): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
  } = props;

  const [loading, setLoading] = useState(true);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const onOperation = () => {
    setLoading(true);
  };

  const onPaginationChange = () => {
    setLoading(true);
  };

  const toggleSeachList = () => {
    setExpand(!expand);
  };

  return (<>
    <Card free>
      <Card.Content>
        <Box padding={10}>
          <Form responsive fullWidth labelAlign="top">
            <FormItem colSpan={3} label="需求名称/编号">
              <Input
                placeholder="输入需求名称/编号进行搜索"
                innerAfter={<Icon type="search" size="xs" className={styles.searchIcon} />}
              />
            </FormItem>
            <FormItem colSpan={3} label="需求方">
              <Input placeholder="输入需求方进行搜索" />
            </FormItem>
            <FormItem colSpan={3} label="标签" >
              <Select placeholder="选择标签">
                <Option value="small">标签A</Option>
                <Option value="medium">标签B</Option>
              </Select>
            </FormItem>
            {expand && (
              <>
                <FormItem colSpan={3} label="需求名称/编号">
                  <Input
                    placeholder="输入需求名称/编号进行搜索"
                    innerAfter={<Icon type="search" size="xs" className={styles.searchIcon} />}
                  />
                </FormItem>
                <FormItem colSpan={3} label="需求方">
                  <Input placeholder="输入需求方进行搜索" />
                </FormItem>
                <FormItem colSpan={3} label="标签" >
                  <Select placeholder="选择标签">
                    <Option value="small">标签A</Option>
                    <Option value="medium">标签B</Option>
                  </Select>
                </FormItem>
                <FormItem colSpan={3} label="标签" >
                  <Select placeholder="选择标签">
                    <Option value="small">标签A</Option>
                    <Option value="medium">标签B</Option>
                  </Select>
                </FormItem>
              </>
            )}
            <Cell colSpan={3} className={styles.btns}>
              <Box spacing={8} direction="row" align="flex-end" justify='center' style={{ height: '100%' }}>
                <Button type="primary" onClick={onOperation}>查询</Button>
                <Form.Reset>重置</Form.Reset>
                <Button onClick={toggleSeachList}>
                  {
                    expand ? <>收起 <Icon className={styles.icon} type="arrow-up" size="xs" /></>
                      : <>展开 <Icon className={styles.icon} type="arrow-down" size="xs" /></>
                  }
                </Button>
              </Box>
            </Cell>
          </Form>
        </Box>
        <Divider dashed />
        <div className={styles.Main}>
          <Loading visible={loading} style={{display: 'block'}}>
            <div className={styles.add}>
              <Button type="primary">新增</Button>
              <Button type="normal">下载</Button>
              <Button type="normal">更多操作<Icon className={styles.icon} type="arrow-down" /></Button>
            </div>
            <Table
              hasBorder={false}
              className={styles.Table}
              dataSource={dataSource.tableData}
              rowSelection={{ columnProps: () => ({ lock: 'left' }) }}
            >
              {Object.keys(dataSource.tableColumn).map((col) => (
                <Table.Column
                  title={dataSource.tableColumn[col]}
                  dataIndex={col}
                  key={col}
                />
              ))}
              <Table.Column
                title="操作"
                cell={() => (
                  <div className={styles.opt}>
                    <Button type="primary" text>编辑</Button>
                    <Divider direction="ver" />
                    <Button type="primary" text>订阅</Button>
                    <Divider direction="ver" />
                    <Button type="primary" text>删除</Button>
                  </div>
                )}
              />
            </Table>
            <Box margin={[15, 0, 0, 0]} direction="row" align="center" justify="space-between">
              <div className={styles.total}>
                共<span>200</span>条需求
              </div>
              <Pagination onChange={onPaginationChange} />
            </Box>
          </Loading>
        </div>
      </Card.Content>
    </Card>
  </>);
};

export default TableList;
