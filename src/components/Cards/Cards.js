import React from 'react';

import styles from './Cards.module.css';
import Card from '../Card/Card';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Card count={confirmed.value} lastUpdate={lastUpdate} />
      <Card count={recovered.value} lastUpdate={lastUpdate} />
      <Card count={deaths.value} lastUpdate={lastUpdate} />
    </div>
  );
};

export default Cards;
