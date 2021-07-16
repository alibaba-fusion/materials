import React from 'react';
import { Card } from '@alifd/next';
import { Chart, LineAdvance } from 'bizcharts';
import mock from './mock.js';

import styles from './index.module.scss';

interface ChartItem {
  date?: string;
  value?: number;
}

interface CardConfig {
  title?: string | React.ReactDOM;
  subTitle?: string | React.ReactDOM;
  value?: string;
  chartData?: ChartItem[];
  des?: string;
  rate?: string;
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  subTitle: '门店活动效果',
  value: mock.value,
  chartData: mock.saleList,
  des: '周同比:',
  rate: '10.1',
  chartHeight: 100,
};

export interface FusionCardLineChartProps {
  cardConfig?: CardConfig;
}

const FusionCardLineChart: React.FunctionComponent<FusionCardLineChartProps> = (props: FusionCardLineChartProps): JSX.Element => {
  const {
    cardConfig = DEFAULT_DATA,
  } = props;

  const { title, subTitle, value, chartData, des, rate, chartHeight } = cardConfig;

  return (
    <Card free>
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
          height={chartHeight}
          data={chartData}
          scale={{
            date: {
              range: [0, 1],
            },
          }}
          pure
          autoFit
          padding="auto"
          appendPadding={[2, 0, 0, 0]} // 留出图形出血位置
        >
          <LineAdvance area position="date*value" shape="smooth" color="#2B7FFB" />
          <LineAdvance area position="date*num" shape="smooth" color="#00D6CB"  />
        </Chart>
      </Card.Content>
    </Card>
  );
};

export default FusionCardLineChart;
