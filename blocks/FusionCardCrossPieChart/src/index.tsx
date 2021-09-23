import React from 'react';
import { Card } from '@alifd/next';
import { Chart, Geom, Coord, Legend } from 'bizcharts';

interface ChartItem {
  type?: string;
  value?: number;
  title?: string;
}

interface CardConfig {
  title?: string;
  chartData?: ChartItem[];
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  title: '用户浏览器占比',
  chartData: [
    {
      type: 'chrome',
      value: 40,
      title: 'chrome | 40.00%     ¥4,544',
    },
    {
      type: 'IE',
      value: 21,
      title: 'IE | 22.12%     ¥2,344',
    },
    {
      type: 'FireFox',
      value: 17,
      title: 'FireFox | 16.59%     ¥3,512',
    },
    {
      type: 'safari',
      value: 13,
      title: 'safari | 13.11%     ¥2,341',
    },
    {
      type: 'Opera',
      value: 9,
      title: 'Opera |  9.29%     ¥1,231',
    },
  ],
  chartHeight: 240,
};

// 自定义hover的图形样式
const pieState = {
  active: {
    style: {
      fillOpacity: 0.7,
      lineWidth: 1,
      stroke: 'white',
      strokeOpacity: 1,
    },
  },
  inactive: {
    style: {
      fillOpacity: 0.85,
      lineWidth: 1,
      stroke: 'white',
      strokeOpacity: 1,
    },
  },
};

export interface FusionCardLineChartProps {
  cardConfig?: CardConfig;
}

const FusionCardLineChart: React.FunctionComponent<FusionCardLineChartProps> = (props: FusionCardLineChartProps): JSX.Element => {
  const {
    cardConfig = DEFAULT_DATA,
  } = props;

  const { title, chartData, chartHeight } = cardConfig;


  return (
    <Card free>
      <Card.Header title={title} />
      <Card.Divider />
      <Card.Content>
        <Chart
          pure
          height={chartHeight}
          autoFit
          data={chartData}
          padding="auto"
          interactions={['element-single-selected', 'element-highlight']}
        >
          <Coord type="theta" radius={0.72} innerRadius={0.6} />
          <Legend
            position="right"
            layout="vertical"
            itemName={{
              style: {
                fill: '#666',
                fontSize: 14,
              },
            }}
            itemValue={null}
            itemMarginBottom={24}
          />
          <Geom
            type="interval"
            position="value"
            color="title"
            style={{
              lineWidth: 1,
              stroke: 'white',
              fillOpacity: 0.85,
            }}
            adjust="stack"
            state={pieState}
          />
        </Chart>
      </Card.Content>
    </Card>
  );
};

export default FusionCardLineChart;
