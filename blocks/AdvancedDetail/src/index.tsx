import React from 'react';
import { Box, Form, Typography, Avatar, Tab, MenuButton, Button, Card, Step, Table, Divider } from '@alifd/next';

import styles from './index.module.scss';

export interface LogItem {
  opStatus?: string;
  operator?: string;
  opResult?: string;
  opTime?: string;
};

export interface DataSource {
  logs?: LogItem[];
  person?: {
    avatar?: string;
    surname?: string;
    name?: string;
    phone?: string;
    email?: string;
    region?: string;
    address?: string;
    workTime?: number;
    education?: string;
    rank?: string;
    position?: string;
    department?: string;
    workAddress?: string;
  };
  preJob?: {
    company?: string;
    position?: string;
    address?: string;
    descripton?: string;
  };
  salary?: {
    month?: string;
    monthNumber?: string;
    bonus?: string;
    rsu?: string;
  };
};

const DEFAULT_DATA: DataSource = {
  logs: [
    ['主管审批', '梅长苏'],
    ['HRG', '叶周全'],
    ['C&B审核人', '吴永辉'],
    ['业务线审批', '倩倩'],
    ['HR线审批', '叶俊'],
  ].map((item): LogItem => ({
    opStatus: item[0],
    operator: item[1],
    opResult: '同意',
    opTime: '2019-11-11 09:36',
  })),
  person: {
    avatar: 'https://img.alicdn.com/tfs/TB10Kr8orj1gK0jSZFOXXc7GpXa-1000-1000.png',
    surname: '谢',
    name: '莉莉',
    phone: '13676349585',
    email: 'Xielili@aliwork-inc.com',
    region: '中国/浙江',
    address: '杭州',
    workTime: 3,
    education: 'Singapore University of Technology and Design',
    rank: 'P10',
    position: 'Senior Director',
    department: 'aliwork&EHR',
    workAddress: '杭州',
  },
  preJob: {
    company: '浙江杭州天猫有限公司',
    position: '高级研发专家',
    address: '中国/浙江',
    descripton: 'Fusion 是一套企业级中后台设计系统解决方案，致力于解决产品体验一致性问题、设计研发协同问题，以及UI开发效率问题。',
  },
  salary: {
    month: '20,000 USD',
    monthNumber: 13,
    bonus: '5,000 USD',
    rsu: 'No',
  },
};

const AdvancedDetail: React.FunctionComponent<AdvancedDetailProps> = (props: AdvancedDetailProps): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
    onTabChange = (): viod => { },
    onTableTabChange = (): void => { },
  } = props;

  const renderTab = (): JSX.Element => {
    return (
      <Tab navClassName={styles.TabBar} onChange={onTableTabChange}>
        <Tab.Item title={<span className={styles.TabItemTitle}>操作日志一</span>} key="1" className={styles.TabItem} />
        <Tab.Item title={<span className={styles.TabItemTitle}>操作日志二</span>} key="2" className={styles.TabItem} />
        <Tab.Item title={<span className={styles.TabItemTitle}>操作日志三</span>} key="3" />
      </Tab>
    );
  };

  return (<>
    <Card free className={styles.AdvancedDetailHead}>
      <Box spacing={10}>
        <Box direction="row" spacing={10}>
          <Avatar size="large" src={dataSource.person.avatar} />
          <Box flex={1} spacing={15}>
            <Box direction="row" justify="space-between">
              <Box>
                <Typography.Text className={styles.TitleName}>{dataSource.person.surname}{dataSource.person.name}</Typography.Text>
                <Typography.Text className={styles.TitleInfo}>{dataSource.person.phone} | {dataSource.person.email}</Typography.Text>
              </Box>
              <Box spacing={8} direction="row">
                <Button type="primary" className={styles.button}>
                  主操作
                </Button>
                <Button className={styles.button}>
                  操作一
                </Button>
                <MenuButton label="更多" className={styles.button}>
                  <MenuButton.Item key="1">操作一</MenuButton.Item>
                  <MenuButton.Item key="2">操作二</MenuButton.Item>
                </MenuButton>
              </Box>
            </Box>
            <Form labelAlign="top" responsive>
              <Form.Item colSpan={4} label="现在所在地">
                <span className="next-form-preview">{dataSource.person.region}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="工作经验">
                <span className="next-form-preview">{dataSource.person.workTime}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="高等教育">
                <span className="next-form-preview">{dataSource.person.education}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="职级">
                <span className="next-form-preview">{dataSource.person.rank}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="职位" >
                <span className="next-form-preview">{dataSource.person.position}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="部门" >
                <span className="next-form-preview">{dataSource.person.department}</span>
              </Form.Item>
            </Form>
          </Box>
        </Box>
        <Tab navClassName={styles.TabBar} onChange={onTabChange}>
          <Tab.Item title={<span className={styles.TabItemTitle}>选项卡一</span>} key="1" className={styles.TabItem} />
          <Tab.Item title={<span className={styles.TabItemTitle}>选项卡二</span>} key="2" className={styles.TabItem} />
          <Tab.Item title={<span className={styles.TabItemTitle}>选项卡三</span>} key="3" />
        </Tab>
      </Box>
    </Card>
    <Box spacing={20}>
      <Card contentHeight="auto">
        <Step shape="dot" current={1} className={styles.Step}>
          <Step.Item title="申请" content={<div>
            <span>{dataSource.person.surname}{dataSource.person.name}</span>
            <span>{dataSource.person.email}</span>
          </div>} />
          <Step.Item title="审批" content={<a className={styles.a}>张三</a>} />
          <Step.Item title="接受" />
          <Step.Item title="合同发送" />
          <Step.Item title="合同接受" />
          <Step.Item title="入职准备" />
          <Step.Item title="完成" />
        </Step>
      </Card>
      <Card free>
        <Card.Header title="基础信息" />
        <Card.Divider />
        <Card.Content>
          <div className={styles.Content}>
            <Form labelAlign="top" responsive>
              <Form.Item colSpan={4} label="姓氏" required>
                <span className="next-form-preview">{dataSource.person.surname}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="名字" required>
                <span className="next-form-preview">{dataSource.person.name}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="国家/地区" required>
                <span className="next-form-preview">{dataSource.person.region}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="电话号码" required>
                <span className="next-form-preview">{dataSource.person.phone}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="邮箱" required>
                <span className="next-form-preview">{dataSource.person.email}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="现居地址" required>
                <span className="next-form-preview">{dataSource.person.address}</span>
              </Form.Item>
            </Form>
          </div>
        </Card.Content>
      </Card>
      <Card free showHeadDivider={false}>
        <Card.Header title="工作经历" />
        <Card.Divider />
        <Card.Content>
          <Box>
            <Typography.Text className={styles.SubTitle}>分类标题</Typography.Text>
            <Form labelAlign="top" responsive>
              <Form.Item colSpan={4} label="工作单位" required>
                <span className="next-form-preview">{dataSource.preJob.company}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="职位" required>
                <span className="next-form-preview">{dataSource.preJob.position}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="国家/地区" required>
                <span className="next-form-preview">{dataSource.preJob.address}</span>
              </Form.Item>
              <Form.Item colSpan={12} label="项目描述" required>
                <span className="next-form-preview">{dataSource.preJob.description}</span>
              </Form.Item>
            </Form>
          </Box>
          <Divider dashed/>
          <Typography.Text className={styles.SubTitle}>分类标题</Typography.Text>
          <Box>
            <Form labelAlign="top" responsive>
              <Form.Item colSpan={4} label="月薪">
                <span className="next-form-preview">{dataSource.salary.month}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="月数">
                <span className="next-form-preview">{dataSource.salary.monthNumber}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="津贴">
                5.000 USD
                <span className="next-form-preview">{dataSource.salary.bonus}</span>
              </Form.Item>
              <Form.Item colSpan={4} label="标题">
                <span className="next-form-preview">-</span>
              </Form.Item>
              <Form.Item colSpan={8} label="标题">
                <span className="next-form-preview">-</span>
              </Form.Item>
              <Form.Item colSpan={4} label="Options/RSU">
                <span className="next-form-preview">{dataSource.salary.rsu}</span>
              </Form.Item>
            </Form>
          </Box>
        </Card.Content>
      </Card>
      <Card free>
        <Card.Header title={renderTab()} className={styles.TableCardHeader} />
        <Card.Divider />
        <Card.Content>
          <div className={styles.Content}>
            <Table dataSource={dataSource.logs} hasBorder={false} className={styles.Table}>
              <Table.Column title="操作进程" dataIndex="opStatus" />
              <Table.Column title="操作人" dataIndex="operator" />
              <Table.Column title="执行结果" dataIndex="opResult" />
              <Table.Column title="操作时间" dataIndex="opTime" />
            </Table>
          </div>
        </Card.Content>
      </Card>
    </Box>
  </>);
};

export default AdvancedDetail;
