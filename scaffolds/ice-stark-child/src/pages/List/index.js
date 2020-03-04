import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Message } from '@alifd/next';
import { Link } from 'ice';
import PageTitle from '@/components/PageTitle';

import styles from './index.module.scss';

const mockData = () => {
  return {
    status: 'SUCCESS',
    message: '请求成功',
    data: Array.from({ length: 10 }).map((item, index) => {
      return {
        id: `00000${index}`,
        name: '聘用合同',
        ourCompany: 'xxx商铺',
        amount: '999,999',
        currency: 'CNY',
        state: '签约中',
      };
    }),
  };
};

export default function List() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);

  async function handlePagination(currentPage) {
    await setCurrent(currentPage);
  }

  useEffect(() => {
    async function fetchData() {
      await setLoading(true);
      const { data: resData } = await mockApi();
      await setData(Array.isArray(resData) ? resData : []);
      await setLoading(false);
    }
    fetchData();
  }, [current]);

  function mockApi() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData());
      }, 600);
    });
  }

  return (
    <IceContainer>
      <PageTitle title="商家列表" />
      <Table
        loading={isLoading}
        dataSource={data}
        hasBorder={false}
        className={styles.customTable}
      >
        <Table.Column title="合同编号" dataIndex="id" key="id" width={100} />
        <Table.Column title="合同名称" dataIndex="name" key="name" width={100} />
        <Table.Column title="商家名称" dataIndex="ourCompany" key="ourCompany" width={160} />
        <Table.Column title="合同金额" dataIndex="amount" key="amount" width={100} />
        <Table.Column title="币种" dataIndex="currency" key="currency" width={100} />
        <Table.Column
          title="合同状态"
          dataIndex="state"
          key="state"
          width={100}
          cell={value => (
            <div className={styles.state}>
              <span className={styles.stateText}>{value}</span>
            </div>
          )}
        />
        <Table.Column
          title="操作"
          dataIndex="detail"
          key="detail"
          width={200}
          cell={() => (
            <div>
              <a className={styles.link} onClick={() => Message.success('暂不支持修改合同')}>
                修改
              </a>
              <span className={styles.separator} />
              <Link className={styles.link} to="/detail">
                查看
              </Link>
            </div>
          )}
        />
      </Table>
      <Pagination className={styles.pagination} current={current} onChange={handlePagination} />
    </IceContainer>
  );
}
