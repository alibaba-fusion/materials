import React from 'react';
import { Box, Card, Table, Form } from '@alifd/next';
import styles from './index.module.scss';

const DEFAULT_DATA = {
  basicInfo: {
    company: '蚂蚁证券投资有限公司',
    code: 'ALXM890392-94890',
    committee: '经济体投资委员会',
    trade: '新零售',
    aliasProject: '杭州阿里巴巴集团新零售',
  },
  projectMember: {
    icMemeber:
      '阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞，阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞',
    forensicReview:
      '阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞，阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞',
    financialReview:
      '阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞，阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞',
  },
  targetCompanys: new Array(10).fill({
    targetCompany: '蚂蚁证券投资有限公司',
    business: '金融证券代理',
    address: '1569 Cronin Ways Apt. 082',
    creator: '欧鹏',
  }),
};

const BasicDetail = props => {
  const { dataSource = DEFAULT_DATA } = props;
  return (
    <div>
      <Box spacing={20}>
        <Card free>
          <Card.Header title="基础信息" />
          <Card.Divider />
          <Card.Content>
            <div className={styles.Content}>
              <Form labelAlign="top" responsive>
                <Form.Item colSpan={4} label="公司简称" required>
                  <span>{dataSource.basicInfo.company}</span>
                </Form.Item>
                <Form.Item colSpan={4} label="项目代号" required>
                  <span>{dataSource.basicInfo.code}</span>
                </Form.Item>
                <Form.Item colSpan={4} label="投资委员会" required>
                  <span>{dataSource.basicInfo.committee}</span>
                </Form.Item>
                <Form.Item colSpan={4} label="所属行业" required>
                  <span>{dataSource.basicInfo.trade}</span>
                </Form.Item>
                <Form.Item colSpan={4} label="关联项目" required>
                  <span>{dataSource.basicInfo.aliasProject}</span>
                </Form.Item>
              </Form>
            </div>
          </Card.Content>
        </Card>
        <Card free>
          <Card.Header title="项目成员信息" />
          <Card.Divider />
          <Card.Content>
            <div className={styles.Content}>
              <Form labelAlign="top">
                <Form.Item label="IC成语" required>
                  <span>{dataSource.projectMember.icMemeber}</span>
                </Form.Item>
                <Form.Item label="法务评审" required>
                  <span>{dataSource.projectMember.forensicReview}</span>
                </Form.Item>
                <Form.Item label="财务评审" required>
                  <span>{dataSource.projectMember.financialReview}</span>
                </Form.Item>
              </Form>
            </div>
          </Card.Content>
        </Card>
        <Card free>
          <Card.Header title="目标公司" />
          <Card.Divider />
          <Card.Content>
            <div className={styles.Content}>
              <Table
                dataSource={dataSource.targetCompanys}
                hasBorder={false}
                className={styles.Table}
              >
                <Table.Column title="目标公司" dataIndex="targetCompany" />
                <Table.Column title="主营业务" dataIndex="business" />
                <Table.Column title="注册地" dataIndex="address" />
                <Table.Column title="创始人" dataIndex="creator" />
              </Table>
            </div>
          </Card.Content>
        </Card>
      </Box>
    </div>
  );
};

export default BasicDetail;
