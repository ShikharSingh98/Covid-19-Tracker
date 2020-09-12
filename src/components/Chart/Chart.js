import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

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
          <XAxis dataKey="Date" tickLine={false} />
          <YAxis tickLine={false} tick={{ stroke: '' }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Infected"
            stroke="#4361ee"
            dot={false}
            strokeWidth="0.2rem"
          />
          <Line
            type="monotone"
            dataKey="Deaths"
            stroke="#ef233c"
            dot={false}
            strokeWidth="0.2rem"
          />
        </LineChart>
      </div>
    );
  }
}
export default Chart;
