import React, { Component } from 'react';
import IceContainer from '@alifd/ice-container';
import { Tab, Button, Grid } from '@alifd/next';
import IceEllipsis from '@alifd/ice-ellipsis';

const { Row, Col } = Grid;
const { Item: TabItem } = Tab;

const response = {
  "status": "SUCCESS",
  "data": {
    "all": [
      {
        "title": "淘宝头条",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "淘宝头条",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "淘宝头条",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "淘宝头条",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "淘宝头条",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "淘宝头条",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      }
    ],
    "apply": [
      {
        "title": "极有家",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "极有家",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "极有家",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "极有家",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "极有家",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "极有家",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      }
    ],
    "existing": [
      {
        "title": "聚划算",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "聚划算",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "聚划算",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "聚划算",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "聚划算",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      },
      {
        "title": "聚划算",
        "desc": "网罗天下高逼格好物的商品推荐平台,品质生活指南,只要是好的东西,我们这里就要。我们要求你有出众的选品能力,眼光独到,善于发现。在这里我们重新定义好。"
      }
    ]
  }
};

let tabData = {};

export default class InfoDisplayTab extends Component {
  static displayName = 'InfoDisplayTab';

  componentWillMount() {
    tabData = response.data;
  }

  renderContent = (data) => {
    return data.map((item, index) => {
      return (
        <Col xxs="24" s="12" l="8" key={index}>
          <div style={styles.columnCard}>
            <div style={styles.cardTitle}>{item.title}</div>
            <div style={styles.cardDescWrapper}>
              <div style={styles.cardDesc}>
                <IceEllipsis lineLimit={6} text={item.desc} />
              </div>
            </div>
            <div style={styles.cardBtnWrapper}>
              <Button
                type="primary"
                component="a"
                href="http://www.taobao.com"
                target="_blank"
                size="large"
              >
                申请频道
              </Button>
            </div>
          </div>
        </Col>
      );
    });
  };

  render() {
    return (
      <div className="info-display-tab">
        <IceContainer>
          <Tab  onChange={this.callback}>
            <TabItem title="全部频道" key="1">
              <Row wrap gutter={20}>
                {tabData.all ? this.renderContent(tabData.all) : '暂无数据'}
              </Row>
            </TabItem>
            <TabItem title="可申请频道" key="2">
              <Row wrap gutter={20}>
                {tabData.apply ? this.renderContent(tabData.apply) : '暂无数据'}
              </Row>
            </TabItem>
            <TabItem title="已获得频道" key="3">
              <Row wrap gutter={20}>
                {tabData.existing
                  ? this.renderContent(tabData.existing)
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
  columnCard: {
    overflow: 'hidden',
    boxShadow:
      '0px 0px 2px 0px rgba(0, 0, 0, 0.1),0px 2px 2px 0px rgba(0, 0, 0, 0.1)',
    background: '#fff',
    height: '280px',
    marginBottom: '20px',
  },
  cardDescWrapper: {
    marginTop: '20px',
  },
  cardTitle: {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '22px',
  },
  cardDesc: {
    padding: '0 20px',
    height: '144px',
    overflow: 'hidden',
    lineHeight: '24px',
    fontSize: '14px',
    color: '#666',
    margin: '5px auto 0 auto',
  },
  cardBtnWrapper: {
    textAlign: 'center',
    marginTop: '15px',
  },
};
