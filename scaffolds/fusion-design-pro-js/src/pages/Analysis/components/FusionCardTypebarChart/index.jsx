import React from 'react';
import { Card } from '@alifd/next';
import { Chart, Geom, Coord } from 'bizcharts';
import mock from './mock.js';
import styles from './index.module.scss';

const DEFAULT_DATA = {
  subTitle: '门店量',
  value: mock.value,
  chartData: mock.saleList,
  des: '周同比:',
  rate: '10.1',
  chartHeight: 100,
};

const FusionCardTypebarChart = props => {
  const { cardConfig = DEFAULT_DATA } = props;
  const { title, subTitle, value, chartData, des, rate, chartHeight } = cardConfig;
  return (
    <Card free>
      {title ? (
        <>
          <Card.Header title={title} />
          <Card.Divider />
        </>
      ) : null}
      <Card.Content>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.value}>{value}</div>
        <div className={styles.des}>
          {des}
          <span>{rate}↑</span>
        </div>
        <Chart
          width={10}
          height={chartHeight}
          data={chartData}
          scale={{
            date: {
              range: [0, 1],
            },
          }}
          forceFit
          padding={['auto', 'auto']}
        >
          <Coord transpose />
          <Geom type="interval" position="type*value" color={['type', ['#096DD9', '#209BFA']]} />
        </Chart>
      </Card.Content>
    </Card>
  );
};

export default FusionCardTypebarChart;
