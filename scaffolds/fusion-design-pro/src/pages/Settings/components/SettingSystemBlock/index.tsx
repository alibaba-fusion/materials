import React, { useState, useEffect } from 'react';
import { Avatar, Card, Tab, ResponsiveGrid, Table, Typography, Upload, Button, Form, Input, Message, Box, Radio, Dialog, Icon } from '@alifd/next';
import { UploadProps } from '@alifd/next/types/upload';
import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;
const FormItem = Form.Item;

const MockData = [
  {
    name: '阿不思·布萊恩·鄧不利多',
    logo: 'https://img.alicdn.com/tfs/TB1WsE2n5_1gK0jSZFqXXcpaXXa-183-183.png',
    privilege: '管理员',
  },
  {
    name: '戒钱',
    logo: 'https://img.alicdn.com/tfs/TB1cjwYnVT7gK0jSZFpXXaTkpXa-183-183.png',
    privilege: '管理员',
  },
  {
    name: '格林德沃',
    logo: 'https://img.alicdn.com/tfs/TB1l7g0nYr1gK0jSZR0XXbP8XXa-183-183.png',
    privilege: '管理员',
  },
  {
    name: '哈利玻特',
    logo: 'https://img.alicdn.com/tfs/TB1WUurnubviK0jSZFNXXaApXXa-183-183.png',
    privilege: '管理员',
  },
  {
    name: '小天狼星',
    logo: 'https://img.alicdn.com/tfs/TB10Ts2n1L2gK0jSZFmXXc7iXXa-183-183.png',
    privilege: '成员',
  },
  {
    name: '罗恩',
    logo: 'https://img.alicdn.com/tfs/TB1HHwYnVY7gK0jSZKzXXaikpXa-183-183.png',
    privilege: '成员',
  },
  {
    name: '伏地魔',
    logo: 'https://img.alicdn.com/tfs/TB1T_WrnubviK0jSZFNXXaApXXa-183-183.png',
    privilege: '成员',
  },
  {
    name: '赫敏',
    logo: 'https://img.alicdn.com/tfs/TB1D_GrnubviK0jSZFNXXaApXXa-183-183.png',
    privilege: '成员',
  },
];

export interface DataSource {
  name?: string;
  category?: string;
  description?: string;
  type?: string;
  pic?: UploadProps[];
}

export interface SettingSystemProps {
  dataSource?: DataSource;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const DEFAULT_DATA: DataSource = {
  name: 'lily',
  type: 'private',
  description: 'Fusion是一套企业级中后台设计系统解决方案，致力于解决产品体验一致性问题、设计研发协同问题，以及UI开发效率问题。',
};

const DEFAULT_ON_SUBMIT = (values: SettingSystemProps, errors: []): void => {
  if (errors) {
    console.log('errors', errors);
    return;
  }
  console.log('values:', values);
  Message.success('更新成功');
};

const SettingSystemBlock: React.SFC<SettingSystemProps> = (props): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
    onSubmit = DEFAULT_ON_SUBMIT,
  } = props;

  const [priList, setPriList] = useState([]);
  const [inited, setInited] = useState(false);
  const [postData, setValue] = useState<SettingSystemProps>(dataSource);

  useEffect(() => {
    setPriList(MockData);
    setInited(true);
  }, [inited]);


  const formChange = (values: SettingSystemProps): void => {
    setValue(values);
  };

  const onExitButtonClicked = (): void => {
    Dialog.confirm({
      title: '退出项目',
      content: '确定退出该项目？',
      messageProps: {
        type: 'warning',
      },
      onOk: (): void => console.log('ok'),
      onCancel: (): void => console.log('cancel'),
    });
  };

  return (
    <div className={styles.SettingPersonBlock}>
      <Tab className={styles.customTab} navClassName={styles.customTabHead}>
        <Tab.Item title="基础设置" key="basic">
          <Card free>
            <Card.Content>
              <Box className={styles.baseSettingContainer}>
                <Form
                  className={styles.baseSetting}
                  value={postData}
                  labelAlign="top"
                  onChange={formChange}
                  responsive
                >
                  <FormItem label='项目封面' colSpan={12}>
                    <ResponsiveGrid gap={10}>
                      <Cell colSpan={2}><Avatar shape="circle" size={64} icon="account" /></Cell>
                      <Cell colSpan={10} className={styles.changeLogo}>
                        <Box spacing={12}>
                          <FormItem>
                            <Upload name='pic'>
                              <Button className={styles.uploadButton} type="normal">更新头像</Button>
                            </Upload>
                          </FormItem>
                          <Box>
                            <p>* 头像尽量上传超过 80px*80px, 但不要太大了。</p>
                            <p>* 请上传两倍图保证清晰度</p>
                          </Box>
                        </Box>
                      </Cell>
                    </ResponsiveGrid>
                  </FormItem>
                  <FormItem label="项目名称" required requiredMessage="必填" colSpan={12}>
                    <Input placeholder="请输入项目名称" name="name" />
                  </FormItem>

                  <FormItem label="项目所属分类" required requiredMessage="必填" colSpan={12}>
                    <Input placeholder="请输入你的分类" name="category" />
                  </FormItem>

                  <FormItem colSpan={12} label="项目权限" >
                    <Radio.Group name="type" aria-labelledby="authority of project">
                      <Radio id="private" value="private">私密项目</Radio>
                      <Radio id="internal" value="internal">内部项目</Radio>
                      <Radio id="public" value="public">开放项目</Radio>
                    </Radio.Group>
                  </FormItem>
                  <FormItem label="项目描述" colSpan={12}>
                    <Input.TextArea placeholder="请输入项目描述" name="description" />
                  </FormItem>

                  <FormItem colSpan={12}>
                    <Box spacing={8} direction="row">
                      <Form.Submit
                        type="primary"
                        onClick={onSubmit}
                        validate
                      >保存</Form.Submit>
                    </Box>
                  </FormItem>
                </Form>
              </Box>
            </Card.Content>
          </Card>
        </Tab.Item>

        <Tab.Item title="权限设置" key="privilege">
          <Card free contentHeight={600}>
            <Card.Header title="权限设置" extra={
              <Box spacing={10} direction="row">
                <Button type="secondary">设置角色 1 权限</Button>
                <Button type="primary">新增</Button>
              </Box>
            } />
            <Card.Content>
              <Table dataSource={priList} hasHeader={false} hasBorder={false}>
                <Table.Column dataIndex="logo" cell={url => <Avatar src={url} />} width={50} />
                <Table.Column dataIndex="name" />
                <Table.Column dataIndex="privilege" />
                <Table.Column cell={() => <Icon type="ellipsis" />} />
              </Table>
            </Card.Content>
          </Card>
        </Tab.Item>

        <Tab.Item title="更多设置" key="more">
          <Card free>
            <Card.Content>
              <Box spacing={12}>
                <Typography.H3 className={styles.h3}>退出项目</Typography.H3>
                <Typography.Text className={styles.p}>一旦你退出这个项目，你将无法访问这个项目的任何内容。</Typography.Text>
                <span>
                  <Button type="normal" warning onClick={onExitButtonClicked}>退出项目</Button>
                </span>
              </Box>
            </Card.Content>
          </Card>
        </Tab.Item>
      </Tab>
    </div>
  );
};

export default SettingSystemBlock;
