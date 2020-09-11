import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

import { fetchDailyData } from '../../api/index';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };
    fetchData();
  });

  const lineChar =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ reportDate }) => reportDate),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: '#3333ff',
              fill: true,
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
            },
          ],
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChar}</div>;
};

export default Chart;
