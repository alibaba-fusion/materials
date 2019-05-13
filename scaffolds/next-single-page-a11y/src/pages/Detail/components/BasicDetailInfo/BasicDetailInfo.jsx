import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import data from '../../../BasicTable/components/TabTable/data';

const { Row, Col } = Grid;

export default class BasicDetailInfo extends Component {
  static displayName = 'BasicDetailInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 渲染详情信息的数据
    const dataSource = {
      title: {
        label: '任务标题',
        value: '集盒家居旗舰店双十一活动',
      },
      shopName: {
        label: '店铺名称',
        value: '集盒家居旗舰店',
      },
      amount: {
        label: '任务金额',
        value: '1000.00',
      },
      bounty: {
        label: '任务赏金',
        value: '200.00',
      },
      orderTime: {
        label: '接单时间',
        value: '2017-10-18 12:20:07',
      },
      deliveryTime: {
        label: '交付时间',
        value: '2017-10-18 12:20:07',
      },
      phone: {
        label: '联系方式',
        value: '138xxxx9876',
      },
      address: {
        label: '收货地址',
        value: '杭州市文一西路',
      },
      status: {
        label: '任务状态',
        value: 'processing',
      },
      remark: {
        label: '备注',
        value: 'No',
      },
      pics: {
        label: '附件',
        value: [
          {
            img:
              'https://img.alicdn.com/tfs/TB16IyKU4YaK1RjSZFnXXa80pXa-180-180.jpg',
            alt: 'quilt',
          },
          {
            img:
              'https://img.alicdn.com/tfs/TB1CEmxUVzqK1RjSZFoXXbfcXXa-180-180.jpg',
            alt: 'hair dryer',
          },
          {
            img:
              'https://img.alicdn.com/tfs/TB19Tjuh13tHKVjSZSgXXX4QFXa-180-180.jpg',
            alt: 'clothes',
          },
          {
            img:
              'https://img.alicdn.com/tfs/TB1DUyyU3HqK1RjSZFPXXcwapXa-180-180.jpg',
            alt: 'Down jacket',
          },
        ],
      },
    };

    return (
      <div>
        <h2 style={styles.basicDetailTitle} tabIndex="0">
          基本详情
        </h2>

        <div style={styles.border}>
          <div
            style={styles.infoColumn}
            role="grid"
            aria-labelledby="base-info"
          >
            <h5 style={styles.infoColumnTitle} id="base-info">
              基本详情页面
            </h5>
            <Row wrap style={styles.infoItems}>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.title.label}：
                </span>
                <span style={styles.infoItemValue}>
                  {dataSource.title.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.shopName.label}：
                </span>
                <span style={styles.infoItemValue}>
                  {dataSource.shopName.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.amount.label}：
                </span>
                <span style={styles.infoItemValue}>
                  ¥ {dataSource.amount.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.bounty.label}：
                </span>
                <span style={styles.infoItemValue}>
                  ¥ {dataSource.bounty.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.orderTime.label}：
                </span>
                <span style={styles.infoItemValue}>
                  {dataSource.orderTime.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.deliveryTime.label}：
                </span>
                <span style={styles.infoItemValue}>
                  {dataSource.deliveryTime.value}
                </span>
              </Col>
            </Row>
          </div>

          <div
            style={styles.infoColumn}
            role="grid"
            aria-labelledby="more-info"
          >
            <h5 style={styles.infoColumnTitle} id="more-info">
              更多信息
            </h5>
            <Row wrap style={styles.infoItems}>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.phone.label}：
                </span>
                <span style={styles.infoItemValue}>
                  {dataSource.phone.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.address.label}：
                </span>
                <span style={styles.infoItemValue}>
                  {dataSource.address.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.status.label}：
                </span>
                <span style={styles.infoItemValue}>
                  {dataSource.status.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.infoItemLabel}>
                  {dataSource.remark.label}：
                </span>
                <span style={styles.infoItemValue}>
                  {dataSource.remark.value}
                </span>
              </Col>
              <Col xxs="24" l="12" style={styles.infoItem}>
                <span style={styles.attachLabel}>
                  {dataSource.pics.label}：
                </span>
                <span>
                  {dataSource.pics.value &&
                    dataSource.pics.value.length &&
                    dataSource.pics.value.map((item, index) => {
                      return (
                        <img
                          key={index}
                          src={item.img}
                          style={styles.attachPics}
                          alt={item.alt}
                        />
                      );
                    })}
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  basicDetailTitle: {
    fontSize: '24px',
    fontWeight: 'normal',
    lineHeight: '64px',
    height: '64px',
    outline: 'none',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    paddingLeft: '20px',
    color: '#4a5b6d',
    boxShadow: '0px 2px 12px 0px rgba(75, 89, 128, 0.1)',
  },
  border: {
    background: 'white',
    borderRadius: '8px',
    margin: '5px',
  },
  infoColumn: {
    marginLeft: '16px',
    padding: '5px',
  },
  infoColumnTitle: {
    margin: '20px 0',
    height: '22px',
    lineHeight: '22px',
    paddingLeft: '10px',
    borderLeft: '4px solid #0B6D65',
  },
  infoItems: {
    padding: 0,
    marginLeft: '25px',
  },
  infoItem: {
    marginBottom: '18px',
    listStyle: 'none',
    fontSize: '14px',
  },
  infoItemLabel: {
    minWidth: '70px',
    color: '#333',
  },
  infoItemValue: {
    color: '#333',
  },
  attachLabel: {
    minWidth: '70px',
    color: '#333',
    float: 'left',
  },
  attachPics: {
    width: '80px',
    height: '80px',
    border: '1px solid #eee',
    marginRight: '10px',
  },
};
