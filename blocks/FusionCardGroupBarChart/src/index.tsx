import React from 'react';
import { Card } from '@alifd/next';
import { Chart, Geom, Axis, Legend, Tooltip } from 'bizcharts';

import styles from './index.module.scss';

interface ChartItem {
  type?: string;
  value?: number;
  category?: string;
}

interface CardConfig {
  title?: string;
  chartData?: ChartItem[];
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  title: '消费数据',
  chartData: [
    { category: '品类一', value: 123, type: '门店一' },
    { category: '品类一', value: 231, type: '门店二' },
    { category: '品类一', value: 321, type: '门店三' },
    { category: '品类二', value: -234, type: '门店一' },
    { category: '品类二', value: -342, type: '门店二' },
    { category: '品类二', value: -432, type: '门店三' },
    { category: '品类三', value: 322, type: '门店一' },
    { category: '品类三', value: 211, type: '门店二' },
    { category: '品类三', value: 113, type: '门店三' },
    { category: '品类四', value: 435, type: '门店一' },
    { category: '品类四', value: 543, type: '门店二' },
    { category: '品类四', value: 333, type: '门店三' },
    { category: '品类五', value: 111, type: '门店一' },
    { category: '品类五', value: 452, type: '门店二' },
    { category: '品类五', value: 234, type: '门店三' },
  ],
  chartHeight: 500,
};

const colors = ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864'];

const intervalState = {
  default: {
    style: { fillOpacity: 1 },
  },
  active: {
    style: { fillOpacity: 0.8, stroke: 'transparent' },
  },
  inactive: {
    style: { fillOpacity: 1 },
  },
};

export interface FusionCardGroupBarChartProps {
  cardConfig?: CardConfig;
}

const FusionCardGroupBarChart: React.FunctionComponent<FusionCardGroupBarChartProps> = (props: FusionCardGroupBarChartProps): JSX.Element => {
  const {
    cardConfig = DEFAULT_DATA,
  } = props;

  const { title, chartData, chartHeight } = cardConfig;

  return (
    <Card free className={styles.FusionCardGroupBarChart}>
      <Card.Header title={title} />
      <Card.Divider />
      <Card.Content>
        <Chart
          renderer="canvas"
          height={chartHeight}
          data={chartData}
          autoFit
          padding="auto"
          appendPadding={[80, 0, 30, 0]}
          scale={{ value: { min: -600, max: 600, tickInterval: 200 } }}
          interactions={['element-highlight']}
        >
          <Geom
            type="interval"
            position="category*value"
            state={intervalState}
            color={['type', colors]} // 配置颜色 具体API文档：https://bizcharts.net/product/BizCharts4/category/62/page/84#color
            adjust={[
              {
                type: 'dodge',
                marginRatio: 1 / 16,
              },
            ]}
          />
          <Tooltip visible={false} />
          <Axis
            name="value"
            grid={{ line: { style: { lineDash: [3, 3] } } }}
          />
          <Legend
            itemName={{ // 配置图例name,其中formatter可格式化图例name 具体API文档：https://bizcharts.net/product/BizCharts4/category/62/page/81#itemname
              style: {
                fill: '#666',
                fontSize: 14,
              },
            }}
            offsetY={-14} // 图例 Y 方向的偏移值，数值类型，数值单位为 'px'，默认值为 0。
          />

        </Chart>
      </Card.Content>
    </Card >
  );
};

export default FusionCardGroupBarChart;
