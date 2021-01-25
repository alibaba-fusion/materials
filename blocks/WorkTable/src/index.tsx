import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Typography,
  Tag,
  ResponsiveGrid,
  Tab,
  Card,
  Table,
  Calendar,
  Timeline,
  List,
} from '@alifd/next';
import mock from './mock';

import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;
const TimelineItem = Timeline.Item;

interface OrderItem {
  name?: string;
  state?: string;
  level?: string;
}

interface ProjectItem {
  projectId?: number;
  projectName?: string;
  projectDesc?: string;
  createTime?: string;
  img?: string;
  update?: string;
}

interface TimeLineItem {
  planName?: string;
  planAddress?: string;
  planTime?: string;
  planDuaring?: string;
}

interface UpdateItem {
  projectItem?: string;
  project?: string;
  time?: string;
  name?: string;
  action?: string;
  avatar?: string;
}

interface EntranceItem {
  name?: string;
  link?: string;
}

export interface DataSource {
  orderList?: OrderItem[];
  projectList?: ProjectItem[];
  timeLineList?: TimeLineItem[];
  updateList?: UpdateItem[];
  entranceList?: EntranceItem[];
  person?: {
    avatar?: string;
    surname?: string;
    name?: string;
    email?: string;
  };
}

const DEFAULT_DATA: DataSource = {
  person: {
    avatar: 'https://img.alicdn.com/tfs/TB1XdnvvUY1gK0jSZFCXXcwqXXa-500-500.png',
    surname: '谢',
    name: '莉莉',
    email: 'xielili@aliwork-inc.com',
  },
  orderList: mock.orderList,
  projectList: mock.projectList,
  timeLineList: mock.timeLineList,
  updateList: mock.updateList,
  entranceList: mock.entrances,
};
export interface WorkTableProps {
  dataSource?: DataSource;
}

const colorMap = {
  high: 'red',
  middle: 'yellow',
  low: 'green',
};

const WorkTable: SFC<WorkTableProps> = (props: WorkTableProps): JSX.Element => {
  const { dataSource = DEFAULT_DATA } = props;

  const { person, orderList, projectList, timeLineList, updateList, entranceList } = dataSource;

  const [tab, setTab] = useState('1');

  const changeTab = (val: string) => setTab(val);

  const renderLevel = (text: string, index: number) => {
    return (
      <span key={text + index.toString()}>
        <Tag size="small" color={colorMap[text]}>
          {text}
        </Tag>
      </span>
    );
  };

  return (
    <div className={styles.WorkTable}>
      <div className={styles.workerContainor}>
        <Box flex={1}>
          <Box direction="row" spacing={28}>
            <Avatar size={80} src={person.avatar} className={styles.avatar} />
            <Box>
              <Typography.Text className={styles.TitleName}>
                {person.surname}
                {person.name}
              </Typography.Text>
              <Typography.Text className={styles.TitleInfo}>{person.email}</Typography.Text>
            </Box>
          </Box>
          <Tab activeKey={tab} className={styles.tab} onChange={changeTab}>
            <Tab.Item title="选项卡一" key="1" />
            <Tab.Item title="选项卡二" key="2" />
            <Tab.Item title="选项卡三" key="3" />
          </Tab>
        </Box>
      </div>
      <div className={styles.workTableContent}>
        <ResponsiveGrid gap={20}>
          <Cell colSpan={8}>
            <Card free style={{ height: '100%' }}>
              <Card.Header title="我的任务" />
              <Card.Divider />
              <Card.Content>
                <Table
                  dataSource={orderList}
                  hasBorder={false}
                  rowSelection={{
                    getProps: (record: OrderItem, index: number): any => ({
                      children: (
                        <span key={index} className="next-table-cell-wrapper">
                          {record.name}
                        </span>
                      ),
                    }),
                    columnProps: () => ({ width: 330 }),
                    titleAddons: () => <span key="title" className="next-table-cell-wrapper">任务名称</span>,
                  }}
                >
                  <Table.Column title="所属阶段" dataIndex="state" width={230} />
                  <Table.Column title="优先级" dataIndex="level" cell={renderLevel} width={150} />
                </Table>
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={4}>
            <Card free>
              <Card.Header title="我的日程" />
              <Card.Divider />
              <Card.Content>
                <Box spacing={10}>
                  <Calendar shape="panel" />
                  <Typography.Text className={styles.planNumber}>
                    共 <span className={styles.strong}>{timeLineList.length}</span>个日程
                  </Typography.Text>
                  <Timeline>
                    {timeLineList.map(
                      (item): JSX.Element => (
                        <TimelineItem
                          key={item.planTime}
                          title={item.planName}
                          content={item.planAddress}
                          timeLeft={
                            <>
                              <span className={styles.planTime}>{item.planTime}</span>
                              <br />
                              <span className={styles.planDuaring}>{item.planDuaring}</span>
                            </>
                          }
                        />
                      ),
                    )}
                  </Timeline>
                </Box>
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={8}>
            <Card free>
              <Card.Header title="近期项目" />
              <Card.Divider />
              <Card.Content>
                <List>
                  {projectList.map((project) => {
                    return (
                      <List.Item key={project.projectName} title={project.projectName} media={<Avatar src={project.img} />}>
                        {project.projectDesc}
                      </List.Item>
                    );
                  })}
                  <List.Item>查看全部任务</List.Item>
                </List>
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={4}>
            <Card free style={{ height: '100%' }}>
              <Card.Header title="我的项目" />
              <Card.Divider />
              <Card.Content>
                <List>
                  <List.Item
                    title="Fusion Design"
                    media={
                      <Avatar src="https://img.alicdn.com/tfs/TB1SFZAvQL0gK0jSZFAXXcA9pXa-200-200.png" />
                    }
                  />
                  <List.Item
                    title="Alibaba ICS"
                    media={
                      <Avatar src="https://img.alicdn.com/tfs/TB1QwMzvHr1gK0jSZR0XXbP8XXa-200-200.png" />
                    }
                  />
                  <List.Item
                    title="Retcode 前端监控"
                    media={
                      <Avatar src="https://img.alicdn.com/tfs/TB1qxgDvG61gK0jSZFlXXXDKFXa-200-200.png" />
                    }
                  />
                  <List.Item
                    title="新零售事业部"
                    media={
                      <Avatar src="https://img.alicdn.com/tfs/TB1TfwDvQT2gK0jSZFkXXcIQFXa-200-200.png" />
                    }
                  />
                  <List.Item
                    title="前端物料中心"
                    media={
                      <Avatar src="https://img.alicdn.com/tfs/TB1GgMzvHr1gK0jSZR0XXbP8XXa-200-200.png" />
                    }
                  />
                  <List.Item
                    title="大财鲸"
                    media={
                      <Avatar src="https://img.alicdn.com/tfs/TB1tHozvQP2gK0jSZPxXXacQpXa-200-200.png" />
                    }
                  />
                </List>
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={8}>
            <Card free>
              <Card.Header title="动态" />
              <Card.Divider />
              <Card.Content>
                <List>
                  {updateList.map((one, idx) => {
                    let title;
                    switch (one.action) {
                      case 'create':
                        title = (
                          <div key={idx}>
                            {one.name} 在 <a href="/">{one.project}</a> 新建项目{' '}
                            <a href="/">{one.projectItem}</a>{' '}
                          </div>
                        );
                        break;
                      case 'release':
                        title = (
                          <div key={idx}>
                            {one.name} 将 <a href="/">{one.project}</a> 更新至发布状态{' '}
                          </div>
                        );
                        break;
                      case 'note':
                        title = (
                          <div key={idx}>
                            {one.name} 在 <a href="/">{one.project}</a> 发布了{' '}
                            <a href="/">{one.projectItem}</a>{' '}
                          </div>
                        );
                        break;
                      default:
                        break;
                    }

                    return (
                      <List.Item key={idx} title={title} media={<Avatar src={one.avatar} />}>
                        {one.time}
                      </List.Item>
                    );
                  })}
                </List>
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={4}>
            <Card free>
              <Card.Header
                title="快捷入口"
                extra={
                  <Button type="primary" size="large" text component="a" href="#/">
                    设置
                  </Button>
                }
              />
              <Card.Divider />
              <Card.Content>
                <Box spacing={[20, 50]} direction="row" wrap>
                  {entranceList.map((item, idx) => {
                    return (
                      <Button key={idx} size="large" text component="a" href={item.link}>
                        {item.name}
                      </Button>
                    );
                  })}
                </Box>
              </Card.Content>
            </Card>
          </Cell>
        </ResponsiveGrid>
      </div>
    </div>
  );
};

export default WorkTable;
