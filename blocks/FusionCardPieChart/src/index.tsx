import React, { useState } from 'react';
import { Radio, Card, Box } from '@alifd/next';
import { Chart, Geom, Coord, Axis, Legend, Annotation, Tooltip } from 'bizcharts';

import styles from './index.module.scss';


interface ChartItem {
  type?: string;
  value?: number;
  title?: string;
}

interface CardConfig {
  title?: string;
  value?: number;
  chartData?: ChartItem[];
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  title: '销售额类别占比',
  value: 183112,
  chartData: [
    {
      type: '类别一事例一',
      value: 40,
      title: '类别一事例一 | 40.00%     ¥4,544',
    },
    {
      type: '类别一事例二',
      value: 21,
      title: '类别一事例二 | 22.12%     ¥2,344',
    },
    {
      type: '类别一事例三',
      value: 17,
      title: '类别一事例三 | 16.59%     ¥3,512',
    },
    {
      type: '类别一事例四',
      value: 13,
      title: '类别一事例四 | 13.11%     ¥2,341',
    },
    {
      type: '类别一事例五',
      value: 9,
      title: '类别一事例五 |  9.29%     ¥1,231',
    },
  ],
  chartHeight: 500,
};

const colors_pie = ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#3436C7', '#223273'];

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

  const { title, value, chartData, chartHeight } = cardConfig;

  const [type, setType] = useState('one');
  const changeType = (key: string) => setType(key);


  return (
    <Card free>
      <Card.Header title={title} />
      <Card.Divider />
      <Card.Content>
        <Box align="center">
          <Radio.Group
            shape="button"
            value={type}
            onChange={changeType}
            className={styles.radioGroup}
          >
            <Radio value="one" className={styles.flex1}>
              类目一
            </Radio>
            <Radio value="two" className={styles.flex1}>
              类目二
            </Radio>
            <Radio value="three" className={styles.flex1}>
              类目三
            </Radio>
          </Radio.Group>
        </Box>
        <Chart
          height={chartHeight}
          autoFit
          data={chartData}
          padding="auto"
          appendPadding={[-18, 0, 0, 0]}
          interactions={['element-single-selected', 'element-highlight']}
        >
          <Coord type="theta" radius={0.65} innerRadius={0.6} />
          <Axis name="percent" />
          <Tooltip visible={false} />
          <Legend
            position="bottom"
            offsetY={-48}
            itemName={{
              style: {
                fill: '#666',
                fontSize: 14,
              },
            }}
            itemValue={null}
            itemMarginBottom={24}
            flipPage={false}
            maxWidth={400}
            maxItemWidth={400}
          />
          {/* @ts-ignore */}
          <Annotation.Text
            position={['50%', '44%']}
            content="销售额"
            style={{
              fontSize: '16',
              fill: '#333',
              textAlign: 'center',
            }}
          />
          {/* @ts-ignore */}
          <Annotation.Text
            position={['50%', '52%']}
            content="¥ 183112"
            style={{
              fontSize: '24',
              fontFamily: 'Roboto-Bold',
              fill: '#333',
              textAlign: 'center',
            }}
          />
          <Geom
            type="interval"
            position="value"
            color={['title', colors_pie]}
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
