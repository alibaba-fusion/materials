import React, { useState } from 'react';
import { Button, Select, Form, Field, Table, Card, Pagination } from '@alifd/next';
import { useFusionTable } from 'ahooks';

import EmptyBlock from './EmptyBlock';
import ExceptionBlock from './ExceptionBlock';

import styles from './index.module.scss';

const FormItem = Form.Item;

const getTableData = (
  { current, pageSize }: { current: number; pageSize: number },
  formData: { status: 'normal' | 'empty' | 'exception' }
): Promise<any> => {
  console.log(current, pageSize, formData);
  if (!formData.status || formData.status === 'normal') {
    let query = `page=${current}&size=${pageSize}`;
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        query += `&${key}=${value}`
      }
    });
    return fetch(`https://randomuser.me/api?results=${pageSize}&${query}`)
      .then(res => res.json())
      .then(res => ({
        total: 55,
        list: res.results.slice(0, 10),
      }));
  }
  if (formData.status === 'empty') {
    return Promise.resolve([]);
  }
  if (formData.status === 'exception') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('data exception'));
      }, 1000);
    });
  }

  return Promise.resolve([]);
};

const defaultColumnWidth = {
  'name.last': 140,
  email: 500,
  phone: 500,
  gender: 140,
};

const FilterTable: React.FunctionComponent = (): JSX.Element => {
  const [columnWidth, onColumnWidthChange] = useState(defaultColumnWidth);
  const field = Field.useField([]);
  const { paginationProps, tableProps, search, error, refresh } = useFusionTable(getTableData, {
    field,
  });
  const { submit, reset } = search;

  const onResizeChange = (dataIndex: keyof typeof defaultColumnWidth, width: number) => {
    const newWidth = {
      ...columnWidth,
    };
    newWidth[dataIndex] += width;
    onColumnWidthChange(newWidth);
  };

  return (
    <div className={styles.FilterTable}>
      <Card free>
        <Card.Content>
          <Form
            className="filter-form"
            responsive
            fullWidth
            labelAlign="top"
            field={field}
          >
            <FormItem
              colSpan={3}
              label="数据状态"
              required
              requiredMessage="必填"
            >
              <Select
                name="status"
                dataSource={[
                  {
                    label: '正常状态',
                    value: 'normal',
                  },
                  {
                    label: '空数据状态',
                    value: 'empty',
                  },
                  {
                    label: '数据异常状态',
                    value: 'exception',
                  }
                ]}
              />
            </FormItem>
            <FormItem colSpan={7} />
            <FormItem
              colSpan={2}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Form.Submit
                type="primary"
                onClick={submit}
                validate
                style={{ marginRight: '20px' }}
              >
                提交
              </Form.Submit>
              <Form.Reset onClick={reset}>重置</Form.Reset>
            </FormItem>
          </Form>
        </Card.Content>
      </Card>
      <Card free>
        <Card.Content>
          <Table
            {...tableProps}
            onResizeChange={onResizeChange}
            emptyContent={error ? <ExceptionBlock onRefresh={refresh} /> : <EmptyBlock />}
            primaryKey="email"
          >
            <Table.Column title="name" dataIndex="name.last" resizable width={columnWidth['name.last']} />
            <Table.Column title="email" dataIndex="email" resizable width={columnWidth.email} />
            <Table.Column title="phone" dataIndex="phone" resizable width={columnWidth.phone} />
            <Table.Column title="gender" dataIndex="gender" resizable width={columnWidth.gender} />
          </Table>
          <Pagination style={{ marginTop: 16, textAlign: 'right' }} totalRender={total => <>共 <Button text type="primary">{total}</Button> 个记录</>}  {...paginationProps} />
        </Card.Content>
      </Card>
    </div>
  );
}

export default FilterTable;
