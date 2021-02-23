import React from 'react';
import { Card } from '@alifd/next';
import { Chart, Geom, Coord, Legend, Axis, Tooltip } from 'bizcharts';
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
  subTitle: '门店量',
  value: mock.value,
  chartData: mock.saleList,
  des: '周同比:',
  rate: '10.1',
  chartHeight: 100,
};

const barState = {
  active: {
    style: {
      fillOpacity: 0.8,
      stroke: 'transparent',
    },
  },
  inactive: {
    style: {
      fillOpacity: 1,
    },
  },
};

export interface FusionCardTypebarChartProps {
  cardConfig?: CardConfig;
}

const FusionCardTypebarChart: React.FunctionComponent<FusionCardTypebarChartProps> = (props: FusionCardTypebarChartProps): JSX.Element => {
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
          autoFit
          padding="auto"
          interactions={['element-highlight']}
        >
          <Coord transpose />
          <Legend visible={false} />
          <Tooltip visible={false} />
          <Axis name="type" visible={false} />
          <Axis name="value" visible={false} />
          <Geom type="interval" position="type*value" color={['type', ['#096DD9', '#209BFA']]} state={barState} />
        </Chart>
      </Card.Content>
    </Card>
  );
};

export default FusionCardTypebarChart;
