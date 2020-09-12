import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

class Chart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const data = await fetchDailyData();
    this.setState({ data: data });
  }

  render() {
    return (
      <div className={styles.container}>
        <LineChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="Date"
            tickLine={false}
            padding={{ right: 20 }}
            tick={{
              fill: 'white',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
            }}
            minTickGap={10}
          />
          <YAxis
            tickLine={false}
            padding={{ top: 20 }}
            tick={{
              fill: 'white',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
            }}
          />
          <Tooltip
            labelStyle={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
            }}
            itemStyle={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="Infected"
            stroke="#4ecdc4"
            dot={false}
            strokeWidth="0.2rem"
          />
          <Line
            type="monotone"
            dataKey="Deaths"
            stroke="#ff6b6b"
            dot={false}
            strokeWidth="0.2rem"
          />
        </LineChart>
      </div>
    );
  }
}
export default Chart;
