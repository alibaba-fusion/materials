import React, { SFC, useEffect, useState, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import { Box, Card, Button, Form, Input, Select, Radio, Step, Field, Divider, Tag, Avatar, Typography, ResponsiveGrid } from '@alifd/next';
import styles from './index.module.scss';

export interface Experience {
  company?: string;
  position?: string;
  region?: string;
  description?: string;
  salary?: string;
  time?: number;
  allowance?: string;
  rsu?: boolean;
}

export interface Approval {
  approverId?: number;
  signatureId?: number;
  assessmentType?: number;
  feedback?: string;
}

export interface DataSource {
  approval?: Approval;
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
    salary?: string;
    experiences?: Experience[];
  };
}

export interface FlowFormProps {
  dataSource?: DataSource;
  footerLeft?: number;
  footerRight?: number;
  onAgree?: (data: Approval) => void;
  onRefuse?: () => void;
  onTransfer?: () => void;
  onSignature?: () => void;
}

const DEFAULT_DATA: DataSource = {
  approval: {
    approverId: 1,
    assessmentType: 1,
  },
  person: {
    avatar: 'https://img.alicdn.com/tfs/TB1WpoDouH2gK0jSZJnXXaT1FXa-1072-1608.jpg',
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
    salary: '20,000',
    experiences: [{
      company: '浙江杭州天猫有限公司',
      position: '高级研发专家',
      region: '中国/浙江',
      description: 'Fusion 是一套企业级中后台设计系统解决方案，致力于解决产品体验一致性问题、设计研发协同问题，以及UI开发效率问题。',
      salary: '20,000 USD',
      time: 13,
      allowance: '5,000 USD',
      rsu: false,
    }],
  },
};

const FlowForm: SFC<FlowFormProps> = (props) => {
  const {
    dataSource = DEFAULT_DATA,
    onAgree = () => {},
    onRefuse = () => {},
    onTransfer = () => {},
    onSignature = () => {},
  } = props;

  const field = Field.useField({
    values: dataSource.approval,
  });

  const containerRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react/no-find-dom-node
    const dom = findDOMNode(containerRef.current) as HTMLDivElement;
    const rect = dom && dom.getBoundingClientRect() || {};
    setLeft(rect.left);
    setRight(document.documentElement.offsetWidth - rect.left - rect.width);
  }, []);

  return (
    <Box ref={containerRef} spacing={20} className={styles.FlowForm}>
      <Card free>
        <Card.Content>
          <Step shape="dot" current={1}>
            <Step.Item key={0} title="申请"/>
            <Step.Item key={1} title="审批" content="李强"/>
            <Step.Item key={2} title="接受"/>
            <Step.Item key={3} title="合同发送"/>
            <Step.Item key={4} title="合同接受"/>
            <Step.Item key={5} title="入职准备"/>
            <Step.Item key={6} title="完成"/>
          </Step>
        </Card.Content>
      </Card>
      <Card free>
        <Card.Header title="审批信息" />
        <Card.Divider />
        <Card.Content>
          <Form labelAlign="top" fullWidth field={field} responsive>
            <Form.Item label="审批人" colSpan={4} required>
              <Select name="approverId" placeholder="请选择审批人">
                <Select.Option value={1}>李强</Select.Option>
                <Select.Option value={2}>张三</Select.Option>
                <Select.Option value={3}>李四</Select.Option>
                <Select.Option value={4}>王五</Select.Option>
                <Select.Option value={5}>阮小二</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="加签人" colSpan={4}>
              <Select name="signatureId" placeholder="请选择加签人">
                <Select.Option value={1}>李强</Select.Option>
                <Select.Option value={2}>张三</Select.Option>
                <Select.Option value={3}>李四</Select.Option>
                <Select.Option value={4}>王五</Select.Option>
                <Select.Option value={5}>阮小二</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="评估方式" colSpan={4}>
              <Radio.Group name="assessmentType">
                <Radio value={1}>已电面</Radio>
                <Radio value={2}>未电面</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="意见&反馈" colSpan={8}>
              <Input.TextArea maxLength={500} hasLimitHint placeholder="请输入描述" />
            </Form.Item>
          </Form>
        </Card.Content>
      </Card>
      <Card free>
        <Card.Header title="候选人信息" />
        <Card.Divider />
        <Card.Content>
          <ResponsiveGrid>
            <ResponsiveGrid.Cell colSpan={6}>
              <Box spacing={16} direction="row" align="top">
                <Box padding={[9,0,0,0]}>
                  <Avatar src={dataSource.person.avatar}/>
                </Box>
                <Box spacing={10}>
                  <Form labelAlign="top" responsive>
                    <Form.Item label={`${dataSource.person.surname}${dataSource.person.name}`} colSpan={12}>
                      <span className="next-form-preview">{dataSource.person.phone} | {dataSource.person.email}</span>
                    </Form.Item>
                    <Form.Item label="现在所在地" colSpan={6}>
                      <span className="next-form-preview">{dataSource.person.address}</span>
                    </Form.Item>
                    <Form.Item label="工作经验" colSpan={6}>
                      <span className="next-form-preview">{dataSource.person.workTime}</span>
                    </Form.Item>
                    <Form.Item label="教育经历" colSpan={6}>
                      <span className="next-form-preview">{dataSource.person.education}</span>
                    </Form.Item>
                  </Form>
                </Box>
              </Box>
            </ResponsiveGrid.Cell>
            <ResponsiveGrid.Cell colSpan={6} style={{ position: 'relative' }}>
              <Divider className={styles.Divider} direction="ver" />
              <Form labelAlign="top" responsive>
                <Form.Item label="职级" colSpan={6}>
                  <span className="next-form-preview">{dataSource.person.rank}</span>
                </Form.Item>
                <Form.Item label="职位" colSpan={6}>
                  <span className="next-form-preview">{dataSource.person.position}</span>
                </Form.Item>
                <Form.Item label="部门" colSpan={6}>
                  <span className="next-form-preview">{dataSource.person.department}</span>
                </Form.Item>
                <Form.Item label="工作地" colSpan={6}>
                  <span className="next-form-preview">{dataSource.person.workAddress}</span>
                </Form.Item>
                <Form.Item label="薪水" colSpan={6}>
                  <Box direction="row" spacing={8} align="center" className="next-form-preview">
                    {dataSource.person.salary} <Tag color="green">+23.2%</Tag>
                  </Box>
                </Form.Item>
              </Form>
            </ResponsiveGrid.Cell>
          </ResponsiveGrid>
        </Card.Content>
      </Card>
      <Card free>
        <Card.Header title="基础信息" />
        <Card.Divider />
        <Card.Content>
          <Form labelAlign="top" responsive>
            <Form.Item label="姓氏" required colSpan={4}>
              <span className="next-form-preview">{dataSource.person.surname}</span>
            </Form.Item>
            <Form.Item label="名字" required colSpan={4}>
              <span className="next-form-preview">{dataSource.person.name}</span>
            </Form.Item>
            <Form.Item label="国家/地区" colSpan={4}>
              <span className="next-form-preview">{dataSource.person.region}</span>
            </Form.Item>
            <Form.Item label="电话号码" required colSpan={4}>
              <span className="next-form-preview">{dataSource.person.phone}</span>
            </Form.Item>
            <Form.Item label="邮箱" required colSpan={4}>
              <span className="next-form-preview">{dataSource.person.email}</span>
            </Form.Item>
            <Form.Item label="现居地址" required colSpan={4}>
              <span className="next-form-preview">{dataSource.person.address}</span>
            </Form.Item>
          </Form>
        </Card.Content>
      </Card>
      <Card free>
        <Card.Header title="工作经历" />
        <Card.Divider />
        {
          dataSource.person.experiences.map((experience) => (
            <Card.Content>
              <Box>
                <Typography.Text className={styles.SubTitle}>公司信息</Typography.Text>
                <Form labelAlign="top" responsive>
                  <Form.Item label="工作单位" required colSpan={4}>
                    <span className="next-form-preview">{experience.company}</span>
                  </Form.Item>
                  <Form.Item label="职位" required colSpan={4}>
                    <span className="next-form-preview">{experience.position}</span>
                  </Form.Item>
                  <Form.Item label="国家/地区" colSpan={4}>
                    <span className="next-form-preview">{experience.region}</span>
                  </Form.Item>
                  <Form.Item label="职责描述" required colSpan={8}>
                    <span className="next-form-preview">{experience.description}</span>
                  </Form.Item>
                </Form>
              </Box>
              <Divider dashed />
              <Box>
                <Typography.Text className={styles.SubTitle}>待遇信息</Typography.Text>
                <Form labelAlign="top" responsive>
                  <Form.Item label="月薪" colSpan={4}>
                    <span className="next-form-preview">{experience.salary}</span>
                  </Form.Item>
                  <Form.Item label="月数" colSpan={4}>
                    <span className="next-form-preview">{experience.time}</span>
                  </Form.Item>
                  <Form.Item label="国家/地区" colSpan={4}>
                    <span className="next-form-preview">{experience.region}</span>
                  </Form.Item>
                  <Form.Item label="Options/RSU" colSpan={4}>
                    <span className="next-form-preview">{experience.rsu ? 'Yes' : 'No'}</span>
                  </Form.Item>
                </Form>
              </Box>
            </Card.Content>
          ))
        }
      </Card>
      <div>
        <Box direction="row" spacing={8} align="center" justify="center" style={{ left, right }} className={styles.FlowFormFooter}>
          <Button onClick={() => onAgree(field.getValues())} type="primary">同意</Button>
          <Button onClick={onRefuse} type="secondary">拒绝</Button>
          <Button onClick={onTransfer} type="secondary">转移</Button>
          <Button onClick={onSignature} type="secondary">加签</Button>
        </Box>
      </div>
    </Box>
  );
};

export default FlowForm;
