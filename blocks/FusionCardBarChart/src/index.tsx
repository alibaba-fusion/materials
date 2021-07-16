import React from 'react';
import { Card } from '@alifd/next';
import { Chart, Geom } from 'bizcharts';
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
  rate?: number;
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  subTitle: '总销售额',
  value: mock.value,
  chartData: mock.saleList,
  des: '周同比:',
  rate: 10.1,
  chartHeight: 100,
};

const barState = {
  // 鼠标hover后的active
  active: {
    style: {
      fillOpacity: 0.8,
      stroke: 'transparent',
    },
  },
  // 其他未被hover的图形样式
  inactive: {
    style: {
      fillOpacity: 1,
    },
  },
};

export interface FusionCardBarChartProps {
  cardConfig?: CardConfig;
}

const FusionCardBarChart: React.FunctionComponent<FusionCardBarChartProps> = (props: FusionCardBarChartProps): JSX.Element => {
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
          // pure chart 关闭图表默认组件
          pure
          autoFit
          padding="auto"
          appendPadding={[0, 16, 0, 16]}
          // 鼠标hover产生active状态
          interactions={['element-highlight']}
        >
          <Geom
            type="interval"
            position="date*value"
            color="#29A5FF"
            // 自定义状态样式
            state={barState}
          />
        </Chart>
      </Card.Content>
    </Card>
  );
};

export default FusionCardBarChart;
