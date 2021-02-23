import React from 'react';
import { Card } from '@alifd/next';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
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
            num: {
              ticks: [1, 1.5, 2], // / 设置ticks 让Y轴刻度线对其
            },
            value: {
              ticks: [1, 7, 13], // 设置ticks 让Y轴刻度线对其
            },
          }}
          autoFit
          padding="auto"
          appendPadding={[2, 0, 0, 0]} // 为了让 date*Num 那条线展示齐全
        >
          <Axis name="date" visible={false} />
          <Axis name="value" visible={false} />
          <Axis name="num" visible={false} />
          <Tooltip visible={false} />
          <Geom type="line" position="date*value" shape="smooth" color="#2B7FFB" />
          <Geom type="area" position="date*value" shape="smooth" color="#2B7FFB" style={{ fillOpacity: 0.1 }} />
          <Geom type="line" position="date*num" shape="smooth" color="#00D6CB" style={{ opacity: 1 }} />
          <Geom type="area" position="date*num" shape="smooth" color="#00D6CB" style={{ fillOpacity: 0.1 }} />
        </Chart>
      </Card.Content>
    </Card>
  );
};

export default FusionCardLineChart;
