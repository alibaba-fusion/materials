import React, { Component } from 'react';
import IceContainer from '@alifd/ice-container';
import { Tab, Button, Icon, Grid, SplitButton } from '@alifd/next';
import './DownloadCard.scss';

const { Row, Col } = Grid;
const { Item : TabItem } = Tab;

const response = {
  "status": "SUCCESS",
  "data": {
    "clientSDK": [
      {
        "img": "//img.alicdn.com/tfs/TB1gX6WNFXXXXb6XXXXXXXXXXXX-130-108.png",
        "title": "淘宝交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB17ITyNFXXXXaGXVXXXXXXXXXX-114-102.png",
        "title": "淘宝交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB1EA2FNFXXXXX2XFXXXXXXXXXX-96-126.png",
        "title": "淘宝交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB1gX6WNFXXXXb6XXXXXXXXXXXX-130-108.png",
        "title": "淘宝交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB17ITyNFXXXXaGXVXXXXXXXXXX-114-102.png",
        "title": "淘宝交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB1EA2FNFXXXXX2XFXXXXXXXXXX-96-126.png",
        "title": "淘宝交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      }
    ],
    "serverSDK": [
      {
        "img": "//img.alicdn.com/tfs/TB1gX6WNFXXXXb6XXXXXXXXXXXX-130-108.png",
        "title": "天猫交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB17ITyNFXXXXaGXVXXXXXXXXXX-114-102.png",
        "title": "天猫交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB1EA2FNFXXXXX2XFXXXXXXXXXX-96-126.png",
        "title": "天猫交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB1gX6WNFXXXXb6XXXXXXXXXXXX-130-108.png",
        "title": "天猫交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB17ITyNFXXXXaGXVXXXXXXXXXX-114-102.png",
        "title": "天猫交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      },
      {
        "img": "//img.alicdn.com/tfs/TB1EA2FNFXXXXX2XFXXXXXXXXXX-96-126.png",
        "title": "天猫交易",
        "desc": "快速搭建交易闭环",
        "androidSDK": "https://www.taobao.com",
        "iosSDK": "https://www.taobao.com",
        "version": "",
        "docs": "",
        "guide": "",
        "faq": ""
      }
    ]
  }
}

let tabData = {};

export default class DownloadCard extends Component {
  static displayName = 'DownloadCard';

  componentWillMount() {
    tabData = response.data;
  }
  
  renderContent = (data) => {
    return data.map((item, index) => {
      return (
        <Col key={index}>
          <div key={index} style={styles.columnCardItem}>
            <div style={styles.cardBody}>
              <div style={styles.avatarWrapper}>
                <img style={styles.img} src={item.img} alt="头像" />
              </div>
              <p style={styles.title}>{item.title}</p>
              <p style={styles.desc}>{item.desc}</p>
            </div>

            <div style={styles.downloadButtons}>
              <Button
                href={item.androidSDK}
                download
                style={styles.leftButton}
                type="primary"
              >
                <Icon type="download" /> Android SDK
              </Button>
              <Button
                href={item.iosSDK}
                download
                style={styles.rightButton}
                type="primary"
              >
                <Icon type="download" /> IOS SDK
              </Button>
            </div>

            <div style={styles.cardBottom}>
              <a href={item.version} style={styles.bottomText}>
                版本记录
              </a>
              <a href={item.docs} style={styles.bottomText}>
                集成文档
              </a>
              <a href={item.guide} style={styles.bottomText}>
                使用指南
              </a>
              <a href={item.faq} style={styles.bottomText}>
                FAQ
              </a>
            </div>
          </div>
        </Col>
      );
    });
  };

  render() {
    return (
      <div className="download-card" style={styles.downloadCard}>
        <IceContainer>
          <Tab contentStyle={{ padding: '20px 5px' }}>
            <TabItem title="客户端SDK" key="1">
              <Row gutter="20" wrap>
                {tabData.clientSDK
                  ? this.renderContent(tabData.clientSDK)
                  : '暂无数据'}
              </Row>
            </TabItem>
            <TabItem title="服务端SDK" key="2">
              <Row gutter="20" wrap>
                {tabData.serverSDK
                  ? this.renderContent(tabData.serverSDK)
                  : '暂无数据'}
              </Row>
            </TabItem>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  columnCardItem: {
    marginBottom: 20,
    position: 'relative',
    float: 'left',
    width: '100%',
    minWidth: '284px',
    // height: '280px',
    padding: '0px',
    overflow: 'hidden',
    boxShadow:
      '0px 0px 2px 0px rgba(0, 0, 0, 0.1),0px 2px 2px 0px rgba(0, 0, 0, 0.1)',
    background: '#fff',
  },
  cardBody: {
    textAlign: 'center',
    padding: '20px 0',
    borderBottom: '1px solid #dedede',
  },
  avatarWrapper: {
    width: '50px',
    height: '50px',
    overflow: 'hidden',
    margin: '0 auto',
  },
  title: {
    fontSize: '20px',
    margin: '10px',
  },
  desc: {
    fontSize: '15px',
    color: '#999',
  },
  downloadButtons: {
    margin: '15px 0',
    textAlign: 'center',
  },
  rightButton: {
    width: '114px',
    fontSize: '13px',
    marginLeft: '10px',
  },
  leftButton: {
    width: '114px',
    fontSize: '13px',
  },
  cardBottom: {
    padding: '10px 10px',
    background: '#f6f7f9',
  },
  bottomText: {
    marginLeft: '15px',
    fontSize: '13px',
    color: '#666',
    textDecoration: 'none',
  },
  img: {
    width: '100%',
  },
};
