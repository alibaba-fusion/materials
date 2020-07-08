import React from 'react';
import { Card } from '@alifd/next';
import { Chart, Geom } from 'bizcharts';
import mock from './mock.js';

import styles from './index.module.scss';

interface ChartItem {
  date?: string | number;
  value?: number;
};

interface FusionCardAreaChartProps {
  title?: string | React.ReactDOM;
  subTitle?: string | React.ReactDOM;
  value?: string;
  chartData?: ChartItem[];
  des?: string;
  rate?: string;
  chartHeight?: number;
};

const DEFAULT_DATA: FusionCardAreaChartProps = {
  title: '',
  subTitle: '访问量',
  value: mock.value,
  chartData: mock.saleList,
  des: '周同比:',
  rate: '12.0',
  chartHeight: 100,
};

const FusionCardAreaChart: React.FunctionComponent<FusionCardAreaChartProps> = (props = DEFAULT_DATA): JSX.Element => {

  const { title, subTitle, value, chartData, des, rate, chartHeight } = { ...DEFAULT_DATA, ...props };

  return (
    <Card free className={styles.areaChart}>
      {
        title ? (
          <>
            <Card.Header title={title} />
            <Card.Divider />
          </>
        ) : null
      }
      <Card.Content>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.value}>{value}</div>
        <div className={styles.des}>{des}<span>{rate}↑</span></div>
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
          padding={['auto', '0']}
        >
          <Geom type="line" position="date*value" color="#00D6CB" shape="smooth" opacity={1}/>
          <Geom type="area" position="date*value" color="#00D6CB" shape="smooth" opacity={0.1}/>

        </Chart>
      </Card.Content>
    </Card>
  );
};

export default FusionCardAreaChart;
