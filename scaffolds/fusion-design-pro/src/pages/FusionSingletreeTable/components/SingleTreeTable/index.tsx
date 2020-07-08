import React, { useState } from 'react';
import { Card, Table, Button, MenuButton, Message, Dialog } from '@alifd/next';
import styles from './index.module.scss';


const data = [{
  id: 'first',
  rowNo: '中华人民共和国国内安全管理条例',
  rowContent: '',
  children: [
    {
      id: 1,
      rowNo: '第一条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 2,
      rowNo: '第二条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 3,
      rowNo: '第三条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 4,
      rowNo: '第四条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}, {
  id: 'second',
  rowNo: '中华人民共和国海商法',
  rowContent: '',
  children: [
    {
      id: 5,
      rowNo: '第一条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 6,
      rowNo: '第二条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 7,
      rowNo: '第三条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 8,
      rowNo: '第四条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}, {
  id: 'third',
  rowNo: '纳税担保试行方法',
  rowContent: '',
  children: [
    {
      id: 9,
      rowNo: '第一条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 10,
      rowNo: '第二条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 11,
      rowNo: '第三条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 12,
      rowNo: '第四条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}, {
  id: 'fourth',
  rowNo: '中华人民共和国担保法',
  rowContent: '',
  children: [
    {
      id: 13,
      rowNo: '第一条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 14,
      rowNo: '第二条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 15,
      rowNo: '第三条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 16,
      rowNo: '第四条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}, {
  id: 'fifth',
  rowNo: '纳税担保试行方法',
  rowContent: '',
  children: [
    {
      id: 17,
      rowNo: '第一条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 18,
      rowNo: '第二条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 19,
      rowNo: '第三条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      id: 20,
      rowNo: '第四条',
      // eslint-disable-next-line
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}];

export default function SingleTreeTable() {
  const [visible, setVisible] = useState(false);

  const fetchRemote = () => {
    Message.success('请求成功');
  };

  const tableOperation = (value, index, record) => {
    return (
      <div className={styles.buttonGroup}>
        <Button type="primary" text onClick={fetchRemote}>删除</Button>
        {record && record.children &&
        <>
          <Button type="primary" text onClick={() => setVisible(true)}>编辑</Button>
          <MenuButton
            type="primary"
            text
            popupProps={{ autoFit: true }}
            label="更多"
          >
            <MenuButton.Item onClick={fetchRemote}>提交审核</MenuButton.Item>
            <MenuButton.Item onClick={fetchRemote}>打回</MenuButton.Item>
          </MenuButton>
        </>
        }
      </div>
    )
  };


  return (
    <Card free className={styles.container}>
      <Card.Content>
        <Table
          dataSource={data}
          hasBorder={false}
          primaryKey="id"
          isTree
          cellProps={(rowIndex, colIndex, dataIndex, record) => {
            if (record.children && colIndex === 0) {
              return {
                colSpan: 2,
              };
            }
          }}
        >
          <Table.Column title="法律条文编号" dataIndex="rowNo" width={140}/>
          <Table.Column title="法律条文内容" dataIndex="rowContent"/>
          <Table.Column title="操作" dataIndex="operation" width={180} cell={tableOperation} />
        </Table>
        <Dialog
          title="编辑窗口"
          visible={visible}
          onClose={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          onOk={() => { fetchRemote(); setVisible(false); }}
        >
          这里是编辑内容
        </Dialog>
      </Card.Content>
    </Card>
  );
}
