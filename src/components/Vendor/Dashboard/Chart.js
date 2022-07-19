import React, { PureComponent, useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartStyle } from './DashboardStyled';

const PriceChart = () => {
  const [width, setWidth] = useState(400);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 800) {
      setWidth(300);
    }
    if (window.innerWidth <= 400) {
      setWidth(250);
    }
  });
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ChartStyle>
      <h2>Today's sales</h2>
      <h1>206, 500</h1>

      <BarChart width={width} height={width} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='uv' fill='#1b5958' />
      </BarChart>
    </ChartStyle>
  );
};

export default PriceChart;
