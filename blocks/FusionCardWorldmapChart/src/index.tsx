import React, { useEffect, useState } from 'react';
import { Chart, View, Geom, Coordinate } from 'bizcharts';
import { Card, Table } from '@alifd/next';
import DataSet from '@antv/data-set';
import styles from './index.module.scss';

import mapData from './world.geo';
import mock from './mock';

interface ChartItem {
  lat?: string;
  lng?: string;
  value?: string;
}

interface TableItem {
  name?: string;
  pv?: string;
  uv?: string;
}

export interface DataSource {
  chartData?: ChartItem[];
  tableData?: TableItem[];
  chartHeight?: number;
  chartWidth?: number;
  title?: string;
}

interface FusionCardWorldmapChartProps {
  dataSource: DataSource;
}

const DEFAULT_DATA: DataSource = {
  chartData: mock,
  tableData: [
    { name: '杭州', pv: '246,200,123', uv: '143,367,212' },
    { name: '斯里兰卡', pv: '46,200,123', uv: '53,367,212' },
    { name: '旧金山', pv: '8,200,123', uv: '9,367,212' },
  ],
  chartHeight: 500,
  chartWidth: 800,
  title: '实时监控情况',
};

const circleState = {
  active: {
    style: {
      fillOpacity: 0.55,
      stroke: 'transparent',
      shadowColor: '#ff2f29',
      shadowBlur: 30,
    },
  },
  inactive: {
    style: {
      fillOpacity: 0.45,
      stroke: 'transparent',
    },
  },
};

const polygonState = {
  active: {
    style: {
      fillOpacity: 0.75,
      fill: '#DDDDDD',
      stroke: '#593821',
      strokeOpacity: 1,
      lineWidth: 0.5,
    },
  },
  inactive: {
    style: {
      fillOpacity: 0.85,
      fill: '#DDDDDD',
      stroke: '#593821',
      strokeOpacity: 1,
      lineWidth: 0.5,
    },
  },
};

const FusionCardWorldmapChart: SFC<FusionCardWorldmapChartProps> = (props: FusionCardWorldmapChartProps): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
  } = props;

  const { chartData, title, chartHeight, chartWidth, tableData } = dataSource;
  const [mapDataFormat, setMapDataFormat] = useState([]);
  const [chartDataFormat, setChartDataFormat] = useState([]);

  useEffect(() => {
    const ds = new DataSet();
    const dv = ds.createView('back')
      .source(mapData, {
        type: 'GeoJSON',
      })
      .transform({
        type: 'geo.projection',
        projection: 'geoMercator',
        as: ['x', 'y', 'centroidX', 'centroidY'],
      });
    setMapDataFormat(dv);
    const userData = ds.createView().source(chartData);
    userData.transform({
      type: 'map',
      callback: (obj) => {
        const newObj = { ...obj };
        const projectedCoord = dv.geoProjectPosition([newObj.lng * 1, newObj.lat * 1], 'geoMercator');
        newObj.x = projectedCoord[0];
        newObj.y = projectedCoord[1];
        newObj.value *= 1;
        return newObj;
      },
    });
    setChartDataFormat(userData);
  }, [chartData]);


  return (
    <Card free>
      <Card.Header title={title} />
      <Card.Divider />
      <Card.Content>
        <div className={styles.dataRow}>
          <span className={styles.total}>
            今日PV：<span className={styles.num}>490,760,415</span>
          </span>
          <span className={styles.total}>
            今日PV：<span className={styles.num}>490,760,415</span>
          </span>
        </div>
        <Chart
          pure
          height={chartHeight}
          width={chartWidth}
          className={styles.map}
          padding={[0, 20, 20, 20]}
          scale={{ x: { sync: true, nice: false }, y: { sync: true, nice: false } }}
          interactions={['element-highlight']}
        >
          <Coordinate reflect="y" />
          <View data={mapDataFormat} >
            <Geom
              type="polygon"
              position="x*y"
              style={{
                fill: '#DDDDDD',
                stroke: '#593821',
                lineWidth: 0.5,
                fillOpacity: 0.85,
              }}
              state={polygonState}
            />
          </View>
          <View data={chartDataFormat}>
            <Geom
              type="point"
              position="x*y"
              size={['value', [2, 30]]}
              shape="circle"
              style={{
                fillOpacity: 0.45,
                stroke: 'transparent',
              }}
              color="#ff2f29"
              state={circleState}
            />
          </View>
        </Chart>
        <Table dataSource={tableData}>
          <Table.Column title="地域" dataIndex="name" />
          <Table.Column title="PV" dataIndex="pv" />
          <Table.Column title="UV" dataIndex="uv" />
        </Table>
      </Card.Content>
    </Card>
  );
};

export default FusionCardWorldmapChart;
