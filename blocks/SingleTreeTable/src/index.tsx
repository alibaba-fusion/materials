import React, { useState } from 'react';
import { Table, Button, MenuButton, Message, Dialog } from '@alifd/next';
import styles from './index.module.scss';


const data = [{
  rowNo: '中华人民共和国国内安全管理条例',
  rowContent: '',
  children: [
    {
      rowNo: '第一条',
      // eslint-disable
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第二条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第三条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第四条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}, {
  rowNo: '中华人民共和国海商法',
  rowContent: '',
  children: [
    {
      rowNo: '第一条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第二条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第三条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第四条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}, {
  rowNo: '纳税担保试行方法',
  rowContent: '',
  children: [
    {
      rowNo: '第一条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第二条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第三条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第四条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}, {
  rowNo: '中华人民共和国担保法',
  rowContent: '',
  children: [
    {
      rowNo: '第一条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第二条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第三条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第四条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}, {
  rowNo: '纳税担保试行方法',
  rowContent: '',
  children: [
    {
      rowNo: '第一条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第二条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第三条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
    {
      rowNo: '第四条',
      rowContent: '法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容法律条文内容',
    },
  ]
}];

export default function SingleTreeTable() {
  const [visible, setVisible] = useState(false);

  const fetchRemote = () => {
    Message.success('请求成功');
  };

  const tableOperation = () => {
    return (
      <div className={styles.buttonGroup}>
        <Button type="primary" text onClick={fetchRemote}>删除</Button>
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
      </div>
    )
  };


  return (
    <div className={styles.container}>
      <Table
        dataSource={data}
        primaryKey="rowNo"
        isTree
        cellProps={(rowIndex, colIndex) => {
          if (rowIndex === 0 && colIndex === 0) {
            return {
              colSpan: 2
            };
          }
  
          if (rowIndex === 5 && colIndex === 0) {
            return {
              colSpan: 2
            };
          }

          if (rowIndex === 10 && colIndex === 0) {
            return {
              colSpan: 2
            };
          }

          if (rowIndex === 15 && colIndex === 0) {
            return {
              colSpan: 2
            };
          }

          if (rowIndex === 20 && colIndex === 0) {
            return {
              colSpan: 2
            };
          }
        }}
      >
        <Table.Column title="法律条文编号" dataIndex="rowNo"/>
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
    </div>
  );
}
