import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { fetchDailyData } from '../../api';

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

  renderColorfulLegendText(value, entry) {
    const { color } = entry;

    return <span style={{ color }}>{value}</span>;
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="date"
            padding={{ right: 20 }}
            tick={{
              fill: 'white',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
              transform: 'translate(0, 5)',
            }}
            minTickGap={10}
            stroke="white"
          />
          <YAxis
            padding={{ top: 20 }}
            tick={{
              fill: 'white',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
            }}
            stroke="white"
          />
          <Tooltip
            labelStyle={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
              color: '#4361ee',
              textAlign: 'center',
            }}
            itemStyle={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
            }}
          />
          <Legend formatter={this.renderColorfulLegendText} />
          <Line
            type="monotone"
            dataKey="infected"
            stroke="#4ecdc4"
            dot={false}
            strokeWidth="0.2rem"
          />
          <Line
            type="monotone"
            dataKey="deaths"
            stroke="#ff6b6b"
            dot={false}
            strokeWidth="0.2rem"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
export default Chart;
